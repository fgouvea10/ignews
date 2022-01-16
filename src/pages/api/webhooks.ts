import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('event received successfully');

  res.status(200).json({ success: true });
};
