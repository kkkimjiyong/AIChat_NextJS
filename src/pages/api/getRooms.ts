// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const db = require("../../common/config/db");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  db.query("SELECT * FROM roomlist", function (err: any, result: any) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
}
