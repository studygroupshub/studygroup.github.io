// Quiz Engine - Handles all quiz functionality

class QuizEngine {
    constructor(questions, timeLimit = 30) {
        this.questions = questions;
        this.timeLimit = timeLimit * 60; // Convert to seconds
        this.currentQuestion = 0;
        this.answers = {};
        this.startTime = null;
        this.timer = null;
        this.isQuizComplete = false;
        
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        // Quiz sections
        this.instructionsSection = document.getElementById('instructions');
        this.quizInterface = document.getElementById('quizInterface');
        this.resultsSection = document.getElementById('results');
        
        // Quiz elements
        this.questionText = document.getElementById('questionText');
        this.optionA = document.getElementById('optionA');
        this.optionB = document.getElementById('optionB');
        this.optionC = document.getElementById('optionC');
        this.optionD = document.getElementById('optionD');
        this.currentQuestionSpan = document.getElementById('currentQuestion');
        this.totalQuestionsSpan = document.getElementById('totalQuestions');
        this.timerSpan = document.getElementById('timer');
        this.progressFill = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        
        // Navigation buttons
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.submitBtn = document.getElementById('submitBtn');
        this.startQuizBtn = document.getElementById('startQuiz');
        
        // Results elements
        this.finalScore = document.getElementById('finalScore');
        this.percentage = document.getElementById('percentage');
        this.correctAnswers = document.getElementById('correctAnswers');
        this.timeTaken = document.getElementById('timeTaken');
        this.reviewBtn = document.getElementById('reviewBtn');
        this.retakeBtn = document.getElementById('retakeBtn');
        
        // Question navigator
        this.questionGrid = document.getElementById('questionGrid');
    }

    bindEvents() {
        // Start quiz button
        this.startQuizBtn.addEventListener('click', () => this.startQuiz());
        
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.submitQuiz());
        
