import * as dotenv from 'dotenv';
dotenv.config();

import { Tool } from '@langchain/core/tools';
import { ChatGroq } from '@langchain/groq';

export class CvAnalyzerTool extends Tool{
 name = 'cv_analyzer';
  description = 'Analyzes a CV and extracts skills, experience, and education. Input should be CV text.';

private llm:ChatGroq;
constructor(){
    super() 
    this.llm=new ChatGroq({
    apiKey:process.env.GROQ_API_KEY!,
    model:'llama-3.3-70b-versatile',
    temperature:0
})}

async _call(cvText:string):Promise<string>{
const result = await this.llm.invoke(`
      Extract from this CV:
      1. Technical skills listed
      2. Years of experience
      3. Education level
      4. Projects built

      CV: ${cvText}

      Return as JSON only. No extra text.
    `);
    return result.content as string;
    
}


}

