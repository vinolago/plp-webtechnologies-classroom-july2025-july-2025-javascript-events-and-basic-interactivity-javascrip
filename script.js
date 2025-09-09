// Part 1: Search contacts

const inputElement = document.querySelector('.js-contact-input')
const outputElement = document.querySelector('.js-display-output')

inputElement.addEventListener('input', function (event) {
    const userInput = event.target.value;
    outputElement.innerHTML = `All search results for <strong> '${userInput}' </strong>...press Enter`;
}
);

// Part 2: Collapsible FAQ section

const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // toggle active class on clicked item
        item.classList.toggle('active');
    });
});

// Part 3: Form validation

const form = document.getElementById('login-form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', function (e) {
    
    e.preventDefault(); //prevent form from submiting 

    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    // Email validation using regex
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!emailValue) {
        alert('Email is required.');
        email.focus();
        return
    }

    if (!isEmailValid) {
        alert('Please enter a valid email address.');
        email.focus();
        return;
    }

    if (!passwordValue) {
        alert('Password is required.');
        password.focus();
        return;
    }

    // You can also check password length, etc.
    if (passwordValue.length < 8) {
        alert('Password must be at least 8 characters long.');
        password.focus();
        return;
    }

    // If all validations pass, submit the form
    alert('Login successful!');
    form.submit();
});