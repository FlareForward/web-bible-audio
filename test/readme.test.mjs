import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
test('README states the public domain license and the file naming', () => {
  assert.match(readme, /public domain/i);
  assert.match(readme, /<BOOK>-<chapter>\.mp3/);
  assert.ok(!readme.includes('—'), 'no em dashes');
});
