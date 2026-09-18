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
            model : 'llama-3.1-8b-instant',
            temperature: input.temperature ?? 0.2,
            max_tokens: input.maxTokens ?? 500,
            messages:[
                {
                    role:'system',
                    content: input.userPrompt,
                },
                {
                    role:'user',
                    content: input.userPrompt,
                },
            ],
        });

        const content = 
        response.choices[0]?.message?.content;

        if(!content){
            throw new Error(
                'Groq returned an empty response',
            );
        }

        return {
            provider: this.name,
            model: 'llama-3.1-8b-instant',
            content,
            inputTokens: response.usage?.prompt_tokens,
            outputTokens: response.usage?.completion_tokens,
            totalTokens: response.usage?.total_tokens
        };
    }
}