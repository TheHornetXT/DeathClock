// Questions for the first quiz - When will you die
const lifeExpectancyQuestions = [
    {
        category: "Basic Demographics",
        questions: [
            {
                id: "age",
                text: "What is your current age?",
                type: "number",
                required: true
            },
            {
                id: "gender",
                text: "What is your biological gender?",
                type: "select",
                options: ["Male", "Female", "Other"],
                required: true
            },
            {
                id: "height",
                text: "What is your height in cm?",
                type: "number",
                required: true
            },
            {
                id: "weight",
                text: "What is your weight in kg?",
                type: "number",
                required: true
            }
        ]
    },
    {
        category: "Family History & Genetics",
        questions: [
            {
                id: "grandparents_age",
                text: "How long did your grandparents live on average?",
                type: "select",
                options: ["Below 60", "60-70", "70-80", "80-90", "Above 90", "Don't know"],
                required: true
            },
            {
                id: "family_disease",
                text: "Do your parents or grandparents have a history of major diseases?",
                type: "select",
                options: ["Yes, multiple serious conditions", "Yes, one serious condition", "Minor health issues only", "No significant health issues", "Don't know"],
                required: true
            },
            {
                id: "genetic_disorder",
                text: "Has anyone in your family had a genetic disorder or early death?",
                type: "select",
                options: ["Yes, multiple cases", "Yes, one case", "No", "Don't know"],
                required: true
            }
        ]
    },
    {
        category: "Lifestyle & Health",
        questions: [
            {
                id: "smoking",
                text: "Do you smoke or use tobacco?",
                type: "select",
                options: ["Yes, regularly", "Occasionally", "No, but I used to", "No, never"],
                required: true
            },
            {
                id: "alcohol",
                text: "How often do you drink alcohol?",
                type: "select",
                options: ["Daily", "Several times a week", "Weekly", "Rarely", "Never"],
                required: true
            },
            {
                id: "sleep",
                text: "How many hours of sleep do you get on average?",
                type: "select",
                options: ["Less than 5 hours", "5-6 hours", "7-8 hours", "More than 8 hours"],
                required: true
            },
            {
                id: "exercise",
                text: "How often do you exercise?",
                type: "select",
                options: ["Daily", "3-5 times a week", "1-2 times a week", "Rarely", "Never"],
                required: true
            },
            {
                id: "diet",
                text: "How would you rate your diet?",
                type: "select",
                options: ["Very strict healthy diet", "Mostly healthy", "Balanced", "Occasional junk food", "Junk food often"],
                required: true
            },
            {
                id: "chronic_illness",
                text: "Do you have any chronic illnesses?",
                type: "select",
                options: ["Multiple serious conditions", "One serious condition", "Minor health issues only", "No health issues"],
                required: true
            },
            {
                id: "doctor_visits",
                text: "How often do you visit a doctor for checkups?",
                type: "select",
                options: ["Regular scheduled checkups", "Yearly", "Only when sick", "Rarely or never"],
                required: true
            }
        ]
    },
    {
        category: "Mental Health & Stress",
        questions: [
            {
                id: "stress",
                text: "How often do you experience high stress?",
                type: "select",
                options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
                required: true
            },
            {
                id: "social_support",
                text: "Do you have a strong social support system?",
                type: "select",
                options: ["Strong support system", "Some friends and family", "Few close connections", "No support system"],
                required: true
            },
            {
                id: "mental_health",
                text: "Have you ever been diagnosed with anxiety, depression, or another mental health condition?",
                type: "select",
                options: ["Yes, multiple conditions", "Yes, one condition", "No, but I suspect I might have one", "No"],
                required: true
            }
        ]
    },
    {
        category: "Environment & Risks",
        questions: [
            {
                id: "seatbelt",
                text: "Do you wear a seatbelt while driving?",
                type: "select",
                options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
                required: true
            },
            {
                id: "extreme_sports",
                text: "Do you participate in extreme sports or dangerous activities?",
                type: "select",
                options: ["Yes, frequently", "Yes, occasionally", "Rarely", "Never"],
                required: true
            },
            {
                id: "pollution",
                text: "Do you live in an area with high pollution?",
                type: "select",
                options: ["Yes, severe pollution", "Yes, moderate pollution", "Minor pollution", "Clean environment"],
                required: true
            },
            {
                id: "near_death",
                text: "Have you ever had a near-death experience?",
                type: "select",
                options: ["Yes, multiple times", "Yes, once", "No"],
                required: true
            }
        ]
    }
];

