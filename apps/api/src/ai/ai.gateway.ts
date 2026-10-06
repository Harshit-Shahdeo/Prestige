import {Inject, Injectable} from '@nestjs/common';
import { FeedbackAnalysisSchema } from './ai.schemas';

import{
    AIGenerationInput,
    AIGenerationResult,
    FeedbackAnalysisResult
} from './ai.types';

import type { AIProvider, FeedbackAnalysisInput } from './ai.types';

import { AI_PROVIDER } from './ai.tokens';

@Injectable()
export class AiGateway{
    constructor(
        @Inject(AI_PROVIDER)
        private readonly aiProvider: AIProvider,
    ){}

    async generate(
        input: AIGenerationInput,
    ):Promise<AIGenerationResult>{
        return this.aiProvider.generate(input);
    }

   async analyzeFeedback(
  input: FeedbackAnalysisInput,
): Promise<FeedbackAnalysisResult> {
  const result = await this.generate({
    systemPrompt: `
You generate short customer reviews for Prestige.

Your job is to turn the customer's rating and feedback signals
into a natural-sounding review that feels genuinely written by
a real person.

The input may contain a rating and a list of keywords or topics.

IMPORTANT:
- Treat keywords as signals about the customer's experience,
  not as words that must all appear in the review.
- Never write the review like a checklist of the keywords.
- Do not simply describe each keyword one after another.
- Synthesize the signals into one coherent experience.
- The review should sound casual, conversational, and human.
- Prefer simple everyday language over polished or professional
  language.
- Write the review in the language specified by the "language" field.
- Treat the language field as the customer's requested language or language variety.
- If the requested language is a mixed-language variety such as Hinglish, write naturally using that variety rather than mechanically translating from English.
- Do not change the intended sentiment or meaning when writing in another language.
- Avoid marketing language, promotional wording, and exaggerated
  praise.
- Avoid generic AI phrases such as "overall, it was a great
  experience", "highly recommended", or "I would definitely
  recommend this place" unless the input strongly supports them.
- Vary sentence structure and sentence length.
- Do not force every keyword into the review.
- Do not invent specific facts, events, people, dishes, prices,
  or experiences that are not supported by the input.
- Match the emotional tone of the rating.
- A low rating should sound genuinely dissatisfied rather than
  artificially polite.
- A high rating should sound positive without becoming
  promotional.
- Keep the review concise, usually 1–3 sentences.
- Write as if a normal customer typed the review casually into
  a review box.

Return ONLY valid JSON in exactly this format:

{
  "sentiment": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
  "review": "string"
}
`.trim(),

    userPrompt: JSON.stringify(input),

    temperature: 0.7,
    maxTokens: 300,
  });

  const parsed = JSON.parse(result.content);

  const analysis = FeedbackAnalysisSchema.parse(parsed);

  return{
    analysis, 
    generation:result
  }

  
}
    }
