# Setup Node express with typescript

```shell
    yarn add @types/express express @type/morgan morgan typescript  ts-node-dev
```
## create package.json
```shelll
    npm i init -y
```
package.json
```json
  "scripts": {
    "test": "ts-node-dev app.ts",
    "start": "tsc && node dist/app.js",
  }
```
## create tsconfig.json
```shell
    tcs --init
```
tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}
