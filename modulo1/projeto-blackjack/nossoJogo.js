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
    console.log('♣️ ♥️ ♠️ ♦️   BOAS VINDAS AO JOGO DE BLACKJACK!  ♣️ ♥️ ♠️ ♦️')

    if(confirm("Deseja inciar uma nova rodada?")) {
         
    
    const carta1 = comprarCarta() 
    const carta2 = comprarCarta() 
    const cartaUsuario =  carta1.valor + carta2.valor
    console.log(`Suas cartas: ${carta1.texto} ${carta2.texto} /// Pontuação: ${cartaUsuario}`) 
    
    const carta3 = comprarCarta() 
    const carta4 = comprarCarta() 
    const cartaComput =  carta3.valor + carta4.valor
    console.log(`Cartas do computador: ${carta3.texto} ${carta4.texto} /// Pontuação: ${cartaComput}`) 
   
    let comparaPontos
    let resultado
    
      if (cartaComput === cartaUsuario){
         console.log("Empate")
      } else if
         (cartaComput > cartaUsuario){
         console.log("O computador ganhou!")
      } else if
         (cartaComput < cartaUsuario){
         console.log("Você ganhou!!!")
      }
   
} else {
   console.log('O jogo acabou!')
}