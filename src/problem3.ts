// Problem 3:
// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

const countWordOccurrences=(sentence: string, word: string): number=> {
  const arrayOfWord: string[] = sentence.toLowerCase().split(/\W+/);
  const wordLowerCase:string = word.toLowerCase()
  const sameWord: string[] = arrayOfWord.filter((item) => item === wordLowerCase);
  return sameWord.length
}
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
