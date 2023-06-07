fetch('unpkg.com/bulma/css/bulma.css')
    .then((css) => {
        css = css.replace(/\n/g, '')
                    .replace(/"/g, '\\"') // escape double quotes
                    .replace(/'/g, "\\'") // escape single quotes
        return css;
    })
    .then((escapedCss) => {
        const style = document.createElement('style')
        style.innerText = escapedCss
        document.head.appendChild(style);
    })


// this is almost what's happening
// when you look at the output, an almost similar string will be output to the style tag having all the quotes as expected
// so we escape the quotes so that we can retain the correct structure of our string
const str = "Michael Jackson: \"I am going to make a change\" it\'s going to feel real good";

console.log(str)
// Michael Jackson: "I am going to make a change" it's going to feel real good

/**

The double quotes and single quotes are being escaped in order to ensure that the CSS code can be safely inserted into a JavaScript string. 

When you fetch a CSS file using the fetch() method, the contents of the file are returned as a string. 
However, if the CSS code contains any double quotes or single quotes, those characters could cause errors if they are not properly escaped. 

By escaping the double quotes and single quotes using the replace() method, 
you are ensuring that any quotes in the CSS code will be treated as literal characters, rather than as the start or end of a string. 

This is important because when you create a new <style> element in the DOM and 
set its innerText property to the CSS code, the code is effectively being inserted into a JavaScript string. 
If the string contains any unescaped quotes, it could cause errors or prevent the CSS from being applied correctly.

*//
