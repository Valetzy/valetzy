// Simulating input (replace with actual input handling in your application)
const userInput = "123456789";

// Function to check user input and display flag
function checkInput(input) {
    const correctInput = "123456789";
    
    if (input === correctInput) {
        retrieveFlagFromServer();
    } else {
        console.log("Incorrect input");
    }
}

// Function to simulate fetching flag from server
function retrieveFlagFromServer() {
    // Simulating a request to a server endpoint (replace with actual server communication)
    setTimeout(() => {
        const flag = "selectCTF{myflag_i}";
        console.log("Flag: " + flag);
    }, 1000); // Simulating a delay for fetching data
}

// Example usage: simulate input handling
checkInput(userInput);
