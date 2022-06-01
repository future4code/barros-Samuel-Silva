```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let salario = 2000
let salarioTotal = 0 
let comissaoPorQtde = qtdeCarrosVendidos*100
let comissaoPorValor = valorTotalVendas*0.05
salarioTotal=salario+comissaoPorValor+comissaoPorQtde
  return salarioTotal
}
```