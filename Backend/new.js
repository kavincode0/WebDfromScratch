const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DateSite</title>
  </head>
  <script>
     function displayTime(){
      let time = new Date();
      document.getElementById('timehr').innerHTML = time.getHours();
      // console.log(time.getHours())
      document.getElementById('timemin').innerHTML = time.getMinutes();
      document.getElementById('timesec').innerHTML = time.getSeconds();
    
      // document.getElementById('time').innerHTML = time;
     }
     setInterval(displayTime, 1000);
     
  //    function ms(){
  //     console.log(Date.now());
  //    }
  //    setInterval(ms, 1000);
      </script>
  <body>
      <div id="container">
         <div id="watch">       
             <h2 id="display">
                 <span id="timehr"></span>:
                 <span id="timemin"></span>:
                 <span id="timesec"></span>
              </h2>
          </div>
      </div>
  </body>
  <style>
      *{
          padding: 0;
          margin: 0;
          box-sizing: border-box;
      }
      #container{
          background-color: rgb(251, 196, 205);
          width: 100vw;
          height: 100vh;
          border: 15px solid purple;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      #watch{
          background-color: blueviolet;
          border-radius: 300px;
          width: 450px;
          height: 456px;
          justify-content: center;
          align-items: center;
          border: 4px solid salmon;
          display: flex;
      }
      #display{
          background-color: pink;
          color: rgb(229, 60, 187);
          font-family: Georgia, 'Times New Roman', Times, serif;
          justify-content: center;
          align-items: center;
          font-size: 80px;
      }
  </style>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});