        // Option selection
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => this.selectOption(e.currentTarget));
        });
        
        // Results buttons
        this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
        this.retakeBtn.addEventListener('click', () => this.retakeQuiz());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    startQuiz() {
        this.instructionsSection.style.display = 'none';
        this.quizInterface.style.display = 'block';
        
        this.startTime = Date.now();
        this.startTimer();
        this.loadQuestion(0);
        this.createQuestionNavigator();
        this.updateProgress();
    }

    startTimer() {
        this.timer = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const remaining = this.timeLimit - elapsed;
            
            if (remaining <= 0) {
                this.submitQuiz();
                return;
            }
            
            const minutes = Math.floor(remaining / 60);
            const seconds = remaining % 60;
            this.timerSpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Change color when time is running low
            if (remaining <= 300) { // 5 minutes
                this.timerSpan.style.color = '#FF6B6B';
            }
        }, 1000);
    }

    loadQuestion(index) {
        if (index < 0 || index >= this.questions.length) return;
        
        this.currentQuestion = index;
        const question = this.questions[index];
        
        // Update question text and options
        this.questionText.textContent = question.question;
        this.optionA.textContent = question.options.A;
        this.optionB.textContent = question.options.B;
        this.optionC.textContent = question.options.C;
        this.optionD.textContent = question.options.D;
        
        // Update question counter
        this.currentQuestionSpan.textContent = index + 1;
        this.totalQuestionsSpan.textContent = this.questions.length;
        
        // Clear previous selections
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Show previous answer if exists
        if (this.answers[index] !== undefined) {
            const selectedOption = document.querySelector(`[data-option="${this.answers[index]}"]`);
            if (selectedOption) {
                selectedOption.classList.add('selected');
            }
        }
        
        // Update navigation buttons
        this.prevBtn.disabled = index === 0;
        this.nextBtn.style.display = index === this.questions.length - 1 ? 'none' : 'inline-flex';
        this.submitBtn.style.display = index === this.questions.length - 1 ? 'inline-flex' : 'none';
        
        // Update question navigator
        this.updateQuestionNavigator();
        this.updateProgress();
    }

    selectOption(optionElement) {
        const option = optionElement.dataset.option;
        this.answers[this.currentQuestion] = option;
        
        // Update visual selection
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        optionElement.classList.add('selected');
        
        // Update question navigator
        this.updateQuestionNavigator();
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.loadQuestion(this.currentQuestion - 1);
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.loadQuestion(this.currentQuestion + 1);
        }
    }

    createQuestionNavigator() {
        this.questionGrid.innerHTML = '';
        
        for (let i = 0; i < this.questions.length; i++) {
            const questionNumber = document.createElement('div');
            questionNumber.className = 'question-number';
            questionNumber.textContent = i + 1;
            questionNumber.addEventListener('click', () => this.loadQuestion(i));
            this.questionGrid.appendChild(questionNumber);
        }
    }

    updateQuestionNavigator() {
        const questionNumbers = this.questionGrid.querySelectorAll('.question-number');
        
        questionNumbers.forEach((number, index) => {
            number.classList.remove('current', 'answered');
            
            if (index === this.currentQuestion) {
                number.classList.add('current');
            } else if (this.answers[index] !== undefined) {
                number.classList.add('answered');
            }
        });
    }

    updateProgress() {
        const answeredCount = Object.keys(this.answers).length;
        const progress = (answeredCount / this.questions.length) * 100;
        
        this.progressFill.style.width = `${progress}%`;
        this.progressText.textContent = `${Math.round(progress)}%`;
    }

    submitQuiz() {
        clearInterval(this.timer);
        this.isQuizComplete = true;
        
        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);
        
        // Calculate results
        let correctCount = 0;
        this.questions.forEach((question, index) => {
            if (this.answers[index] === question.correct) {
                correctCount++;
            }
        });
        
        const score = correctCount * 2; // 2 points per correct answer
        const percentage = Math.round((correctCount / this.questions.length) * 100);
        
        // Display results
        this.finalScore.textContent = `${score}/${this.questions.length * 2}`;
        this.percentage.textContent = `${percentage}%`;
        this.correctAnswers.textContent = `${correctCount}/${this.questions.length}`;
        
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        this.timeTaken.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Show results section
        this.quizInterface.style.display = 'none';
        this.resultsSection.style.display = 'block';
    }

    reviewAnswers() {
        this.quizInterface.style.display = 'block';
        this.resultsSection.style.display = 'none';
        
        // Show correct/incorrect answers
        this.questions.forEach((question, index) => {
            const selectedOption = this.answers[index];
            const correctOption = question.correct;
            
            if (selectedOption) {
                const optionElement = document.querySelector(`[data-option="${selectedOption}"]`);
                if (optionElement) {
                    if (selectedOption === correctOption) {
                        optionElement.classList.add('correct');
                    } else {
                        optionElement.classList.add('incorrect');
                    }
                }
            }
            
            // Show correct answer if not selected
            if (selectedOption !== correctOption) {
                const correctElement = document.querySelector(`[data-option="${correctOption}"]`);
                if (correctElement) {
                    correctElement.classList.add('correct');
                }
            }
        });
    }

    retakeQuiz() {
        // Reset quiz state
        this.currentQuestion = 0;
        this.answers = {};
        this.isQuizComplete = false;
        
        // Show instructions
        this.instructionsSection.style.display = 'block';
        this.quizInterface.style.display = 'none';
        this.resultsSection.style.display = 'none';
        
        // Reset timer
        this.timerSpan.textContent = `${Math.floor(this.timeLimit / 60)}:${(this.timeLimit % 60).toString().padStart(2, '0')}`;
        this.timerSpan.style.color = '';
    }

    handleKeyboard(e) {
        if (this.isQuizComplete) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                if (!this.prevBtn.disabled) {
                    this.previousQuestion();
                }
                break;
            case 'ArrowRight':
                if (this.currentQuestion < this.questions.length - 1) {
                    this.nextQuestion();
                }
                break;
            case '1':
            case 'a':
            case 'A':
                this.selectOption(document.querySelector('[data-option="A"]'));
                break;
            case '2':
            case 'b':
            case 'B':
                this.selectOption(document.querySelector('[data-option="B"]'));
                break;
            case '3':
            case 'c':
            case 'C':
                this.selectOption(document.querySelector('[data-option="C"]'));
                break;
            case '4':
            case 'd':
            case 'D':
                this.selectOption(document.querySelector('[data-option="D"]'));
                break;
            case 'Enter':
                if (this.currentQuestion === this.questions.length - 1) {
                    this.submitQuiz();
                } else {
                    this.nextQuestion();
                }
                break;
        }
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Quiz will be initialized with questions from the specific subject file
    // (dbms-questions.js, dsa-questions.js, etc.)
});


