/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node script.js 100
 */
const args = process.argv[2];
console.log(`Running question #1 with args ${args}`)


 function climbStairs(n) {
    if (n < 3) return n;
    let dato1 = 1;
    let dato2 = 2;
    for (let i = 2; i < n; i++) {
      const result = dato1 + dato2;
      dato1 = dato2;
      dato2 = result;
    }
    console.log(`Cantidad de formas para subir escalones ${dato2}`)

    
  }
  
climbStairs(args);

