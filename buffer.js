// Create a new ArrayBuffer with 32 bytes (256 bits)
const buffer = new ArrayBuffer(32);

// Create a new Uint8Array view on the buffer
const view = new Uint8Array(buffer);

// Fill the view with random data
window.crypto.getRandomValues(view);

// Log the key to the console
console.log(`Random key: ${view}`);


// Fetch the PNG image file
fetch('image.png')
  .then(response => response.arrayBuffer())
  .then(buffer => {
    // Create a DataView to read the binary data
    const view = new DataView(buffer);

    // Read the width and height from the binary data
    const width = view.getUint32(16);
    const height = view.getUint32(20);

    // Log the width and height to the console
    console.log(`Image width: ${width}, height: ${height}`);
  });


const buffer = new ArrayBuffer(1000);
const data = new Uint8Array(buffer);

for (let i = 0; i < data.length; i++) {
  data[i] = i % 256; // Fill the array with values between 0 and 255
  
  
const base64Data = "SGVsbG8gV29ybGQ=";
const binaryData = atob(base64Data);

// Each character in the binary data is one byte (8 bits)
console.log(binaryData.length); // 11

// Access the first byte (8 bits) using array indexing
console.log(binaryData[0]); // 72 (decimal value, equivalent to 'H' character)

// Access the second byte (8 bits)
console.log(binaryData[1]); // 101 (decimal value, equivalent to 'e' character)
  
const base64Data = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";
const binaryData = atob(base64Data);
const buffer = new ArrayBuffer(binaryData.length);
const view = new Uint8Array(buffer);
for (let i = 0; i < binaryData.length; i++) {
  view[i] = binaryData.charCodeAt(i);
}
const blob = new Blob([view], { type: "image/png" });
const url = URL.createObjectURL(blob);
const img = document.createElement("img");
img.src = url;
document.getElementById("my-div").appendChild(img);
  
  
const base64Data = "SGVsbG8gV29ybGQ=";
const binaryData = atob(base64Data)
const buffer = new ArrayBuffer(binaryData.length)
const view = new Uint8Array(buffer)

for(let i = 0; i < binaryData.length; i++) {
    view[i] = binaryData.charCodeAt(i);
}

// Uint8Array(11) [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, buffer: ArrayBuffer(11), byteLength: 11, byteOffset: 0, length: 11, Symbol(Symbol.toStringTag): 'Uint8Array']
const blob = new Blob([view], {type: "text/plain"})

blob.text().then(val=> console.log(val))
// Hello World
