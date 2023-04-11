// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const db = require("../../common/config/db");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const { roomName } = req.body;
  const { roomPeople } = req.body;
  const query = "INSERT INTO roomlist(roomname,roompeople) VALUES(?,?)";

  db.query(
    query,
    [roomName, roomPeople],
    function (err: any, result: any, fields: any) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        db.query("SELECT LAST_INSERT_ID()", function (err: any, result: any) {
          console.log(result);
          res.send(result[0]["LAST_INSERT_ID()"]);
        });
      }
    }
  );
}
