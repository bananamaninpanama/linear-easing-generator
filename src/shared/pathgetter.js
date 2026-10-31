import path from 'path';
import { fileURLToPath } from 'url';

export function getrelativefile(to: any) {
  let rel = path.relative(path.dirname(fileURLToPath(import.meta.url)), to).replace(/\\/g, '/');
  return rel.startsWith('.') ? rel : `./${rel}`;
}
