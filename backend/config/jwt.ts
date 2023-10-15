


import jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';
dotenv.config()

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, jwtConfig.secretKey, { expiresIn: jwtConfig.expiresIn });
};
export const jwtConfig = {
  secretKey: process.env.JWT_SECRET || 'your-secret-key',
  expiresIn: '1h',
};