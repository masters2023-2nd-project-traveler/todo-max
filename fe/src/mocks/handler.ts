import { rest } from 'msw';

import { todolist } from './data/todolist';
import { actionHistory } from './data/actionHistory';

const handlers = [
  // rest.get('http://52.79.68.54:8080/drinks', (req, res, ctx) => {
  //   const category = req.url.searchParams.get('category');

  //   let drinks;
  //   switch (category) {
  //     case 'coffee':
  //       drinks = coffeeDrinks;
  //       break;
  //     case 'latte':
  //       drinks = latteDrinks;
  //       break;
  //     case 'tea':
  //       drinks = teaDrinks;
  //       break;
  //     case 'juice':
  //       drinks = juiceDrinks;
  //       break;
  //     case 'decaffein':
  //       drinks = decaffein;
  //       break;
  //     default:
  //       return res(ctx.status(400), ctx.json({ message: 'Invalid category' }));
  //   }

  //   return res(ctx.status(200), ctx.json(drinks));
  // }),

  rest.get('http://52.79.68.54:8080/todolist', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todolist));
  }),

  rest.get('http://52.79.68.54:8080/todolisturl', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(actionHistory));
  }),

  // rest.get('http://52.79.68.54:8080/recipe', (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(recipe));
  // }),

  // rest.post('/cart', (req, res, ctx) => {
  //   const item = req.body;
  //   console.log(item);
  //   return res(
  //     ctx.json({
  //       message: `정상작동중`,
  //     }),
  //     ctx.status(200)
  //   );
  // }),
];

export default handlers;
