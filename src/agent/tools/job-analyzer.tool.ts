import { Tool } from '@langchain/core/tools';
import { ChatGroq } from '@langchain/groq';

export class JobAnalyzerTool extends Tool{
 name = 'Job_analyzer';
  description = 'Analyzes a job description and extracts required skills. Input should be job description text.';

private llm:ChatGroq;
constructor(){
    super() 
    this.llm=new ChatGroq({
    apiKey:process.env.GROQ_API_KEY!,
    model:'llama-3.3-70b-versatile',
    temperature:0
})}

async _call(jobDescripton:string):Promise<string>{
const result = await this.llm.invoke(`
      Extract from this job description:
      1. Required technical skills
      2. Required experience years
      3. Nice to have skills
      4. Key responsibilities


      Job Description: ${jobDescripton}

      Return as JSON only. No extra text.
    `);
    return result.content as string;



    
}

}