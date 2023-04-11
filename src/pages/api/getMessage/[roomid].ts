// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const db = require("../../../common/config/db");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roomid } = req.query;
  db.query(
    "SELECT * FROM roomlist WHERE roomid=?",
    roomid,
    function (err: any, result: any) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
        res.json(result[0]);
      }
    }
  );
}
