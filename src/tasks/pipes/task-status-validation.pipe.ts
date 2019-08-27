import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';
export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];
  transform(value: any, metadata: ArgumentMetadata) {
    if (!this.isStatusValid(value.toUpperCase())) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    return this.allowStatuses.includes(status);
  }
}
