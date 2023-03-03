export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
  }

export interface ValidateCharacterError {
    key: string;
    value: string;
 }
 
export interface ValidateCharacterOutput {
  isValid: boolean;
  errors: ValidateCharacterError[];
}