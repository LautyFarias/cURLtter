import { nanoid } from 'nanoid';

export function generateCode() {
  return nanoid(8);
}
