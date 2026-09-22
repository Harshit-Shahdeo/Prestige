import { Inject, Injectable } from "@nestjs/common";
import Groq from 'groq-sdk';

import{
    AIGenerationInput, 
    AIGenerationResult,
    AIProvider,
} from '../ai.types'

@Injectable()
export class GroqProvider implements AIProvider{
    readonly name = 'groq' as const;

    private readonly groq : Groq;

    constructor(){
        this.groq = new Groq({
            apiKey: process.env.GROQ_API_KEY,
        });
    }

    async generate(
        input : AIGenerationInput,
    ):Promise<AIGenerationResult>{
        const response = 
        await this.groq.chat.completions.create({
            model : 'openai/gpt-oss-20b',
            temperature: input.temperature ?? 0.2,
            max_tokens: input.maxTokens ?? 500,
            response_format:{
                type:'json_object'
            },
            messages:[
                {
                    role:'system',
                    content: input.systemPrompt,
                },
                {
                    role:'user',
                    content: input.userPrompt,
                },
            ],
        });

        console.log(
  'GROQ RESPONSE:',
  JSON.stringify(response, null, 2),
);

        const content = 
        response.choices[0]?.message?.content;

        if(!content){
            throw new Error(
                'Groq returned an empty response',
            );
        }

        return {
            provider: this.name,
            model: 'openai/gpt-oss-20b',
            content,
            inputTokens: response.usage?.prompt_tokens,
            outputTokens: response.usage?.completion_tokens,
            totalTokens: response.usage?.total_tokens
        };
    }
}