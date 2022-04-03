import 'dotenv/config';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

let database = await notion.blocks.children.list({
  block_id: 'a6371f6532ab47d1aab8c225f2d7468e',
});

database = await Promise.all(
  database.results.map(async (block) => {
    let db = await notion.databases.retrieve({
      database_id: block.id,
    });

    const title = db.title[0].plain_text.toLowerCase();

    db = await notion.databases.query({
      database_id: db.id,
    });

    const data = await Promise.all(
      db.results.map(async (row) => {
        if (row.object === 'page') {
          const block = await notion.blocks.retrieve({
            block_id: row.id,
          });

          return block.child_page.title;
        }

        return row;
      })
    );

    return {
      [title]: data,
    };
  })
);

database = database.reduce((acc, curr) => {
  return { ...acc, ...curr };
}, {});

export default database;
