export type AIProviderName= 'groq';

export interface AIGenerationInput{
    systemPrompt: string,
    userPrompt : string,
    temperature?: number,
    maxTokens?:number
}

export interface AIGenerationResult{
    provider:AIProviderName;
    model:string;
    content:string;
    inputTokens?: number;
    outputTokens?:number;
    totalTokens?:number;
}

export interface AIProvider{
    readonly name: AIProviderName;

    generate(input : AIGenerationInput,):Promise<AIGenerationResult>;
}
