import { Injectable } from '@nestjs/common';
import { ChatGroq } from '@langchain/groq';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { CvAnalyzerTool } from './tools/cv-analyzer.tool';
import { JobAnalyzerTool } from './tools/job-analyzer.tool';
import { MatchScorerTool } from './tools/match-scorer.tool';

@Injectable()
export class AgentService {
  async analyzeJobFit(cvText: string, jobDescription: string): Promise<object> {
    const llm = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY!,
      model: 'llama-3.3-70b-versatile',
      temperature: 0,
    });

    const tools = [
      new CvAnalyzerTool(),
      new JobAnalyzerTool(),
      new MatchScorerTool(),
    ];

    const agent = createReactAgent({ llm, tools });

    const result = await agent.invoke(
      {
        messages: [
          {
            role: 'user',
            content: `
              Analyze this CV against the job description.

              CV: ${cvText}
              Job Description: ${jobDescription}

              Do these steps IN ORDER, each tool ONCE only:
              1. Use cv_analyzer tool ONCE
              2. Use job_analyzer tool ONCE
              3. Use match_scorer tool ONCE
              4. Return result as JSON only in this exact format:
              {
                "matchScore": 80,
                "matchingSkills": ["skill1", "skill2"],
                "missingSkills": ["skill1", "skill2"],
                "improvements": ["suggestion1", "suggestion2", "suggestion3"],
                "summary": "one line summary"
              }
              Do NOT call any tool more than once.
              After getting all 3 results return the JSON immediately.
            `,
          },
        ],
      },
      {
        recursionLimit: 10,
      },
    );

    // Extract final message
    const messages = result.messages;
    const lastMessage = messages[messages.length - 1];
    const raw = lastMessage.content as string;
const cleaned = raw.replace(/```json|```/g, '').trim();
return JSON.parse(cleaned);
  }

  async improveCV(cvText: string, targetRole: string): Promise<object> {
  const llm = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY!,
    model: 'llama-3.3-70b-versatile',
    temperature: 0,
  });

  const tools = [new CvAnalyzerTool()];
  const agent = createReactAgent({ llm, tools });

  const result = await agent.invoke(
    {
      messages: [
        {
          role: 'user',
          content: `
            Analyze this CV for the target role.

            CV: ${cvText}
            Target Role: ${targetRole}

            Use cv_analyzer tool ONCE then return JSON:
            {
              "currentStrengths": ["strength1", "strength2"],
              "improvements": ["improvement1", "improvement2", "improvement3"],
              "missingKeywords": ["keyword1", "keyword2"],
              "overallRating": 7
            }
            Return JSON only. No extra text.
          `,
        },
      ],
    },
    { recursionLimit: 10 },
  );

  const messages = result.messages;
  const lastMessage = messages[messages.length - 1];
  const raw = lastMessage.content as string;
  const cleaned = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(cleaned);
}

async generateCoverLetter(
  cvText: string,
  jobDescription: string,
  companyName: string,
): Promise<object> {
  const llm = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY!,
    model: 'llama-3.3-70b-versatile',
    temperature: 0,
  });

  const tools = [new CvAnalyzerTool(), new JobAnalyzerTool()];
  const agent = createReactAgent({ llm, tools });

  const result = await agent.invoke(
    {
      messages: [
        {
          role: 'user',
          content: `
            Generate a cover letter for this candidate.

            CV: ${cvText}
            Job Description: ${jobDescription}
            Company Name: ${companyName}

            Use cv_analyzer ONCE and job_analyzer ONCE then return JSON:
            {
              "coverLetter": "full cover letter text here",
              "keyPointsHighlighted": ["point1", "point2", "point3"]
            }
            Return JSON only. No extra text.
          `,
        },
      ],
    },
    { recursionLimit: 10 },
  );

  const messages = result.messages;
  const lastMessage = messages[messages.length - 1];
  const raw = lastMessage.content as string;
  const cleaned = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(cleaned);
}}