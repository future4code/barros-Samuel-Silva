let matriz = [[1,2,3],[4,5,6],[7,8,9]]

export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  console.log(`Linha: ${[rowIndex]}`)
  console.log(`Coluna:${[columnIndex]}`)
  console.log(`O valor é: ${ matrix[rowIndex][columnIndex] = value}`)
  console.log(`Matriz: ${matrix}`)
};

replaceMatrixValue([[1,2,3],[4,5,6]],1,0,9)

