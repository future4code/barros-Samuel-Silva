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
    let pontosUsuario = [carta1.valor + carta2.valor]

    let pontosComput =  carta3.valor + carta4.valor
    let cartasUsuario = [carta1.texto,carta2.texto]
    let cartasComput = [carta3.texto,carta4.texto]
    let novaCarta = []


   // Abertura do jogo ---------------------------------------------------------------------------------------------------
      console.log('♣️ ♥️ ♠️ ♦️   BOAS VINDAS AO JOGO DE BLACKJACK!  ♣️ ♥️ ♠️ ♦️')
      if(confirm("Deseja inciar uma nova rodada?")) {
      comprarCarta() 
   
   // Teste do 2 Ases -----------------------------------------------------------------------------------------------------
         if (pontosUsuario !== 22 && pontosComput !== 22) {
         iniciaJogo()
      }  else {
         console.log('Dois Ases sorteados, reiniciando rodada')  
         comprarCarta()
         }
   
   // // Inicio da rodada . Comprar mais cartas ----------------------------------------------------------------------------  
            function iniciaJogo ()
            let pontosUsuarioMaisCompra = (pontosUsuario+novaCarta.valor)                        
            while (pontosUsuarioMaisCompra < 22) {
               if(confirm("Suas cartas são: " + cartasUsuario  + ". A carta revelada do computador é " + carta3.texto +
                    "\n"+  // \n faz pular a linha
                    "Deseja comprar mais uma carta?")) {
            novaCarta = comprarCarta()
            cartasUsuario.push(novaCarta.texto)  
            pontosUsuarioMaisCompra = pontosUsuario + novaCarta.valor
            }
            console.log(`Carta comprada: ` + novaCarta.texto)
            console.log(`Suas cartas:` + cartasUsuario + `/// Pontuação: ${pontosUsuarioMaisCompra}`)
            console.log(`Cartas do computador: ${carta3.texto} ${carta4.texto} /// Pontuação: ${pontosComput}`)
         }             
         }  else if             
            (pontosComput === pontosUsuario){
            console.log("Empate")
         }  else if
            (pontosComput > pontosUsuario){
            console.log("O computador ganhou!")
         }  else if
            (pontosComput < pontosUsuario){
            console.log("Você ganhou!!!")
         }
   
      console.log('O jogo acabou!')
  