// Questions for the second quiz - How will you die
const deathCauseQuestions = [
    {
        category: "Health & Lifestyle",
        questions: [
            {
                id: "smoke_death",
                text: "Do you smoke or use tobacco?",
                type: "select",
                options: ["Yes, heavily", "Yes, occasionally", "No, but I used to", "No, never"],
                required: true
            },
            {
                id: "alcohol_death",
                text: "How often do you drink alcohol?",
                type: "select",
                options: ["Heavy daily drinking", "Moderate daily", "Several times a week", "Occasionally", "Never"],
                required: true
            },
            {
                id: "exercise_death",
                text: "Do you engage in regular exercise?",
                type: "select",
                options: ["Yes, daily intense workouts", "Yes, moderate regular exercise", "Occasional light exercise", "Rarely or never"],
                required: true
            },
            {
                id: "diet_death",
                text: "How would you describe your diet?",
                type: "select",
                options: ["Very strict healthy diet", "Balanced diet", "Occasional junk food", "Mostly junk food"],
                required: true
            },
            {
                id: "chronic_death",
                text: "Do you have any chronic illnesses?",
                type: "select",
                options: ["Yes, heart disease", "Yes, diabetes", "Yes, cancer", "Yes, other condition", "No"],
                required: true
            },
            {
                id: "doctor_death",
                text: "How often do you visit a doctor for checkups?",
                type: "select",
                options: ["Regular scheduled checkups", "Yearly", "Only when very sick", "Never"],
                required: true
            }
        ]
    },
    {
        category: "Dangerous Activities & Risk-Taking",
        questions: [
            {
                id: "extreme_death",
                text: "Do you enjoy extreme sports or high-risk activities?",
                type: "select",
                options: ["Yes, frequently", "Yes, occasionally", "Rarely", "Never"],
                required: true
            },
            {
                id: "driving_death",
                text: "Do you often drive over the speed limit or recklessly?",
                type: "select",
                options: ["Yes, regularly", "Sometimes", "Rarely", "Never", "I don't drive"],
                required: true
            },
            {
                id: "near_death_exp",
                text: "Have you ever had a near-death experience?",
                type: "select",
                options: ["Yes, multiple times", "Yes, once", "No"],
                required: true
            },
            {
                id: "dangerous_hobbies",
                text: "Do you engage in dangerous hobbies?",
                type: "select",
                options: ["Yes, motorcycles", "Yes, deep-sea diving", "Yes, other dangerous hobbies", "No dangerous hobbies"],
                required: true
            },
            {
                id: "impulsive_risks",
                text: "Do you often take dares or impulsive risks?",
                type: "select",
                options: ["Yes, frequently", "Sometimes", "Rarely", "Never"],
                required: true
            }
        ]
    },
    {
        category: "Accidents & Environment",
        questions: [
            {
                id: "disasters",
                text: "Do you live in an area with frequent natural disasters?",
                type: "select",
                options: ["Yes, multiple types", "Yes, one type (floods, earthquakes, etc.)", "Occasional natural disasters", "Rarely or never"],
                required: true
            },
            {
                id: "dangerous_job",
                text: "Do you work in a dangerous job?",
                type: "select",
                options: ["Yes, very high risk", "Yes, moderate risk", "Slightly dangerous", "Safe job environment"],
                required: true
            },
            {
                id: "ignored_health",
                text: "Have you ever ignored a serious injury or illness instead of seeking medical help?",
                type: "select",
                options: ["Yes, frequently", "Yes, occasionally", "Rarely", "Never"],
                required: true
            },
            {
                id: "food_safety",
                text: "How often do you check expiration dates on food?",
                type: "select",
                options: ["Always", "Usually", "Rarely", "Never"],
                required: true
            },
            {
                id: "seatbelt_death",
                text: "Do you wear a seatbelt when driving?",
                type: "select",
                options: ["Always", "Most of the time", "Sometimes", "Rarely or never"],
                required: true
            }
        ]
    },
    {
        category: "Crime & Violence",
        questions: [
            {
                id: "dangerous_places",
                text: "Do you often find yourself in risky or dangerous places at night?",
                type: "select",
                options: ["Yes, frequently", "Sometimes", "Rarely", "Never"],
                required: true
            },
            {
                id: "physical_fights",
                text: "Have you ever been in a physical fight?",
                type: "select",
                options: ["Yes, many times", "Yes, a few times", "Once or twice", "Never"],
                required: true
            },
            {
                id: "enemies",
                text: "Do you have any enemies or people who might hold a grudge against you?",
                type: "select",
                options: ["Yes, serious enemies", "Yes, minor conflicts", "Not that I'm aware of", "Definitely not"],
                required: true
            },
            {
                id: "trust_issues",
                text: "Have you ever trusted someone you probably shouldn't have?",
                type: "select",
                options: ["Yes, frequently", "Yes, occasionally", "Rarely", "Never"],
                required: true
            }
        ]
    },
    {
        category: "Random Fate & Superstition",
        questions: [
            {
                id: "fate_belief",
                text: "Do you believe in fate or destiny?",
                type: "select",
                options: ["Strongly believe", "Somewhat believe", "Neutral", "Don't believe"],
                required: true
            },
            {
                id: "bad_feeling",
                text: "Have you ever had a bad feeling that turned out to be true?",
                type: "select",
                options: ["Yes, many times", "Yes, a few times", "Maybe once", "Never"],
                required: true
            },
            {
                id: "luck",
                text: "Do you feel like you're lucky or unlucky?",
                type: "select",
                options: ["Very lucky", "Somewhat lucky", "Neutral", "Somewhat unlucky", "Very unlucky"],
                required: true
            },
            {
                id: "should_have_died",
                text: "Have you ever been in a situation where you 'should have died' but didn't?",
                type: "select",
                options: ["Yes, multiple times", "Yes, once", "Not sure", "No"],
                required: true
            }
        ]
    }
];

