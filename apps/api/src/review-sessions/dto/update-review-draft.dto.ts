import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class UpdateReviewDraftDto {
    @IsString()
    @IsNotEmpty()
    text!: string;
}