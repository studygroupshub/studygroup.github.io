// OOPS Quiz Questions

const oopsQuestions = [
    {
        question: "What are the four main principles of Object-Oriented Programming?",
        options: {
            A: "Inheritance, Polymorphism, Encapsulation, Abstraction",
            B: "Classes, Objects, Methods, Properties",
            C: "Public, Private, Protected, Default",
            D: "Static, Final, Abstract, Interface"
        },
        correct: "A"
    },
    {
        question: "What is inheritance in OOP?",
        options: {
            A: "Creating multiple objects from a class",
            B: "A mechanism that allows a class to inherit properties and methods from another class",
            C: "Hiding data from other classes",
            D: "Creating abstract classes"
        },
        correct: "B"
    },
    {
        question: "What is polymorphism?",
        options: {
            A: "The ability to create multiple objects",
            B: "The ability to take many forms or have multiple behaviors",
            C: "The ability to hide data",
            D: "The ability to inherit from multiple classes"
        },
        correct: "B"
    },
    {
        question: "What is encapsulation?",
        options: {
            A: "Inheriting from multiple classes",
            B: "Bundling data and methods that operate on that data within a single unit",
            C: "Creating abstract classes",
            D: "Overriding methods"
        },
        correct: "B"
    },
    {
        question: "What is abstraction?",
        options: {
            A: "Hiding complex implementation details and showing only necessary features",
            B: "Creating multiple objects",
            C: "Inheriting from parent class",
            D: "Overriding methods"
        },
        correct: "A"
    },
    {
        question: "What is a class in OOP?",
        options: {
            A: "A blueprint or template for creating objects",
            B: "An instance of an object",
            C: "A method in a program",
            D: "A variable declaration"
        },
        correct: "A"
    },
    {
        question: "What is an object in OOP?",
        options: {
            A: "A blueprint for creating classes",
            B: "An instance of a class",
            C: "A method in a class",
            D: "A variable in a class"
        },
        correct: "B"
    },
    {
        question: "What is method overriding?",
        options: {
            A: "Creating a new method in a class",
            B: "Providing a specific implementation of a method that is already defined in the parent class",
            C: "Hiding a method from other classes",
            D: "Creating an abstract method"
        },
        correct: "B"
    },
    {
        question: "What is method overloading?",
        options: {
            A: "Creating multiple methods with the same name but different parameters",
            B: "Overriding a method from parent class",
            C: "Creating abstract methods",
            D: "Hiding methods from other classes"
        },
        correct: "A"
    },
    {
        question: "What is a constructor?",
        options: {
            A: "A method that destroys objects",
            B: "A special method that is called when an object is created",
            C: "A method that returns values",
            D: "A method that hides data"
        },
        correct: "B"
    },
    {
        question: "What is the difference between public and private access modifiers?",
        options: {
            A: "Public methods can be accessed from anywhere, private methods can only be accessed within the same class",
            B: "Public methods are faster than private methods",
            C: "Private methods can be accessed from anywhere",
            D: "There is no difference"
        },
        correct: "A"
    },
    {
        question: "What is an abstract class?",
        options: {
            A: "A class that cannot be instantiated and may contain abstract methods",
            B: "A class that can only have one object",
            C: "A class that cannot be inherited",
            D: "A class that cannot have methods"
        },
        correct: "A"
    },
    {
        question: "What is an interface?",
        options: {
            A: "A class that can have multiple objects",
            B: "A collection of abstract methods that a class must implement",
            C: "A method that cannot be overridden",
            D: "A variable declaration"
        },
        correct: "B"
    },
    {
        question: "What is the 'this' keyword used for?",
        options: {
            A: "To refer to the current object instance",
            B: "To create new objects",
            C: "To destroy objects",
            D: "To hide data"
        },
        correct: "A"
    },
    {
        question: "What is the 'super' keyword used for?",
        options: {
            A: "To create super objects",
            B: "To call methods or access properties of the parent class",
            C: "To hide data from parent class",
            D: "To create abstract classes"
        },
        correct: "B"
    },
    {
        question: "What is a static method?",
        options: {
            A: "A method that cannot be called",
            B: "A method that belongs to the class rather than an instance of the class",
            C: "A method that can only be called once",
            D: "A method that destroys objects"
        },
        correct: "B"
    },
    {
        question: "What is the difference between composition and inheritance?",
        options: {
            A: "Composition is 'has-a' relationship, inheritance is 'is-a' relationship",
            B: "Composition is faster than inheritance",
            C: "Inheritance is better than composition",
            D: "There is no difference"
        },
        correct: "A"
    },
    {
        question: "What is a final class?",
        options: {
            A: "A class that cannot be inherited",
            B: "A class that cannot have methods",
            C: "A class that cannot have objects",
            D: "A class that cannot have variables"
        },
        correct: "A"
    },
    {
        question: "What is a final method?",
        options: {
            A: "A method that cannot be called",
            B: "A method that cannot be overridden",
            C: "A method that cannot return values",
            D: "A method that cannot have parameters"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of getters and setters?",
        options: {
            A: "To make code run faster",
            B: "To control access to class properties and provide encapsulation",
            C: "To create multiple objects",
            D: "To hide methods from other classes"
        },
        correct: "B"
    },
    {
        question: "What is a package in OOP?",
        options: {
            A: "A collection of classes and interfaces",
            B: "A single class",
            C: "A method in a class",
            D: "A variable declaration"
        },
        correct: "A"
    },
    {
        question: "What is the difference between shallow copy and deep copy?",
        options: {
            A: "Shallow copy copies only references, deep copy copies the actual objects",
            B: "Shallow copy is faster than deep copy",
            C: "Deep copy is always better",
            D: "There is no difference"
        },
        correct: "A"
    },
    {
        question: "What is a singleton pattern?",
        options: {
            A: "A pattern that allows multiple objects",
            B: "A pattern that ensures only one instance of a class exists",
            C: "A pattern that creates abstract classes",
            D: "A pattern that hides data"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of the 'instanceof' operator?",
        options: {
            A: "To create new instances",
            B: "To check if an object is an instance of a specific class",
            C: "To destroy objects",
            D: "To hide data"
        },
        correct: "B"
    },
    {
        question: "What is method chaining?",
        options: {
            A: "Creating multiple methods",
            B: "Calling multiple methods on the same object in a single statement",
            C: "Overriding methods",
            D: "Hiding methods"
        },
        correct: "B"
    },
    {
        question: "What is the difference between compile-time and runtime polymorphism?",
        options: {
            A: "Compile-time polymorphism is method overloading, runtime polymorphism is method overriding",
            B: "Compile-time polymorphism is faster",
            C: "Runtime polymorphism is always better",
            D: "There is no difference"
        },
        correct: "A"
    },
    {
        question: "What is a wrapper class?",
        options: {
            A: "A class that wraps other classes",
            B: "A class that provides object representation for primitive data types",
            C: "A class that cannot be instantiated",
            D: "A class that hides data"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of the 'toString()' method?",
        options: {
            A: "To convert objects to strings",
            B: "To create new objects",
            C: "To destroy objects",
            D: "To hide data"
        },
        correct: "A"
    },
    {
        question: "What is the difference between equals() and == operator?",
        options: {
            A: "equals() compares content, == compares references",
            B: "equals() is faster than == ",
            C: "== is always better",
            D: "There is no difference"
        },
        correct: "A"
    },
    {
        question: "What is a nested class?",
        options: {
            A: "A class that cannot be instantiated",
            B: "A class defined within another class",
            C: "A class that cannot be inherited",
            D: "A class that cannot have methods"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of the 'finalize()' method?",
        options: {
            A: "To create objects",
            B: "To perform cleanup operations before an object is garbage collected",
            C: "To hide data",
            D: "To create abstract classes"
        },
        correct: "B"
    }
];

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new QuizEngine(oopsQuestions, 30); // 30 minutes time limit
});