// Global variables
let currentCategory = 0;
let currentQuestion = 0;
let quizData = {};
let currentQuiz = lifeExpectancyQuestions;
let isFirstQuiz = true;

// DOM elements
const quizContainer = document.getElementById('quiz-container');
const progressBar = document.getElementById('progress-bar');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const resultAge = document.getElementById('result-age');
const resultMessage = document.getElementById('result-message');
const factorsList = document.getElementById('factors-list');
const deathBtn = document.getElementById('death-btn');
const deathResult = document.getElementById('death-result');
const deathTitle = document.getElementById('death-title');
const deathDescription = document.getElementById('death-description');
const restartBtn = document.getElementById('restart-btn');
const mainTitle = document.getElementById('main-title');

// Initialize the quiz
function initQuiz() {
    loadQuestion();
    updateProgressBar();

    // Event listeners
    previousBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    deathBtn.addEventListener('click', startDeathQuiz);
    restartBtn.addEventListener('click', restartQuiz);
}

// Load current question into the DOM
function loadQuestion() {
    if (currentCategory >= currentQuiz.length) {
        // End of quiz
        if (isFirstQuiz) {
            showLifeExpectancyResult();
        } else {
            showDeathResult();
        }
        return;
    }

    const category = currentQuiz[currentCategory];
    
    if (!category || !category.questions) {
        console.error("Invalid category or questions not found.");
        return;
    }

    if (currentQuestion >= category.questions.length) {
        // Move to next category
        currentCategory++;
        currentQuestion = 0;
        loadQuestion();
        return;
    }

    const question = category.questions[currentQuestion];
    
    // Create question HTML
    let questionHTML = `
        <div class="category-title">${category.category}</div>
        <div class="question-container">
            <div class="question">${question.text}</div>
            <div class="options">
    `;

    // Create input element based on question type
    if (question.type === 'text' || question.type === 'number') {
        questionHTML += `
            <input type="${question.type}" id="${question.id}" 
            ${question.required ? 'required' : ''} 
            ${quizData[question.id] ? `value="${quizData[question.id]}"` : ''}>
        `;
    } else if (question.type === 'select') {
        questionHTML += `
            <select id="${question.id}" ${question.required ? 'required' : ''}>
                <option value="" disabled ${!quizData[question.id] ? 'selected' : ''}>Select an option</option>
        `;
        
        question.options.forEach(option => {
            questionHTML += `
                <option value="${option}" ${quizData[question.id] === option ? 'selected' : ''}>${option}</option>
            `;
        });
        
        questionHTML += `</select>`;
    } else if (question.type === 'radio') {
        question.options.forEach((option, index) => {
            questionHTML += `
                <div class="option ${quizData[question.id] === option ? 'selected' : ''}" 
                     data-value="${option}" onclick="selectOption('${question.id}', '${option}')">
                    ${option}
                </div>
            `;
        });
    }

    questionHTML += `
            </div>
        </div>
    `;

    quizContainer.innerHTML = questionHTML;

    // Update button states
    updateButtonStates();
}

