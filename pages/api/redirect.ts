// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(`${req.method} ${req.url}. Headers: ${JSON.stringify(req.headers)}`)
  if (req.query?.step === '0') {
    res.redirect("/api/redirect?step=1")
  } else {
    res.redirect("/api/redirect?step=0")
  }
}
