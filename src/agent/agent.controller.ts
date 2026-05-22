import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AgentService } from './agent.service';
import { CoverLetterDto, ImproveCVDto } from './dto/job-analyze.dto';

class AnalyzeJobDto {
  cv!: string;
  jobDescription!: string;
}

@ApiTags('Agent')
@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post('analyze-job')
  @ApiOperation({ summary: 'Analyze CV vs Job fit using AI Agent' })
  async analyzeJob(@Body() body: AnalyzeJobDto) {
    const result = await this.agentService.analyzeJobFit(
      body.cv,
      body.jobDescription,
    );
    return {  success: true, data:result };
  }
  @Post('improve-cv')
  @ApiOperation({ summary: 'Get CV improvement suggestions' })
  async improveCV(@Body() body: ImproveCVDto) {
    const result = await this.agentService.improveCV(
      body.cv,
      body.targetRole,
    );
    return { success: true, data: result };
  }

  @Post('generate-cover-letter')
  @ApiOperation({ summary: 'Generate personalized cover letter' })
  async generateCoverLetter(@Body() body: CoverLetterDto) {
    const result = await this.agentService.generateCoverLetter(
      body.cv,
      body.jobDescription,
      body.companyName,
    );
    return { success: true, data: result };
  }
}

