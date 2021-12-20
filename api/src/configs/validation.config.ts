import { ValidationPipeOptions } from '@nestjs/common';

export const validationOptions: ValidationPipeOptions = {
  transform: true,
  disableErrorMessages: false,
  stopAtFirstError: true,
  skipUndefinedProperties: false,
};
