// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextRequest, res: NextResponse) {
  if (req) {
    console.log("req");
    console.log(req);
  }
  res.status(200).json({ name: "John Doe" });
}
