
function convertToCelsius(Fahrenheit){
    return (Fahrenheit - 32) * 5/9;
    return celsius;
}
function createMessage(celsius, Fahrenheit){
return 'you entered' + Fahrenheit + 'degrees Fahrenheit, which is' + celsius + 'degrees celsius.';
}
const inputFahrenheit = window.prompt('how many degrees do you want to convert');

const convertedCelsius = convertToCelsius(parseFloat(inputFahrenheit));


console.log(createMessage(convertedCelsius, parseFloat(inputFahrenheit)));