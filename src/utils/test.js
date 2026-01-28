import { createNewsData } from './NewsAPI.js';

async function test() {
  await createNewsData('aves');
}

test();