// Update progress bar
function updateProgressBar() {
    const totalQuestions = getTotalQuestions();
    const answeredQuestions = getAnsweredQuestions();
    const progress = (answeredQuestions / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
}

// Get total number of questions
function getTotalQuestions() {
    let total = 0;
    currentQuiz.forEach(category => {
        if (category && category.questions) {
            total += category.questions.length;
        }
    });
    return total;
}

// Get number of answered questions
function getAnsweredQuestions() {
    let current = 0;
    
    // Count all complete categories
    for (let i = 0; i < currentCategory; i++) {
        if (currentQuiz[i] && currentQuiz[i].questions) {
            current += currentQuiz[i].questions.length;
        }
    }
    
    // Add current category's answered questions
    current += currentQuestion;
    
    return current;
}

// Update next/previous button states
function updateButtonStates() {
    previousBtn.disabled = (currentCategory === 0 && currentQuestion === 0);
    
    // Check if current question is answered
    const currentQ = currentQuiz[currentCategory]?.questions[currentQuestion];
    if (!currentQ) {
        console.error("Current question not found.");
        return;
    }

    const isAnswered = quizData[currentQ.id] !== undefined && quizData[currentQ.id] !== '';
    
    if (isAnswered) {
        nextBtn.disabled = false;
    } else {
        const inputElement = document.getElementById(currentQ.id);
        if (inputElement) {
            inputElement.addEventListener('change', function() {
                quizData[currentQ.id] = this.value;
                nextBtn.disabled = !this.value;
                updateProgressBar();
            });
        }
        nextBtn.disabled = true;
    }
}

// Go to previous question
function goToPreviousQuestion() {
    saveCurrentAnswer();
    
    if (currentQuestion > 0) {
        currentQuestion--;
    } else if (currentCategory > 0) {
        currentCategory--;
        currentQuestion = currentQuiz[currentCategory]?.questions.length - 1 || 0;
    }
    
    loadQuestion();
    updateProgressBar();
}

// Go to next question
function goToNextQuestion() {
    saveCurrentAnswer();
    
    const category = currentQuiz[currentCategory];
    if (!category || !category.questions) {
        console.error("Invalid category or questions not found.");
        return;
    }

    if (currentQuestion < category.questions.length - 1) {
        currentQuestion++;
    } else {
        currentCategory++;
        currentQuestion = 0;
        
        if (currentCategory >= currentQuiz.length) {
            // End of quiz
            if (isFirstQuiz) {
                showLifeExpectancyResult();
            } else {
                showDeathResult();
            }
            return;
        }
    }
    
    loadQuestion();
    updateProgressBar();
}

// Save the current answer
function saveCurrentAnswer() {
    if (currentCategory < currentQuiz.length) {
        const currentQ = currentQuiz[currentCategory]?.questions[currentQuestion];
        if (!currentQ) {
            console.error("Current question not found.");
            return;
        }

        const inputElement = document.getElementById(currentQ.id);
        if (inputElement) {
            quizData[currentQ.id] = inputElement.value;
        }
    }
}

// Select an option (for radio buttons)
window.selectOption = function(questionId, value) {
    quizData[questionId] = value;
    
    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        if (option.getAttribute('data-value') === value) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    
    nextBtn.disabled = false;
    updateProgressBar();
};

// Show life expectancy result
function showLifeExpectancyResult() {
    // Hide quiz elements
    quizContainer.style.display = 'none';
    document.querySelector('.button-container').style.display = 'none';
    
    // Calculate life expectancy based on answers
    const lifeExpectancy = calculateLifeExpectancy();
    resultAge.textContent = lifeExpectancy;
    
    // Generate factors affecting life expectancy
    generateFactors();
    
    // Show result container
    resultContainer.style.display = 'block';
    deathBtn.style.display = 'block';
}

// Calculate life expectancy based on quiz answers
function calculateLifeExpectancy() {
    // Base life expectancy
    let baseAge = 78;
    
    // Adjust based on gender
    if (quizData.gender === "Female") baseAge += 5;
    if (quizData.gender === "Male") baseAge -= 2;
    
    // Adjust based on current age (the older you are, the more likely you are to reach an older age)
    const currentAge = parseInt(quizData.age || 30);
    if (currentAge > 60) baseAge += 3;
    if (currentAge > 80) baseAge += 5;
    
    // Calculate BMI and adjust
    const height = parseFloat(quizData.height) / 100; // convert to meters
    const weight = parseFloat(quizData.weight);
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) baseAge -= 3; // Underweight
    if (bmi > 30) baseAge -= 5; // Obese
    if (bmi > 35) baseAge -= 8; // Severely obese
    
    // Family history
    if (quizData.grandparents_age === "Above 90") baseAge += 5;
    if (quizData.grandparents_age === "Below 60") baseAge -= 5;
    if (quizData.family_disease === "Yes, multiple serious conditions") baseAge -= 6;
    if (quizData.genetic_disorder === "Yes, multiple cases") baseAge -= 5;
    
    // Lifestyle factors
    if (quizData.smoking === "Yes, regularly") baseAge -= 10;
    if (quizData.smoking === "Occasionally") baseAge -= 5;
    if (quizData.smoking === "No, but I used to") baseAge -= 3;
    
    if (quizData.alcohol === "Daily") baseAge -= 7;
    if (quizData.alcohol === "Several times a week") baseAge -= 3;
    if (quizData.alcohol === "Weekly") baseAge -= 1;
    
    if (quizData.sleep === "Less than 5 hours") baseAge -= 5;
    if (quizData.sleep === "More than 8 hours") baseAge += 2;
    
    if (quizData.exercise === "Daily") baseAge += 5;
    if (quizData.exercise === "3-5 times a week") baseAge += 3;
    if (quizData.exercise === "Never") baseAge -= 6;
    
    if (quizData.diet === "Very strict healthy diet") baseAge += 6;
    if (quizData.diet === "Mostly healthy") baseAge += 3;
    if (quizData.diet === "Junk food often") baseAge -= 6;
    
    if (quizData.chronic_illness === "Multiple serious conditions") baseAge -= 12;
    if (quizData.chronic_illness === "One serious condition") baseAge -= 6;
    
    if (quizData.doctor_visits === "Rarely or never") baseAge -= 3;
    
    // Mental health & stress
    if (quizData.stress === "Always") baseAge -= 5;
    if (quizData.stress === "Often") baseAge -= 3;
    if (quizData.social_support === "No support system") baseAge -= 4;
    if (quizData.mental_health === "Yes, multiple conditions") baseAge -= 5;
    if (quizData.mental_health === "Yes, one condition") baseAge -= 3;

    // Environment & risks
    if (quizData.seatbelt === "Never") baseAge -= 5;
    if (quizData.seatbelt === "Sometimes") baseAge -= 2;
    if (quizData.extreme_sports === "Yes, frequently") baseAge -= 4;
    if (quizData.pollution === "Yes, severe pollution") baseAge -= 3;
    if (quizData.near_death === "Yes, multiple times") baseAge -= 5;

    // Ensure life expectancy is within a reasonable range
    baseAge = Math.max(50, Math.min(120, baseAge));

    return Math.round(baseAge);
}

