import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const userStrogateKey = 'feedback-form-state';
let userData = {};

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));


savedData();

function onSubmit(evt) {
    evt.preventDefault();
    userData = JSON.parse(localStorage.getItem(userStrogateKey));
    console.log(userData);
    evt.currentTarget.reset();
    localStorage.removeItem(userStrogateKey);
}

function onInput(evt) {
    userData[evt.target.name] = evt.target.value;
    localStorage.setItem(userStrogateKey, JSON.stringify(userData));
}

function savedData() {
    const data = JSON.parse(localStorage.getItem(userStrogateKey));
    if (data) {
        if (data.email) {
            email.value = data.email;
            userData.email = data.email;
        }
        if (data.message) {
            message.value = data.message;
            userData.message = data.message;
        } 
    }
}