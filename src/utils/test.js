import { createNews } from './NewsAPI.js';

async function test() {
  await createNews('aves');
}

test();
