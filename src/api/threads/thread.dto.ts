import { IsEnum, IsNumber, IsOptional } from 'class-validator';

export enum LabelType {
  Sent = 'Sent',
  Inbox = 'Inbox',
  Archived = 'Archived',
}

export class ThreadListQuery {
  @IsOptional()
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsNumber()
  page?: number;

  // @Reflect.metadata('design:type', { name: 'string' })
  @IsEnum(LabelType)
  label: LabelType;
}
