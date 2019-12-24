import {
  Get,
  Post,
  Body,
  JsonController,
  QueryParams,
  Param,
  QueryParam,
} from 'routing-controllers';

import { LabelType, ThreadListQuery } from './thread.dto';


@JsonController()
export class ThreadController {
  @Get('/threads')
  async list(
    @QueryParams() query: ThreadListQuery
  ) {
    console.log(query);
    return 'ok';
  }

  @Post('/threads')
  async listPost(
    @Param('id') id: string,
    @Body() query: ThreadListQuery
  ) {
    console.log(query);
    return 'ok';
  }

  @Get('/threads/:id')
  getOne(
    @Param('id') id: string,
    @QueryParam('label') label: LabelType,
    // @QueryParam('label', { type: 'string' }) label: LabelType,
  ) {
    console.log(label);
    return 'ok';
  }
}
