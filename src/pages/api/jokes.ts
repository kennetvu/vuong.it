// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getJoke } from 'utils/jokes';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const joke = getJoke();
  res.status(200).send(joke);
}
