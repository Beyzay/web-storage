// Select the Name Input Field:
const nameInput = document.getElementById("username");

// Select the Save Name Button:
const saveButton = document.getElementById("save-btn");

// Select the Clear Name Button:
const clearButton = document.getElementById("clear-btn");

// Select the Display Area:
const displayName = document.getElementById("display-name");


// 1- When the "Save Name" button is clicked, save the user’s input to localStorage:
// Add a click event listener to the Save Name Button:
saveButton.addEventListener("click", setName);

// Define a function to set the username and update the display message:
function setName() {
    // If the Name Input Field is empty after empty spaces are removed via trim(), display an error message:
    if (nameInput.value.trim() === "") {
        displayName.innerHTML = "Please enter your name! 😞";
    } else {
    // Otherwise, save the user’s input to localStorage, clear the Name Input Field, and display a success message:
        localStorage.setItem("username", nameInput.value.trim());
        nameInput.value = "";
        displayName.innerHTML = "Name has been saved! 🥳";
    }
};


// 2- When the page is loaded or refreshed, check if a name is saved in localStorage and display it:
// Add a DOMContentLoaded event so the relevant JS runs after the HTML has been completely loaded:
document.addEventListener("DOMContentLoaded", getName);

// Define a function to get the saved username and update the display message based on the time of day:
function getName() {
    const savedName = localStorage.getItem("username");

    if (savedName) {
        const greeting = greet();
        displayName.innerHTML = `${greeting}, ${savedName}!`;
    }
};

// Define a function to greet based on the time of day:
function greet() {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
        console.log("It's morning");
        return "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        console.log("It's afternoon");
        return "Good afternoon";
    } else if (currentHour >= 18 && currentHour < 22) {
        console.log("It's evening");
        return "Good evening";
    } else {
        console.log("It's night");
        return "Good night";
    }
};

// 3- When the "Clear Name" button is clicked, remove the saved name from localStorage and update the display:
// Add a click event listener to the Clear Name Button:
clearButton.addEventListener("click", removeName);

// Define a function to remove the saved username, clear the Name Input Field, and update the display message:
function removeName() {
    const savedName = localStorage.getItem("username");

    if (savedName) {
        localStorage.removeItem("username");
        nameInput.value = "";
        displayName.innerHTML = "Name has been removed!";
    } else {
        nameInput.value = "";
        displayName.innerHTML = "There is no saved name."
    }
};
