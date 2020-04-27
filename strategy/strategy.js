// Strategy
// Given an array of letters
// Return it back in a sorted order and reverse order
var givenArray = ["f", "z", "c", "m"];
console.log("Sorted: " + givenArray.sort());
console.log("Reverse: " + givenArray.reverse());
var ConcreteSortLetterStrategy = /** @class */ (function () {
    function ConcreteSortLetterStrategy() {
    }
    ConcreteSortLetterStrategy.prototype.manipulate = function (letters) {
        return letters.sort();
    };
    return ConcreteSortLetterStrategy;
}());
var ConcreteReverseLetterStrategy = /** @class */ (function () {
    function ConcreteReverseLetterStrategy() {
    }
    ConcreteReverseLetterStrategy.prototype.manipulate = function (letters) {
        return letters.reverse();
    };
    return ConcreteReverseLetterStrategy;
}());
var Context = /** @class */ (function () {
    function Context(strategy, letters) {
        this.strategy = strategy;
        this.letters = letters;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.somethingMyManagerSaidToDo = function () {
        return this.strategy.manipulate(this.letters);
    };
    return Context;
}());
var context = new Context(new ConcreteSortLetterStrategy(), givenArray);
console.log(context.somethingMyManagerSaidToDo());
context.setStrategy(new ConcreteReverseLetterStrategy());
console.log(context.somethingMyManagerSaidToDo());
