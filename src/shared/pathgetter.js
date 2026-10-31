export function getrelativefile(to) {
  import path from 'path';
  import { fileURLToPath } from 'url';
  let rel = path.relative(path.dirname(fileURLToPath(import.meta.url)), to).replace(/\\/g, '/');
  return rel.startsWith('.') ? rel : `./${rel}`;
}