// Generate factors affecting life expectancy
function generateFactors() {
    factorsList.innerHTML = '';

    const factors = [];

    // Gender factor
    if (quizData.gender === "Female") {
        factors.push("Being female adds a few years to your life expectancy.");
    } else if (quizData.gender === "Male") {
        factors.push("Being male slightly reduces your life expectancy.");
    }

    // BMI factor
    const height = parseFloat(quizData.height) / 100; // convert to meters
    const weight = parseFloat(quizData.weight);
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        factors.push("Being underweight can reduce your life expectancy.");
    } else if (bmi > 30) {
        factors.push("Being obese can significantly reduce your life expectancy.");
    }

    // Smoking factor
    if (quizData.smoking === "Yes, regularly") {
        factors.push("Regular smoking greatly reduces your life expectancy.");
    } else if (quizData.smoking === "Occasionally") {
        factors.push("Occasional smoking can still reduce your life expectancy.");
    }

    // Alcohol factor
    if (quizData.alcohol === "Daily") {
        factors.push("Daily alcohol consumption can reduce your life expectancy.");
    } else if (quizData.alcohol === "Several times a week") {
        factors.push("Frequent alcohol consumption can have a negative impact on your life expectancy.");
    }

    // Exercise factor
    if (quizData.exercise === "Daily") {
        factors.push("Regular exercise adds years to your life expectancy.");
    } else if (quizData.exercise === "Never") {
        factors.push("Lack of exercise can reduce your life expectancy.");
    }

    // Diet factor
    if (quizData.diet === "Junk food often") {
        factors.push("A diet high in junk food can reduce your life expectancy.");
    } else if (quizData.diet === "Very strict healthy diet") {
        factors.push("A very strict healthy diet can add years to your life expectancy.");
    }

    // Chronic illness factor
    if (quizData.chronic_illness === "Multiple serious conditions") {
        factors.push("Having multiple chronic illnesses can significantly reduce your life expectancy.");
    } else if (quizData.chronic_illness === "One serious condition") {
        factors.push("Having a chronic illness can reduce your life expectancy.");
    }

    // Stress factor
    if (quizData.stress === "Always") {
        factors.push("Chronic stress can reduce your life expectancy.");
    }

    // Social support factor
    if (quizData.social_support === "No support system") {
        factors.push("Lack of social support can reduce your life expectancy.");
    }

    // Display factors
    factors.forEach(factor => {
        const li = document.createElement('li');
        li.textContent = factor;
        factorsList.appendChild(li);
    });
}

