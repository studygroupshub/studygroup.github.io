// DBMS Quiz Questions

const dbmsQuestions = [
    {
        question: "What does DBMS stand for?",
        options: {
            A: "Database Management System",
            B: "Data Base Management System",
            C: "Database Management Software",
            D: "Data Management System"
        },
        correct: "A"
    },
    {
        question: "Which of the following is NOT a type of database?",
        options: {
            A: "Relational Database",
            B: "NoSQL Database",
            C: "Object-Oriented Database",
            D: "Linear Database"
        },
        correct: "D"
    },
    {
        question: "What is the primary key in a database table?",
        options: {
            A: "A key that can be null",
            B: "A unique identifier for each record",
            C: "A key that references another table",
            D: "A key that can have duplicate values"
        },
        correct: "B"
    },
    {
        question: "Which SQL command is used to create a new table?",
        options: {
            A: "CREATE TABLE",
            B: "BUILD TABLE",
            C: "MAKE TABLE",
            D: "GENERATE TABLE"
        },
        correct: "A"
    },
    {
        question: "What is normalization in database design?",
        options: {
            A: "A process to organize data to reduce redundancy",
            B: "A process to increase data redundancy",
            C: "A process to delete data",
            D: "A process to backup data"
        },
        correct: "A"
    },
    {
        question: "Which normal form eliminates partial dependencies?",
        options: {
            A: "1NF",
            B: "2NF",
            C: "3NF",
            D: "BCNF"
        },
        correct: "B"
    },
    {
        question: "What does SQL stand for?",
        options: {
            A: "Structured Query Language",
            B: "Simple Query Language",
            C: "Standard Query Language",
            D: "System Query Language"
        },
        correct: "A"
    },
    {
        question: "Which SQL command is used to retrieve data from a database?",
        options: {
            A: "GET",
            B: "SELECT",
            C: "FETCH",
            D: "RETRIEVE"
        },
        correct: "B"
    },
    {
        question: "What is a foreign key?",
        options: {
            A: "A key that is always unique",
            B: "A key that references a primary key in another table",
            C: "A key that cannot be null",
            D: "A key that is automatically generated"
        },
        correct: "B"
    },
    {
        question: "Which of the following is a DDL command?",
        options: {
            A: "SELECT",
            B: "INSERT",
            C: "CREATE",
            D: "UPDATE"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of an index in a database?",
        options: {
            A: "To store data permanently",
            B: "To improve query performance",
            C: "To backup data",
            D: "To delete data"
        },
        correct: "B"
    },
    {
        question: "Which SQL clause is used to filter records?",
        options: {
            A: "SELECT",
            B: "FROM",
            C: "WHERE",
            D: "ORDER BY"
        },
        correct: "C"
    },
    {
        question: "What is a transaction in database management?",
        options: {
            A: "A single SQL command",
            B: "A group of operations that are executed as a single unit",
            C: "A database backup",
            D: "A table creation"
        },
        correct: "B"
    },
    {
        question: "Which property ensures that a transaction is either completed entirely or not at all?",
        options: {
            A: "Atomicity",
            B: "Consistency",
            C: "Isolation",
            D: "Durability"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the GROUP BY clause in SQL?",
        options: {
            A: "To sort data",
            B: "To group rows that have the same values",
            C: "To filter data",
            D: "To join tables"
        },
        correct: "B"
    },
    {
        question: "Which SQL function is used to count the number of rows?",
        options: {
            A: "SUM()",
            B: "COUNT()",
            C: "AVG()",
            D: "MAX()"
        },
        correct: "B"
    },
    {
        question: "What is a view in a database?",
        options: {
            A: "A physical table",
            B: "A virtual table based on the result set of a SQL statement",
            C: "A backup of a table",
            D: "An index on a table"
        },
        correct: "B"
    },
    {
        question: "Which SQL command is used to modify existing data in a table?",
        options: {
            A: "CHANGE",
            B: "MODIFY",
            C: "UPDATE",
            D: "ALTER"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of the HAVING clause?",
        options: {
            A: "To filter rows before grouping",
            B: "To filter groups after GROUP BY",
            C: "To sort results",
            D: "To join tables"
        },
        correct: "B"
    },
    {
        question: "Which type of join returns all records from both tables?",
        options: {
            A: "INNER JOIN",
            B: "LEFT JOIN",
            C: "RIGHT JOIN",
            D: "FULL OUTER JOIN"
        },
        correct: "D"
    },
    {
        question: "What is the purpose of the DISTINCT keyword in SQL?",
        options: {
            A: "To sort data",
            B: "To remove duplicate rows",
            C: "To filter data",
            D: "To join tables"
        },
        correct: "B"
    },
    {
        question: "Which SQL command is used to delete a table?",
        options: {
            A: "REMOVE TABLE",
            B: "DELETE TABLE",
            C: "DROP TABLE",
            D: "ERASE TABLE"
        },
        correct: "C"
    },
    {
        question: "What is a composite key?",
        options: {
            A: "A key made up of multiple columns",
            B: "A key that is always unique",
            C: "A key that references another table",
            D: "A key that cannot be null"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to find the maximum value?",
        options: {
            A: "TOP()",
            B: "HIGHEST()",
            C: "MAX()",
            D: "GREATEST()"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of the ORDER BY clause?",
        options: {
            A: "To filter data",
            B: "To group data",
            C: "To sort the result set",
            D: "To join tables"
        },
        correct: "C"
    },
    {
        question: "Which SQL command is used to add a new column to an existing table?",
        options: {
            A: "ADD COLUMN",
            B: "INSERT COLUMN",
            C: "ALTER TABLE ADD",
            D: "MODIFY TABLE"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of the LIKE operator in SQL?",
        options: {
            A: "To compare values",
            B: "To search for a pattern in a column",
            C: "To join tables",
            D: "To sort data"
        },
        correct: "B"
    },
    {
        question: "Which SQL function is used to calculate the average?",
        options: {
            A: "MEAN()",
            B: "AVERAGE()",
            C: "AVG()",
            D: "CALC_AVG()"
        },
        correct: "C"
    },
    {
        question: "What is a subquery in SQL?",
        options: {
            A: "A query that returns multiple results",
            B: "A query nested inside another query",
            C: "A query that joins multiple tables",
            D: "A query that uses aggregate functions"
        },
        correct: "B"
    },
    {
        question: "Which SQL command is used to remove all records from a table?",
        options: {
            A: "REMOVE",
            B: "DELETE",
            C: "TRUNCATE",
            D: "ERASE"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of the UNION operator?",
        options: {
            A: "To join tables",
            B: "To combine the result sets of two or more SELECT statements",
            C: "To filter data",
            D: "To sort data"
        },
        correct: "B"
    },
    {
        question: "Which SQL function is used to find the minimum value?",
        options: {
            A: "LOWEST()",
            B: "MIN()",
            C: "SMALLEST()",
            D: "BOTTOM()"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of the BETWEEN operator?",
        options: {
            A: "To compare two values",
            B: "To test if a value is within a range",
            C: "To join tables",
            D: "To sort data"
        },
        correct: "B"
    },
    {
        question: "Which SQL command is used to create an index?",
        options: {
            A: "CREATE INDEX",
            B: "BUILD INDEX",
            C: "MAKE INDEX",
            D: "GENERATE INDEX"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the IN operator?",
        options: {
            A: "To test if a value matches any value in a list",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to find the length of a string?",
        options: {
            A: "SIZE()",
            B: "LENGTH()",
            C: "COUNT()",
            D: "LEN()"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of the NULL keyword in SQL?",
        options: {
            A: "To represent an empty string",
            B: "To represent a missing or unknown value",
            C: "To represent zero",
            D: "To represent false"
        },
        correct: "B"
    },
    {
        question: "Which SQL command is used to grant privileges to a user?",
        options: {
            A: "GIVE",
            B: "GRANT",
            C: "ALLOW",
            D: "PERMIT"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of the EXISTS operator?",
        options: {
            A: "To test if a subquery returns any rows",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to convert a string to uppercase?",
        options: {
            A: "UPPER()",
            B: "TOUPPER()",
            C: "CAPITALIZE()",
            D: "UPPERCASE()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the CASCADE option in foreign key constraints?",
        options: {
            A: "To automatically delete related records",
            B: "To prevent deletion of related records",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to get the current date and time?",
        options: {
            A: "NOW()",
            B: "CURRENT_TIMESTAMP()",
            C: "GETDATE()",
            D: "All of the above"
        },
        correct: "D"
    },
    {
        question: "What is the purpose of the CHECK constraint?",
        options: {
            A: "To ensure data integrity by limiting the values that can be inserted",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to extract a part of a date?",
        options: {
            A: "EXTRACT()",
            B: "GETPART()",
            C: "PULL()",
            D: "TAKE()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the UNIQUE constraint?",
        options: {
            A: "To ensure all values in a column are different",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to round a number?",
        options: {
            A: "ROUND()",
            B: "CEIL()",
            C: "FLOOR()",
            D: "TRUNCATE()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the DEFAULT constraint?",
        options: {
            A: "To set a default value for a column",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to concatenate strings?",
        options: {
            A: "CONCAT()",
            B: "JOIN()",
            C: "MERGE()",
            D: "COMBINE()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the NOT NULL constraint?",
        options: {
            A: "To ensure a column cannot have NULL values",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to find the square root?",
        options: {
            A: "SQRT()",
            B: "ROOT()",
            C: "SQUARE_ROOT()",
            D: "POWER()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the AUTO_INCREMENT attribute?",
        options: {
            A: "To automatically generate unique values for a column",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to find the absolute value?",
        options: {
            A: "ABS()",
            B: "ABSOLUTE()",
            C: "MOD()",
            D: "REM()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the CASCADE DELETE option?",
        options: {
            A: "To automatically delete related records when a parent record is deleted",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to find the remainder of division?",
        options: {
            A: "MOD()",
            B: "REM()",
            C: "REMAINDER()",
            D: "DIV()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the CASCADE UPDATE option?",
        options: {
            A: "To automatically update related records when a parent record is updated",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to find the power of a number?",
        options: {
            A: "POWER()",
            B: "EXP()",
            C: "POW()",
            D: "RAISE()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the RESTRICT option in foreign key constraints?",
        options: {
            A: "To prevent deletion or update of parent records if child records exist",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to find the natural logarithm?",
        options: {
            A: "LN()",
            B: "LOG()",
            C: "NATURAL_LOG()",
            D: "LOG10()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the SET NULL option in foreign key constraints?",
        options: {
            A: "To set foreign key values to NULL when parent record is deleted",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to find the ceiling of a number?",
        options: {
            A: "CEIL()",
            B: "CEILING()",
            C: "ROUND_UP()",
            D: "FLOOR()"
        },
        correct: "A"
    },
    {
        question: "What is the purpose of the NO ACTION option in foreign key constraints?",
        options: {
            A: "To prevent any action that would violate the foreign key constraint",
            B: "To join tables",
            C: "To sort data",
            D: "To filter data"
        },
        correct: "A"
    },
    {
        question: "Which SQL function is used to find the floor of a number?",
        options: {
            A: "FLOOR()",
            B: "CEIL()",
            C: "ROUND_DOWN()",
            D: "TRUNCATE()"
        },
        correct: "A"
    }
];

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new QuizEngine(dbmsQuestions, 30); // 30 minutes time limit
});
