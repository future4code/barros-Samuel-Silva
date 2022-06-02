```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    for (let i=0; i<arrayDeNumeros;i++) {
    let contador = 0
         if (i=numeroEscolhido){
         contador=+i
         console.log(`O número ${numeroEscolhido} aparece ${contador}x`)
         }else {
     console.log(`Número não encontrado`)
  }
}
```