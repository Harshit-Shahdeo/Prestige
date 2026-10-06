
import {z} from 'zod';

export const FeedbackAnalysisSchema = z.object({
    sentiment: z.enum([
        'POSITIVE',
        'NEUTRAL',
        'NEGATIVE'
    ]),
    review: z.string().min(1),
});
export type FeedbackAnalysis = z.infer<typeof FeedbackAnalysisSchema>;
