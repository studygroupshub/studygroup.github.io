// DSA Quiz Questions

const dsaQuestions = [
    {
        question: "What is the time complexity of accessing an element in an array?",
        options: {
            A: "O(1)",
            B: "O(n)",
            C: "O(log n)",
            D: "O(n²)"
        },
        correct: "A"
    },
    {
        question: "Which data structure follows LIFO principle?",
        options: {
            A: "Queue",
            B: "Stack",
            C: "Tree",
            D: "Graph"
        },
        correct: "B"
    },
    {
        question: "What is the time complexity of binary search?",
        options: {
            A: "O(1)",
            B: "O(n)",
            C: "O(log n)",
            D: "O(n²)"
        },
        correct: "C"
    },
    {
        question: "Which sorting algorithm has the best average case time complexity?",
        options: {
            A: "Bubble Sort",
            B: "Quick Sort",
            C: "Selection Sort",
            D: "Insertion Sort"
        },
        correct: "B"
    },
    {
        question: "What is the time complexity of bubble sort?",
        options: {
            A: "O(n)",
            B: "O(n log n)",
            C: "O(n²)",
            D: "O(log n)"
        },
        correct: "C"
    },
    {
        question: "Which data structure is used for implementing a queue?",
        options: {
            A: "Stack",
            B: "Array or Linked List",
            C: "Tree",
            D: "Graph"
        },
        correct: "B"
    },
    {
        question: "What is the time complexity of inserting at the beginning of a linked list?",
        options: {
            A: "O(1)",
            B: "O(n)",
            C: "O(log n)",
            D: "O(n²)"
        },
        correct: "A"
    },
    {
        question: "Which traversal visits root, left subtree, then right subtree?",
        options: {
            A: "Inorder",
            B: "Preorder",
            C: "Postorder",
            D: "Level order"
        },
        correct: "B"
    },
    {
        question: "What is the maximum number of children in a binary tree?",
        options: {
            A: "1",
            B: "2",
            C: "3",
            D: "Unlimited"
        },
        correct: "B"
    },
    {
        question: "Which algorithm is used to find the shortest path in a graph?",
        options: {
            A: "BFS",
            B: "DFS",
            C: "Dijkstra's",
            D: "All of the above"
        },
        correct: "C"
    },
    {
        question: "What is the time complexity of linear search?",
        options: {
            A: "O(1)",
            B: "O(n)",
            C: "O(log n)",
            D: "O(n²)"
        },
        correct: "B"
    },
    {
        question: "Which data structure is best for implementing a priority queue?",
        options: {
            A: "Array",
            B: "Linked List",
            C: "Heap",
            D: "Stack"
        },
        correct: "C"
    },
    {
        question: "What is the time complexity of merge sort?",
        options: {
            A: "O(n)",
            B: "O(n log n)",
            C: "O(n²)",
            D: "O(log n)"
        },
        correct: "B"
    },
    {
        question: "Which traversal visits left subtree, root, then right subtree?",
        options: {
            A: "Inorder",
            B: "Preorder",
            C: "Postorder",
            D: "Level order"
        },
        correct: "A"
    },
    {
        question: "What is the space complexity of recursive binary search?",
        options: {
            A: "O(1)",
            B: "O(log n)",
            C: "O(n)",
            D: "O(n²)"
        },
        correct: "B"
    },
    {
        question: "Which sorting algorithm is stable?",
        options: {
            A: "Quick Sort",
            B: "Heap Sort",
            C: "Merge Sort",
            D: "Selection Sort"
        },
        correct: "C"
    },
    {
        question: "What is the time complexity of inserting in a heap?",
        options: {
            A: "O(1)",
            B: "O(log n)",
            C: "O(n)",
            D: "O(n²)"
        },
        correct: "B"
    },
    {
        question: "Which data structure uses FIFO principle?",
        options: {
            A: "Stack",
            B: "Queue",
            C: "Tree",
            D: "Graph"
        },
        correct: "B"
    },
    {
        question: "What is the time complexity of DFS?",
        options: {
            A: "O(V)",
            B: "O(E)",
            C: "O(V + E)",
            D: "O(V × E)"
        },
        correct: "C"
    },
    {
        question: "Which algorithm is used for topological sorting?",
        options: {
            A: "BFS",
            B: "DFS",
            C: "Both A and B",
            D: "None of the above"
        },
        correct: "C"
    },
    {
        question: "What is the time complexity of BFS?",
        options: {
            A: "O(V)",
            B: "O(E)",
            C: "O(V + E)",
            D: "O(V × E)"
        },
        correct: "C"
    },
    {
        question: "Which data structure is used for implementing recursion?",
        options: {
            A: "Queue",
            B: "Stack",
            C: "Tree",
            D: "Graph"
        },
        correct: "B"
    },
    {
        question: "What is the time complexity of selection sort?",
        options: {
            A: "O(n)",
            B: "O(n log n)",
            C: "O(n²)",
            D: "O(log n)"
        },
        correct: "C"
    },
    {
        question: "Which traversal visits left subtree, right subtree, then root?",
        options: {
            A: "Inorder",
            B: "Preorder",
            C: "Postorder",
            D: "Level order"
        },
        correct: "C"
    },
    {
        question: "What is the time complexity of hash table search?",
        options: {
            A: "O(1)",
            B: "O(n)",
            C: "O(log n)",
            D: "O(n²)"
        },
        correct: "A"
    },
    {
        question: "Which sorting algorithm has the worst time complexity?",
        options: {
            A: "Bubble Sort",
            B: "Quick Sort",
            C: "Merge Sort",
            D: "Heap Sort"
        },
        correct: "A"
    },
    {
        question: "What is the time complexity of inserting at the end of an array?",
        options: {
            A: "O(1)",
            B: "O(n)",
            C: "O(log n)",
            D: "O(n²)"
        },
        correct: "A"
    },
    {
        question: "Which data structure is used for implementing a stack?",
        options: {
            A: "Queue",
            B: "Array or Linked List",
            C: "Tree",
            D: "Graph"
        },
        correct: "B"
    },
    {
        question: "What is the time complexity of deleting from a heap?",
        options: {
            A: "O(1)",
            B: "O(log n)",
            C: "O(n)",
            D: "O(n²)"
        },
        correct: "B"
    },
    {
        question: "Which algorithm is used for finding cycles in a graph?",
        options: {
            A: "BFS",
            B: "DFS",
            C: "Both A and B",
            D: "None of the above"
        },
        correct: "C"
    }
];

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new QuizEngine(dsaQuestions, 45); // 45 minutes time limit
});


