Fetch is a browser based command i.e. it is only used within the Browser engine.
The browser Engine does not support file systems, and so, when you try to download a file, you'll be trying to work directly with the filesystem and this is not supported by Fetch

To download file to systems, you have to use Node.js or if you have to use that file using Fetch, then you can convert it to BLOB and create a virtual file within the browser.

In Node.js, you can use the built-in `http` or `https` module to make HTTP requests to a server and download the file. You can also use a third-party library like `axios` or `node-fetch` to simplify the process.

Here's an example of how you can download the file using the `https` module:

```
const https = require('https');
const fs = require('fs');

const fileUrl = 'https://registry.npmjs.org/react/-/react-18.2.0.tgz';
const fileName = 'react-18.2.0.tgz';

const file = fs.createWriteStream(fileName);

https.get(fileUrl, response => {
  response.pipe(file);
  
  file.on('finish', () => {
    file.close();
    console.log(`File downloaded to ${fileName}`);
  });
});
```

In this example, we're using `https.get()` to make an HTTP GET request to the server and download the file. We're piping the response from the server to a writeable stream created using `fs.createWriteStream()`, which writes the data to a file on the local file system.

Once the download is complete, we close the file stream and log a message to the console to indicate that the file has been downloaded.

Note that this example assumes that you have the necessary permissions to write files to the local file system. If you're running this code in a restricted environment, such as a browser or a sandboxed Node.js environment, you may need to modify the code to work within the constraints of that environment.
