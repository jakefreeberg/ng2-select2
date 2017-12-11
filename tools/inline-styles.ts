import { writeFileSync, readFileSync } from 'fs';

let lib = readFileSync('lib/sps-angular-select2.component.ts').toString();
writeFileSync('lib/sps-angular-select2.component.ts.bak', lib);

const styles = readFileSync('lib/sps-angular-select2.component.css');
lib = lib.replace(/CSS/, `${styles}`);

writeFileSync('lib/sps-angular-select2.component.ts', lib);