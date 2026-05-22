import { Tool } from '@langchain/core/tools';
import { ChatGroq } from '@langchain/groq';

export class MatchScorerTool extends Tool{
 name = 'match_scorer';
  description = 'Scores how well a candidate matches a job. Input should be a string describing CV skills and job requirements.'
private llm:ChatGroq;
constructor(){
    super() 
    this.llm=new ChatGroq({
    apiKey:process.env.GROQ_API_KEY!,
    model:'llama-3.3-70b-versatile',
    temperature:0
})}

async _call(input:string):Promise<string>{
const result = await this.llm.invoke(`
   Based on this information:
   ${input}
    Calculate:
      1. Match percentage (0-100)
      2. Matching skills
      3. Missing skills (gaps)
      4. 3 specific CV improvement suggestions

      Return as JSON only. No extra text.  `);
    return result.content as string;



    
}

}