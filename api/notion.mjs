import 'dotenv/config';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

let dbAdjectives = await notion.databases.query({
  database_id: '920b7a2d4d544304b1cd497e333fa45a',
});

const adjectives = dbAdjectives.results.reduce((adjectives, result) => {
  const newAdjective = result?.properties?.Name?.title[0]?.plain_text;
  return !newAdjective ? adjectives : [...adjectives, newAdjective];
}, []);

export default {
  adjectives,
};
