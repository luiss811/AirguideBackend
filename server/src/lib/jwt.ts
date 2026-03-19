import jwt from 'jsonwebtoken';

const VITE_JWT_SECRET = process.env.VITE_JWT_SECRET || '67c87664b5bba0c8746a21b017b4ea71';
const VITE_JWT_EXPIRES_IN = process.env.VITE_JWT_EXPIRES_IN || '1d';

export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}

export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, VITE_JWT_SECRET, {
    expiresIn: VITE_JWT_EXPIRES_IN,
  });
}

export function verifyToken(token: string): JwtPayload {
  try {
    return jwt.verify(token, VITE_JWT_SECRET) as JwtPayload;
  } catch (error) {
    throw new Error('Token inválido o expirado');
  }
}