// Start the death quiz
function startDeathQuiz() {
    // Reset quiz state
    currentCategory = 0;
    currentQuestion = 0;
    quizData = {};
    currentQuiz = deathCauseQuestions;
    isFirstQuiz = false;

    // Hide result container and show quiz container
    resultContainer.style.display = 'none';
    deathBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    document.querySelector('.button-container').style.display = 'flex';

    // Update title
    mainTitle.textContent = "How Will You Die?";

    // Load first question
    loadQuestion();
    updateProgressBar();
}

// Show death result
function showDeathResult() {
    // Hide quiz elements
    quizContainer.style.display = 'none';
    document.querySelector('.button-container').style.display = 'none';

    // Calculate death cause based on answers
    const deathCause = calculateDeathCause();
    deathTitle.textContent = deathCause.title;
    deathDescription.textContent = deathCause.description;

    // Show death result container
    deathResult.style.display = 'block';
    restartBtn.style.display = 'block';
}

// Calculate death cause based on quiz answers
function calculateDeathCause() {
    // Base death cause
    let deathCause = {
        title: "Natural Causes",
        description: "You are likely to die of natural causes, such as old age or a common illness."
    };

    // Adjust based on lifestyle
    if (quizData.smoke_death === "Yes, heavily") {
        deathCause = {
            title: "Lung Cancer",
            description: "Your heavy smoking habit significantly increases your risk of dying from lung cancer."
        };
    } else if (quizData.alcohol_death === "Heavy daily drinking") {
        deathCause = {
            title: "Liver Disease",
            description: "Your heavy alcohol consumption puts you at high risk for liver disease."
        };
    } else if (quizData.exercise_death === "Rarely or never") {
        deathCause = {
            title: "Heart Disease",
            description: "Your lack of exercise increases your risk of dying from heart disease."
        };
    } else if (quizData.diet_death === "Mostly junk food") {
        deathCause = {
            title: "Diabetes",
            description: "Your poor diet puts you at high risk for diabetes and related complications."
        };
    }

    // Adjust based on dangerous activities
    if (quizData.extreme_death === "Yes, frequently") {
        deathCause = {
            title: "Extreme Sports Accident",
            description: "Your frequent participation in extreme sports puts you at high risk for a fatal accident."
        };
    } else if (quizData.driving_death === "Yes, regularly") {
        deathCause = {
            title: "Car Accident",
            description: "Your reckless driving habits put you at high risk for a fatal car accident."
        };
    } else if (quizData.dangerous_hobbies === "Yes, motorcycles") {
        deathCause = {
            title: "Motorcycle Accident",
            description: "Your dangerous hobby of riding motorcycles puts you at high risk for a fatal accident."
        };
    }

    // Adjust based on environment
    if (quizData.disasters === "Yes, multiple types") {
        deathCause = {
            title: "Natural Disaster",
            description: "Living in an area prone to natural disasters puts you at high risk for a fatal event."
        };
    } else if (quizData.dangerous_job === "Yes, very high risk") {
        deathCause = {
            title: "Workplace Accident",
            description: "Your high-risk job puts you at high risk for a fatal workplace accident."
        };
    }

    // Adjust based on crime & violence
    if (quizData.dangerous_places === "Yes, frequently") {
        deathCause = {
            title: "Violent Crime",
            description: "Frequently being in dangerous places puts you at high risk for dying from violent crime."
        };
    } else if (quizData.physical_fights === "Yes, many times") {
        deathCause = {
            title: "Fatal Fight",
            description: "Your history of physical fights puts you at high risk for dying in a violent altercation."
        };
    }

    // Adjust based on random fate & superstition
    if (quizData.luck === "Very unlucky") {
        deathCause = {
            title: "Freak Accident",
            description: "Your bad luck puts you at high risk for dying in a freak accident."
        };
    } else if (quizData.should_have_died === "Yes, multiple times") {
        deathCause = {
            title: "Near-Death Experience",
            description: "Your history of near-death experiences suggests you might die in a similar situation."
        };
    }

    return deathCause;
}

// Restart the quiz
function restartQuiz() {
    // Reset quiz state
    currentCategory = 0;
    currentQuestion = 0;
    quizData = {};
    currentQuiz = lifeExpectancyQuestions;
    isFirstQuiz = true;

    // Hide result containers and show quiz container
    resultContainer.style.display = 'none';
    deathResult.style.display = 'none';
    restartBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    document.querySelector('.button-container').style.display = 'flex';

    // Update title
    mainTitle.textContent = "When Will You Die?";

    // Load first question
    loadQuestion();
    updateProgressBar();
}

// Initialize the quiz when the page loads
initQuiz();
