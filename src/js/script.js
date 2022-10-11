// Const
// Form Card
const formCard = document.querySelector(`.form-card`);
const form = document.querySelector(`form`);

// Btns Const
const btnSend = document.querySelector(`.send-btn`);
const btnReset = document.querySelector(`.reset-btn`);

// Inputs Const
const email = document.querySelector(`#email`);
const about = document.querySelector(`#about`);
const content = document.querySelector(`#content`);

// Loader (created by @G4b413l )
const loader = document.querySelector(`.chaotic-orbit`);

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Events Listeners
eventListener();
function eventListener() {
    // When the App Start
    document.addEventListener(`DOMContentLoaded`, startApp);

    // Input fields
    email.addEventListener(`blur`, formValidation);
    about.addEventListener(`blur`, formValidation);
    content.addEventListener(`blur`, formValidation);

    // Send Email
    form.addEventListener(`submit`, sendEmail);

    // Reset form
    btnReset.addEventListener(`click`, resetForm);
};


// Functions
function startApp() {
    btnSend.disabled = true;
    btnSend.style.cursor = `not-allowed`;
    btnSend.style.backgroundColor = `rgba(243, 63, 93, 0.62)`

}

// Form validation
function formValidation(e) {
    
    if(e.target.value.length > 0) {

        // Remove error
        const error = document.querySelector(`.error-message`);
        if(error) error.remove();

        e.target.style.borderColor = `green`;

    } else {
        e.target.style.borderColor = `red`;

        // Show error
        showError(`All the fields are required`);
    };

    if(e.target.type === `email`) {


        if(er.test( e.target.value )) {
            
        }else {
            e.target.style.borderColor = `red`;

            showError(`Your email is invalid`);
        }
    };


    if(er.test( email.value ) && about.value !== `` && content.value !== ``){
        
        btnSend.disabled = false;
        btnSend.style.cursor = `pointer`;
        btnSend.style.backgroundColor = `rgba(243, 63, 93, 1.82)`;
    }
};

// Show error to the user
function showError(message) {
    // Create the P element
    const errorMessage = document.createElement(`p`);

    //Instet the content
    errorMessage.textContent = message;

    // Assign the class and father element
    errorMessage.classList.add(`error-message`);

    // Prevent create more messages
    const errorEl = document.querySelectorAll(`.error-message`);

    if(errorEl.length === 0) {
        formCard.appendChild(errorMessage);
    };
};

// Function send email
function sendEmail(e) { 
    e.preventDefault()

    // Make appear the loader
    loader.style.display = `flex`;

    // Set time for the loader, making it desappear
    setTimeout(() => {
        loader.style.display = `none`;
        alert(`Your E-mail was send!`);
        resetForm();
    }, 3000);
 };


 // Function to reset the form
 function resetForm() {
    form.reset();

    startApp();
 }