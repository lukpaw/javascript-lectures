// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


function temperatureConverter() {
// Get user input for temperature and conversion type
    let temperature = parseFloat(prompt("Enter temperature: "));
    let type = prompt("Enter conversion type (C or F): ").toUpperCase();

// Check for valid conversion type
    if (type === "C" || type === "F") {
        let convertedTemp;

        // Convert temperature based on type
        if (type === "C") {
            convertedTemp = celsiusToFahrenheit(temperature);
        } else {
            convertedTemp = fahrenheitToCelsius(temperature);
        }

        // Display the converted temperature
        console.log(`${temperature}${type} is equal to ${convertedTemp.toFixed(2)}${type === "C" ? "F" : "C"}`);
    } else {
        console.error("Invalid conversion type. Please enter 'C' or 'F'.");
    }
}