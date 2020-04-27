// Strategy

// Given an array of letters
// Return it back in a sorted order and reverse order

const givenArray = ["f", "z", "c", "m"];

console.log(`Sorted: ${givenArray.sort()}`);

console.log(`Reverse: ${givenArray.reverse()}`);

interface LetterStrategy {
  manipulate(letters: string[]): string[];
}

class ConcreteSortLetterStrategy implements LetterStrategy {
  manipulate(letters: string[]): string[] {
    return letters.sort();
  }
}

class ConcreteReverseLetterStrategy implements LetterStrategy {
  manipulate(letters: string[]): string[] {
    return letters.reverse();
  }
}

class Context {
  constructor(private strategy: LetterStrategy, private letters: string[]) {}

  public setStrategy(strategy: LetterStrategy) {
    this.strategy = strategy;
  }

  public somethingMyManagerSaidToDo() {
    return this.strategy.manipulate(this.letters);
  }
}

const context = new Context(new ConcreteSortLetterStrategy(), givenArray);
console.log(context.somethingMyManagerSaidToDo());

context.setStrategy(new ConcreteReverseLetterStrategy());
console.log(context.somethingMyManagerSaidToDo());
