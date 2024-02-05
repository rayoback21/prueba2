import { ApiProperty } from "@nestjs/swagger";

export class CreateConstructionDto {
    @ApiProperty()
    projectName: string;

    @ApiProperty({required: false})
    information: string;

    @ApiProperty()
    startDate: string;

    @ApiProperty()
    finaltDate: string;

    @ApiProperty()
    countLastSee: number;

    @ApiProperty({ required: false, default: false})
    extinct?: boolean = false;
}
