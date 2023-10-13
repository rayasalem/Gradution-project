import jwt from 'jsonwebtoken';
const secretKey = 'your-secret-key';

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (token: string): object | string => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return 'Invalid Token';
  }
};