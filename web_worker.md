Sure, here's an example of a simple web worker that calculates the factorial of a number:

**index.html**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Web Worker Example</title>
</head>
<body>
  <input type="number" id="number-input">
  <button id="calculate-button">Calculate Factorial</button>
  <p id="result"></p>
  <script>
    const worker = new Worker('worker.js');
    const numberInput = document.getElementById('number-input');
    const calculateButton = document.getElementById('calculate-button');
    const result = document.getElementById('result');
    
    calculateButton.addEventListener('click', () => {
      const number = numberInput.value;
      worker.postMessage(number);
    });
    
    worker.onmessage = (event) => {
      result.textContent = event.data;
    };
  </script>
</body>
</html>
```

**worker.js**
```javascript
function calculateFactorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

onmessage = (event) => {
  const number = event.data;
  const result = calculateFactorial(number);
  postMessage(result);
};
```

In this example, we have an HTML file with a number input, a button, and a paragraph element to display the result. We also have a JavaScript file, `worker.js`, that contains the code to calculate the factorial.

When the user clicks the button, we create a new web worker and send it the number from the input field using the `postMessage` method. The web worker then calculates the factorial using the `calculateFactorial` function, and sends the result back to the main thread using the `postMessage` method.

When the main thread receives the result from the web worker, it updates the text content of the result paragraph element to display the result.
