//a. De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes?
//   Justifique (escreva no seu código como comentário) 

// Da performAttack, pois a validateCharacter já foi testada anteriormente

//b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento

import { Character } from "../src/models/Character";
import { performAttack } from "../src/performAttack";

test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});

test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});

// a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. 
//    Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número
//    de vezes em que ela foi chamada, quantas vezes ela retornou.

test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

// b. Faça um teste com um dos personagens com alguma informação inválida. 
// Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, 
// o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou.

describe("Teste performAttack", () => {
    test("Should return invalid character error", () => {
    expect.assertions(8);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err:any) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);

//Agora é a sua vez para pensar e testar. Faça mais 4 testes da função performAttack. 
//Treine o máximo que puder os conceitos vistos em aula

      expect(validatorMock).toHaveReturnedWith(false);
      expect(validatorMock).not.toHaveReturnedWith(true);
      expect(validatorMock).toBeDefined();
      expect(attacker.name).toBe('')

    }
  })
 
});