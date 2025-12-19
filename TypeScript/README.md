# Como ejecutar Scripts en TS
Con un solo comando puede usarse:
ts-node `nombredelarchivo.ts`
!Si eso no funciona puede ejecutar:
ts-node --compiler-options '{"module":"CommonJS"}' + `nombredelarchivo.ts`

La otra opción es con dos comandos
1. tsc + `nombredelarchivo.ts`
El resultado de el punto #1 es un archivo JavaScript
2. node+ `nombredelarchivo.js`