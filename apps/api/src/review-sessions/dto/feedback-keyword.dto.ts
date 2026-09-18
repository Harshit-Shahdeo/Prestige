import { IsEnum, IsString, isString } from "class-validator";
import { Sentiment } from "@prisma/client";

export class FeedbackKeywordDto{
@IsString()
keywordId!: string;

@IsEnum(Sentiment)
sentiment!: Sentiment

}