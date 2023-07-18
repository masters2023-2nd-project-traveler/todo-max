import { rest } from 'msw';

import { todolist } from './data/todolist';
import { actionHistory } from './data/actionHistory';

const handlers = [
  rest.get('/todolist', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(todolist));
  }),

  rest.get('/history', (_, res, ctx) => {
    console.log(actionHistory);

    return res(ctx.status(200), ctx.json(actionHistory));
  }),

  rest.delete('/history', (_, res, ctx) => {
    // 모든 데이터를 삭제한 후의 상태를 반환
    actionHistory.message = [];
    return res(ctx.status(200), ctx.json(actionHistory));
  }),

  rest.delete('/task/:taskId', (req, res, ctx) => {
    const { taskId } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        statusCode: 200,
        message: `카드${taskId} 삭제 성공`,
      }),
    );
  }),

  rest.patch('/task/:taskId', (req, res, ctx) => {
    // const { taskId } = req.params;
    const testBody = req.body;
    console.log(testBody);

    return res(
      ctx.json({
        statusCode: 200,
        message: '카드 수정 성공',
      }),
    );
  }),

  rest.post('/task', (req, res, ctx) => {
    const newTask: any = req.body;
    const taskId = Math.floor(Math.random() * 1000) + 1;

    return res(
      ctx.json({
        statusCode: 200,
        message: {
          taskId: taskId,
          processId: newTask.processId,
          title: newTask.title,
          contents: newTask.contents,
          platform: newTask.platform,
        },
      }),
      ctx.status(200),
    );
  }),

  rest.patch('/process/:processId', (req, res, ctx) => {
    const { processId } = req.params;

    return res(
      ctx.json({
        statusCode: 200,
        message: `컬럼 ${processId} 업데이트 성공`,
      }),
      ctx.status(200),
    );
  }),

  rest.post('/process', (req, res, ctx) => {
    const newProcess: any = req.body.processName;

    return res(
      ctx.json({
        statusCode: 200,
        message: `컬럼 ${newProcess} 생성 성공`,
      }),
      ctx.status(200),
    );
  }),

  rest.delete('/process/:processId', (req, res, ctx) => {
    const { processId } = req.params;

    return res(
      ctx.json({
        statusCode: 200,
        message: `컬럼 ${processId} 삭제 성공`,
      }),
      ctx.status(200),
    );
  }),
];

export default handlers;
