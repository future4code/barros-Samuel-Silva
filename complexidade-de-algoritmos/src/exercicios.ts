
// Determine a complexidade dos seguintes algoritmos, deixando a sua resposta comentada no código.

// EXERCICIO 1

const findFirstRecurringCharacter = (input:any) => {
    const charHashMap:any = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  }; 

// R:  O(n) Repetirá o laço dependendo do valor passado na entrada.
//-------------------------------------------------------------------------------------------

// EXERCICIO 2

export const func = (
  source: string,
  comparison: string
): boolean => {
  if (comparison.length > source.length + 1 || comparison.length < source.length - 1) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {commonCharQuantity++}
  }
  
  return (
    commonCharQuantity <= source.length + 1 && commonCharQuantity >= source.length - 1);
};

// R: O(n). Repetirá o laço dependendo do valor passado na entrada.
//-------------------------------------------------------------------------------------------

// EXERCICIO 3

export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (matrix[rowIndex] === undefined || matrix[rowIndex][columnIndex] === undefined) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};

// R: O(1) Executa uma única vez.
//-------------------------------------------------------------------------------------------

// EXERCICIO 4

function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}

// R: O(n2). A primeira execução depende do listOfNumbers e asegunda do indexOf que percorre o array novamente.
//-------------------------------------------------------------------------------------------

// EXERCICIO 5

// Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade.
// Da maior eficiência/performance para a menor:

// R: Ex3, Ex1, Ex2, Ex4
//-------------------------------------------------------------------------------------------

// EXERCICIO 6

function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum
}

// R: O(b) Repetirá o laço dependendo do valor passado em "b".
//-------------------------------------------------------------------------------------------

// EXERICIO 7

function mod(a: number, b: number): number {
  if (b <= a) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}

// R: O(1) Executa uma única vez.
//-------------------------------------------------------------------------------------------

// EXERCICIO 8

function copyArray(array: number[]): number[] {
  let copy: number[] = [];
  for (const value of array) {
    copy = appendToNew(copy, value);
  }
  return copy;
}

function appendToNew(array: number[], value: number) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.push(value);
  return newArray;
}

// R: O(n2) A primeira execução depende de "array" e a segunda de "value"