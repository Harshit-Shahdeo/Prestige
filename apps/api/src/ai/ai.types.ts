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

export type Sentiment = 
| 'POSITIVE'
| 'NEUTRAL'
| 'NEGATIVE';

export interface FeedbackAnalysis{
    sentiment: Sentiment;
    review: string;
}

export interface FeedbackAnalysisInput{
    businessType:string,
    rating:number;
    keywords:string[];
}