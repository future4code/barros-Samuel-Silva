import { validateCharacter} from "../src/validateCharacter";

//a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "".

describe("Teste validadeEmptyProperties", () => {
  test("Comportamento da função com um personagem com o nome vazio", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

// b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero. 

});
test("Comportamento da função com um personagem com a vida igual a zero", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

// c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.

test("Comportamento da função com um personagem com a força igual a zero", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 0,
    defense: 500,
  });

  expect(result).toBe(false);
});

// d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero

test("Comportamento da função com um personagem com a defesa a zero", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 300,
    defense: 0,
  });

  expect(result).toBe(false);
});

// e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo

test("Comportamento da função com um personagem com a vida, força ou defesa menor que zero", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: -1,
    defense: 500,
  });

  expect(result).toBe(false);
});

// f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas.

test("Comportamento da função com um personagem com as informações validas", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});