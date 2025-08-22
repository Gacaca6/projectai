import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

interface PitchData {
  projectName: string;
  industry: string;
  problem: string;
  solution: string;
  target: string;
  budget: string;
  timeline: string;
}

export const generatePitch = async (data: PitchData): Promise<string> => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey || apiKey === 'YOUR_API_KEY') {
    return `# ${data.projectName} - Project Pitch

## Problem Statement
${data.problem}

## Solution Overview
${data.solution}

## Target Market
${data.target}

## Project Timeline
${data.timeline}

## Budget Requirements
${data.budget}

## Why This Matters
This project addresses a critical need in the ${data.industry} industry and has the potential to make a significant impact.

## Next Steps
1. Secure funding and resources
2. Assemble the development team
3. Begin implementation phase
4. Launch and iterate based on feedback

*Note: This is a sample pitch. Connect your OpenAI API key to generate AI-powered pitches.*`;
  }

  try {
    const prompt = `Create a compelling project pitch for the following project:

Project Name: ${data.projectName}
Industry: ${data.industry}
Problem: ${data.problem}
Solution: ${data.solution}
Target Audience: ${data.target}
Budget: ${data.budget}
Timeline: ${data.timeline}

Please create a professional, persuasive pitch that includes:
1. Executive Summary
2. Problem Statement
3. Solution Overview
4. Market Opportunity
5. Business Model
6. Implementation Plan
7. Financial Projections
8. Team Requirements
9. Risk Assessment
10. Call to Action

Make it engaging and suitable for investors or stakeholders.`;

    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a professional business consultant and pitch writer. Create compelling, well-structured project pitches.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1500,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating pitch:', error);
    throw new Error('Failed to generate pitch. Please check your API key and try again.');
  }
};
