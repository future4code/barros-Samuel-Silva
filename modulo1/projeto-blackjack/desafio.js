/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   

    let carta4 = comprarCarta()
    let carta1 = comprarCarta() 
    let carta2 = comprarCarta()
    let carta3 = comprarCarta()
    let pontosUsuario = carta1.valor + carta2.valor
    let pontosComput =  carta3.valor + carta4.valor

   // Abertura do jogo
console.log('♣️ ♥️ ♠️ ♦️   BOAS VINDAS AO JOGO DE BLACKJACK!  ♣️ ♥️ ♠️ ♦️')
if(confirm("Deseja inciar uma nova rodada?")) {
      
      comprarCarta() 
   // Teste do 2 Ases
      if (pontosUsuario !== 22 && pontosComput !== 22) {
       iniciaJogo()
      } else {
       console.log('Dois Ases sorteados, reiniciando rodada')  
       comprarCarta()
             }
   
   // Inicio da rodada   

   confirm(
      "Suas cartas são: " + carta1.texto + carta2.texto  + ". A carta revelada do computador é " + carta3.texto +
      "\n"+  // \n faz pular a linha
      "Deseja comprar mais uma carta?"
   )
    
      function definejogo () {
         let cartasUsuario = [carta1,carta2]
         let cartasComput = [carta3,carta4]
         // console.log(`Suas cartas: ${carta1.texto} ${carta2.texto} /// Pontuação: ${pontosUsuario}`)
         // console.log(`Cartas do computador: ${carta3.texto} ${carta4.texto} /// Pontuação: ${pontosComput}`) 
         if (pontosComput === pontosUsuario){
            console.log("Empate")
         } else if
            (pontosComput > pontosUsuario){
            console.log("O computador ganhou!")
         } else if
            (pontosComput < pontosUsuario){
            console.log("Você ganhou!!!")
            }
      }    
    }else {
      console.log('O jogo acabou!')
   }