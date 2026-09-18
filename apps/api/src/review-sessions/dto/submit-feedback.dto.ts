import {Type} from 'class-transformer';
import { IsArray, IsInt, IsNotEmpty, Max, Min, ValidateNested } from 'class-validator';
import { FeedbackKeywordDto } from './feedback-keyword.dto';

export class SubmitFeedbackDto{
    @IsInt()
    @Min(1)
    @Max(5)
    rating!:number;

    @IsArray()
    @IsNotEmpty()
    @ValidateNested()
    @Type(()=> FeedbackKeywordDto)
    keywords!:FeedbackKeywordDto[]

}