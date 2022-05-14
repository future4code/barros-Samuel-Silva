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
    let pontosComput = [carta3.valor + carta4.valor]
    let cartasUsuario = [carta1.texto,carta2.texto]
    let cartasComput = [carta3.texto,carta4.texto]
    let somaCartasUsuario = 0
    let somaCartasComput = 0


   // Abertura do jogo --------------------------------------------------------------------------------------------------- Mostra mensagem de abertura (OK!)
      
      if(confirm("♣️ ♥️ ♠️ ♦️  BOAS VINDAS AO JOGO DE BLACKJACK! ♦️ ♠️ ♥️ ♣️     Deseja inciar uma nova rodada? ")) {
      comprarCarta() 
      }
   // Teste do 2 Ases ----------------------------------------------------------------------------------------------------- Não mostra ao usuário quando for 2 A (OK!)
         if (pontosUsuario !== 22 && pontosComput !== 22) {
         jogadaUsuario()
      }  else {
         alert('Dois Ases sorteados, reiniciando rodada...')  
         comprarCarta()
         }
   
   // // Inicio da rodada . Comprar mais cartas ----------------------------------------------------------------------------  Se der ok oferece comprar carta (OK!)
            
         function jogadaUsuario () {              
            if (somaCartasUsuario < 21) {
               if(confirm("SUA JOGADA:   Suas cartas são: " + cartasUsuario  + ".  A carta revelada do computador é " + carta3.texto +
                          "\n"+  // \n faz pular a linha
                          "DESEJA COMPRAR MAIS UMA CARTA?")){  //  --------------------------------------------------------------------   Se cancelar vai para o reultado (OK!)
               novaCarta1 = comprarCarta()
               cartasUsuario.push(novaCarta1.texto)
               somaCartasUsuario += novaCarta1.valor
               for (let i=0; i<pontosUsuario.length;i++){
               somaCartasUsuario += pontosUsuario[i]
                  if (somaCartasUsuario > 21) {
                     resultado()
                  }else {
               confirm(`Suas cartas são ${cartasUsuario} /// ${somaCartasUsuario} pontos.\n` +
                   `As cartas do computador são ${cartasComput} /// ${pontosComput} pontos.\n `)
                  }
                 }
               } else {
                  jogadaComput()
               }
            }
         }
         function jogadaComput () {              
            if (pontosComput < 21) {
               if(confirm("JOGADA DO COMPUTADOR: Suas cartas são: " + cartasUsuario  + ". A cartas do computador são " + cartasComput +
                           "\n"+  // \n faz pular a linha
                           "Deseja comprar mais uma carta?")){  //  --------------------------------------------------------------------   Se cancelar vai para o reultado (OK!)
               novaCarta2 = comprarCarta()
               cartasComput.push(novaCarta2.texto)
               somaCartasComput += novaCarta2.valor
               for (let i=0; i<pontosComput.length;i++){
               somaCartasComput += pontosComput[i]
               confirm(`Suas cartas do computador ${cartasComput}  ${somaCartasComput} pontos.\n`+
                       `As cartas do usuário são ${cartasUsuario}  ${somaCartasUsuario}.\n` )
                  }
               }else {
               resultado()
               } 
            }
         }  
             function resultado(){
             if (pontosComput > somaCartasUsuario || somaCartasUsuario > 21) {
               alert(
                  `Suas cartas são ${cartasUsuario} . Sua pontuação é ${somaCartasUsuario}.\n` +
                  `As cartas do computador são ${cartasComput} . A pontuação do computador é ${pontosComput}.\n` +
                  "O computador ganhou!")
                  fimDeJogo()

             } else if (pontosComput < somaCartasUsuario || pontosComput > 22) {
               alert(
                  `Suas cartas são ${cartasUsuario} . Sua pontuação é ${somaCartasUsuario}.\n` +
                  `As cartas do computador são ${cartasComput} . A pontuação do computador é ${pontosComput}.\n` +
                  "PARABÉNS! VOCÊ GANHOU!")
                  fimDeJogo()
             } else if (pontosComput === somaCartasUsuario) {
               alert(
                 `Suas cartas são ${cartasUsuario} . Sua pontuação é ${somaCartasUsuario}.\n` +
                 `As cartas do computador são ${cartasComput} . A pontuação do computador é ${pontosComput}.\n` +
                 "EMPATE!")
                 fimDeJogo()
                  }
               }
                                
      resultado() 
   function fimDeJogo () {
   alert('O jogo acabou! Obrigado!') 
   }
 

