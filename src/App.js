import React from 'react';

function App() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>My App</title>
        </head>
        <body>
          <h1>Hello, World!</h1>
          <p>This is my content from index.html</p>
        </body>
      </html>
    ` }} />
  );
}

export default App;
