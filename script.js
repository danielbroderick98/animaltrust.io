//Javascript code Daniel Broderick

//Function for donation
function donate(){
    //Retrieving the ID email from home.html
    var email = document.getElementById("email").value
    //Retrieving the ID amount from home.html
    var amount = document.getElementById("amount").value
    //changing the value to an int
    var amount = parseInt(amount)
    //Creating a variable that will validate the email using regular expressions
    var emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //The function that will validate the email by passing email throught the parenthesis
    function validateEmail(email) {
        return emailTest.test(email);
    }

    //If statement to check if amount is number
    if(isNaN(amount) || amount <= 0){
        alert("This is not a valid number");
    }
    else{
        //if statement to check if email is valid
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        }else{
            //Changing the donate confirm id once everything is validated
            document.getElementById("donateConfirm").innerHTML = "Thank you for donating, An email has been sent to you."
        }
    }
}

//***Trivia Code***

//Making certain elements not visible on load
document.getElementById('question').style.display = 'none';
document.getElementById('answer').style.display = 'none';
document.getElementById('enter').style.display = 'none';
document.getElementById('comAnswer').style.display = 'none';
document.getElementById('playAgain').style.display = 'none';

//This function will allow the user to play the game when playBtn is clicked
function gameOn(){
    document.getElementById('question').style.display = 'block';
    document.getElementById('answer').style.display = 'block';
    document.getElementById('enter').style.display = 'block';
    document.getElementById('comAnswer').style.display = 'block';
    document.getElementById('playBtn').style.display = 'none';
}

//Creating an array with the questions and answers in it
var questionArray = [{question: "How many legs does a dog have?", answer: "4"}, 
    {question: "What sound does a cat make?", answer: "meow"},
    {question: "Who is mans bestfriend?", answer: "dog"},
    {question: "What animal is known as the king of the jungle?", answer: "lion"},
    {question: "How many teeth does an average dog have?", answer: "42"},
    {question: "What is the fastest land animal?", answer: "cheetah"},
    {question: "What type of bird can mimick human voice?", answer: "parrot"},
    {question: "How many tentacles does an octopus have?", answer: "8"},
    {question: "What is the name of a group of lions?", answer: "pride"},
    {question: "Which animal is known for building dams?", answer: "beaver"},
    {question: "Which animal is famous for its long neck and legs?", answer: "giraffe"},
]

//Retrieving the question h3 question, text input answer &  h3 comAnswer
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var comAnswer = document.getElementById("comAnswer");
//Randomising the questions from the array
var randomQuestion = Math.floor(Math.random() * questionArray.length);
//Displaying the question from the array in the h3
question.innerText = questionArray[randomQuestion].question;
// Array to keep track of displayed questions
var displayedQuestions = [randomQuestion];
//Variable to keep record of score
var tally = 0;
//Variable that will keep track of answerAmount
var answerAmount = 0;

//Creating a function to check if answer is correct
function checkAnswer(){
    //Trimming the white space
    var userAnswer = answer.value.trim();
    //Getting the users answer
    var correctAnswer = questionArray[randomQuestion].answer;

    // Check if the user's answer matches up using an if statement
    if (userAnswer.toLowerCase() == correctAnswer.toLowerCase()) {
        //Incrementing score
        tally++
        comAnswer.innerText = "Previous Answer: Correct! you got " + tally + " right";
    }
    else{
        comAnswer.innerText = "Previous Answer: Incorrect! The correct answer is: " + correctAnswer;
    }

    // Using a Do while loop to find a new random question that hasn't been displayed before
    do {
        randomQuestion = Math.floor(Math.random() * questionArray.length);
    } while (displayedQuestions.includes(randomQuestion));

    // Add the new question to the displayed questions array
    displayedQuestions.push(randomQuestion);

    // Display the new question
    question.innerText = questionArray[randomQuestion].question;

    answer.value = '';

    //answerAmount will increment each time check answer is clicked
    answerAmount++
    if(answerAmount > 9){
        question.innerText = "You have got " + tally + " points";
        document.getElementById('answer').style.display = 'none';
        document.getElementById('enter').style.display = 'none';
        document.getElementById('playAgain').style.display = 'block';
    }
}

//Function to let the user play again
function playAgain(){
    //Resetting the amounts in the variables
    answerAmount = 0;
    tally = 0;

    //Resetting the html elements
    question.innerText = questionArray[randomQuestion].question;
    document.getElementById('answer').style.display = 'block';
    document.getElementById('enter').style.display = 'block';
    document.getElementById('playAgain').style.display = 'none';
    //Resetting the displayed questions
    displayedQuestions = [];

    document.getElementById("comAnswer").innerText = " ";
}

//Javascript code Darren Walsh

function validateForm() {
    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 
    const age = document.getElementById('age').value;
    const preferences = document.getElementById('preferences').value;
    const terms = document.getElementById('terms').checked; 

    if (!name || !email || !age || !preferences || !terms) {
        alert('Please fill out all fields and agree to the terms.'); 
        return false; 
    }

    if (age <= 0) { 
        alert('Please enter a valid age.');
        return false; 
    }
    return true; 
}


//Javascript code Shane Farrell

document.addEventListener('DOMContentLoaded', () => {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const form = document.getElementById('testimonial-form');
 
    // Function to create a testimonial element
    function createTestimonial(author, text, rating, personImageURL, animalImageURL) {
        const testimonial = document.createElement('div');
        testimonial.className = 'testimonial';
 
        // Create testimonial HTML
        testimonial.innerHTML = `
            <div class="testimonial-person">
                <img src="${personImageURL}" alt="Photo of ${author}" class="testimonial-person-photo">
            </div>
            <div class="testimonial-content">
                <p class="testimonial-text">"${text}"</p>
                <p class="testimonial-author">- ${author}</p>
                <div class="testimonial-animal">
                    <img src="${animalImageURL}" alt="Photo of the animal" class="testimonial-animal-photo">
                </div>
                <div class="testimonial-rating">
                    ${'<span class="fa fa-star checked"></span>'.repeat(parseInt(rating))}
                    ${'<span class="fa fa-star"></span>'.repeat(5 - parseInt(rating))}
                </div>
            </div>
        `;
 
        return testimonial;
    }
 
    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
 
        const author = document.getElementById('user-name').value.trim();
        const text = document.getElementById('user-testimonial').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked')?.value;
        const personImage = document.getElementById('user-photo').files[0];
        const animalImage = document.getElementById('pet-photo').files[0];
 
        // Check for empty fields
        if (!author || !text || !rating) {
            alert('Please fill out all fields and select a rating.');
            return;
        }
 
        if (!personImage || !animalImage) {
            alert('Please upload both images.');
            return;
        }
 
        // Check if the files are images
        if (!personImage.type.startsWith('image/') || !animalImage.type.startsWith('image/')) {
            alert('Please upload valid image files.');
            return;
        }
 
        // Create FileReaders for the uploaded images
        const personImageReader = new FileReader();
        const animalImageReader = new FileReader();
 
        personImageReader.onload = (e) => {
            const personImageURL = e.target.result;
            animalImageReader.onload = (e) => {
                const animalImageURL = e.target.result;
 
                // Create and append the testimonial
                const testimonial = createTestimonial(author, text, rating, personImageURL, animalImageURL);
                testimonialsContainer.appendChild(testimonial);
 
                // Reset the form
                form.reset();
            };
 
            animalImageReader.readAsDataURL(animalImage); // Start reading animal image
        };
 
        personImageReader.readAsDataURL(personImage); // Start reading person image
    });
});