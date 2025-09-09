// OS Quiz Questions

const osQuestions = [
    {
        question: "What is an Operating System?",
        options: {
            A: "A hardware component",
            B: "System software that manages computer hardware and software resources",
            C: "An application program",
            D: "A programming language"
        },
        correct: "B"
    },
    {
        question: "Which scheduling algorithm is preemptive?",
        options: {
            A: "First Come First Serve (FCFS)",
            B: "Shortest Job First (SJF)",
            C: "Round Robin (RR)",
            D: "All of the above"
        },
        correct: "C"
    },
    {
        question: "What is a process?",
        options: {
            A: "A program in execution",
            B: "A hardware component",
            C: "A file on disk",
            D: "A network connection"
        },
        correct: "A"
    },
    {
        question: "Which memory management technique allows programs to be larger than physical memory?",
        options: {
            A: "Paging",
            B: "Segmentation",
            C: "Virtual Memory",
            D: "Partitioning"
        },
        correct: "C"
    },
    {
        question: "What is a deadlock?",
        options: {
            A: "A process that has completed execution",
            B: "A situation where two or more processes are waiting for each other",
            C: "A memory allocation error",
            D: "A file system corruption"
        },
        correct: "B"
    },
    {
        question: "Which of the following is NOT a condition for deadlock?",
        options: {
            A: "Mutual Exclusion",
            B: "Hold and Wait",
            C: "No Preemption",
            D: "Priority Scheduling"
        },
        correct: "D"
    },
    {
        question: "What is the purpose of a page table?",
        options: {
            A: "To store file information",
            B: "To map virtual addresses to physical addresses",
            C: "To schedule processes",
            D: "To manage network connections"
        },
        correct: "B"
    },
    {
        question: "Which scheduling algorithm has the highest average waiting time?",
        options: {
            A: "Round Robin",
            B: "Shortest Job First",
            C: "First Come First Serve",
            D: "Priority Scheduling"
        },
        correct: "C"
    },
    {
        question: "What is a thread?",
        options: {
            A: "A separate process",
            B: "A lightweight process within a process",
            C: "A hardware component",
            D: "A file system"
        },
        correct: "B"
    },
    {
        question: "Which memory allocation method suffers from external fragmentation?",
        options: {
            A: "Paging",
            B: "Segmentation",
            C: "Virtual Memory",
            D: "Fixed Partitioning"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of a semaphore?",
        options: {
            A: "To schedule processes",
            B: "To synchronize processes",
            C: "To allocate memory",
            D: "To manage files"
        },
        correct: "B"
    },
    {
        question: "Which file system is commonly used in Windows?",
        options: {
            A: "ext4",
            B: "NTFS",
            C: "FAT32",
            D: "Both B and C"
        },
        correct: "D"
    },
    {
        question: "What is context switching?",
        options: {
            A: "Switching between different computers",
            B: "Switching between different processes",
            C: "Switching between different files",
            D: "Switching between different networks"
        },
        correct: "B"
    },
    {
        question: "Which memory management technique divides memory into fixed-size blocks?",
        options: {
            A: "Segmentation",
            B: "Paging",
            C: "Partitioning",
            D: "Virtual Memory"
        },
        correct: "B"
    },
    {
        question: "What is a race condition?",
        options: {
            A: "A condition where processes compete for resources",
            B: "A condition where the outcome depends on timing",
            C: "A condition where memory is fragmented",
            D: "A condition where files are corrupted"
        },
        correct: "B"
    },
    {
        question: "Which scheduling algorithm is non-preemptive?",
        options: {
            A: "Round Robin",
            B: "Shortest Job First",
            C: "Priority Scheduling",
            D: "All of the above"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of a file system?",
        options: {
            A: "To manage processes",
            B: "To manage memory",
            C: "To organize and store files",
            D: "To schedule tasks"
        },
        correct: "C"
    },
    {
        question: "Which memory allocation method suffers from internal fragmentation?",
        options: {
            A: "Paging",
            B: "Segmentation",
            C: "Dynamic Partitioning",
            D: "None of the above"
        },
        correct: "A"
    },
    {
        question: "What is a mutex?",
        options: {
            A: "A type of memory",
            B: "A synchronization primitive",
            C: "A file system",
            D: "A scheduling algorithm"
        },
        correct: "B"
    },
    {
        question: "Which OS component manages process scheduling?",
        options: {
            A: "Memory Manager",
            B: "Process Scheduler",
            C: "File Manager",
            D: "Device Manager"
        },
        correct: "B"
    },
    {
        question: "What is thrashing?",
        options: {
            A: "A process that runs too fast",
            B: "Excessive page swapping",
            C: "Memory allocation error",
            D: "File system corruption"
        },
        correct: "B"
    },
    {
        question: "Which scheduling algorithm is fair to all processes?",
        options: {
            A: "First Come First Serve",
            B: "Shortest Job First",
            C: "Round Robin",
            D: "Priority Scheduling"
        },
        correct: "C"
    },
    {
        question: "What is a critical section?",
        options: {
            A: "A part of memory",
            B: "A part of a program that accesses shared resources",
            C: "A file system area",
            D: "A network segment"
        },
        correct: "B"
    },
    {
        question: "Which memory management technique allows programs to be loaded anywhere in memory?",
        options: {
            A: "Fixed Partitioning",
            B: "Dynamic Partitioning",
            C: "Paging",
            D: "Segmentation"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of a device driver?",
        options: {
            A: "To schedule processes",
            B: "To manage memory",
            C: "To control hardware devices",
            D: "To manage files"
        },
        correct: "C"
    },
    {
        question: "Which scheduling algorithm considers process priority?",
        options: {
            A: "First Come First Serve",
            B: "Shortest Job First",
            C: "Round Robin",
            D: "Priority Scheduling"
        },
        correct: "D"
    },
    {
        question: "What is a page fault?",
        options: {
            A: "A hardware error",
            B: "A memory access error",
            C: "A file system error",
            D: "A network error"
        },
        correct: "B"
    },
    {
        question: "Which OS component manages file operations?",
        options: {
            A: "Process Manager",
            B: "Memory Manager",
            C: "File Manager",
            D: "Device Manager"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of a buffer?",
        options: {
            A: "To store processes",
            B: "To store temporary data",
            C: "To manage memory",
            D: "To schedule tasks"
        },
        correct: "B"
    },
    {
        question: "Which memory management technique allows variable-size memory allocation?",
        options: {
            A: "Paging",
            B: "Segmentation",
            C: "Fixed Partitioning",
            D: "None of the above"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of an interrupt?",
        options: {
            A: "To stop the computer",
            B: "To signal an event to the CPU",
            C: "To allocate memory",
            D: "To manage files"
        },
        correct: "B"
    }
];

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new QuizEngine(osQuestions, 25); // 25 minutes time limit
});


