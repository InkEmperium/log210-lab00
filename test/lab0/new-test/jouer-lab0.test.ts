import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('test', 'lab0', 'routes', 'jeuRouter-lab0.test.ts');
  content = readFileSync(filename, 'utf-8');
});

describe('test/routes/jeuRouter-jouer.test.ts', () => {
  it("should contain expect(content.includes('resultatObj.v3').toBeWithin(1, 7)", () => {
    expect(content.includes("expect(content.includes('resultatObj.v3')).toBeWithin(1, 7)")).toBeTruthy();
  });
});
