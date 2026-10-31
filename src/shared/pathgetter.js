import path from 'path';

export function getrelativefile(current, to) {
  let rel = path.relative(current, to).replace(/\\/g, '/');
  return rel.startsWith('.') ? rel : `./${rel}`;
}
