# CareerPilot — AI Job Application Assistant Agent

An agentic AI system built with NestJS and LangGraph that autonomously 
analyzes CV-job fit, suggests improvements, and generates cover letters.

## What Makes This Agentic

Unlike a normal API call where you control every step, this system uses 
an AI agent that autonomously decides which tools to use and in what order 
to achieve the goal. You provide the goal — the agent figures out the steps.

## Features

- CV vs Job fit analysis with match score
- Skill gap detection
- Personalized CV improvement suggestions  
- Auto-generated cover letters
- Results saved to MongoDB
- Full Swagger documentation

## Tech Stack

- NestJS — backend framework
- LangGraph — agent orchestration
- Groq LLaMA 3.3 70b — AI model
- MongoDB — result storage
- Swagger — API documentation

## How The Agent Works
User sends CV + Job Description
↓
Agent calls CVAnalyzerTool → extracts candidate skills
↓
Agent calls JobAnalyzerTool → extracts job requirements
↓
Agent calls MatchScorerTool → calculates fit score
↓
Returns: score, gaps, improvements## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /agent/analyze-job | Analyze CV vs job fit |
| POST | /agent/improve-cv | Get CV improvement suggestions |
| POST | /agent/generate-cover-letter | Generate personalized cover letter |

## Setup

```bash
git clone https://github.com/yourusername/career-pilot
cd career-pilot
npm install
```

Create `.env` file:GROQ_API_KEY=your_key_here
MONGODB_URI=mongodb://localhost:27017/ai-job-agent
PORT=3000
```bash
npm run start:dev
```

Open Swagger: http://localhost:3000/api

## Sample Response

```json
{
  "matchScore": 60,
  "matchingSkills": ["NestJS", "TypeScript"],
  "missingSkills": ["Docker", "AWS"],
  "improvements": [
    "Add Docker containerization experience",
    "Get AWS certification",
    "Build more complex distributed systems"
  ],
  "summary": "Strong NestJS foundation, needs cloud experience"
}
```
