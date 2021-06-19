import { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse): void => {
  const a = 2;
  const b = 3;
  const result = a + b;
  res.status(200).json({ name: 'John Doe', res: result });
};
