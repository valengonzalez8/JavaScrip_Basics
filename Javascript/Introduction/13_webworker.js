// Web worker file example -- name of the file: demo_workers.js

let i = 0;

function timedCount() {
    i ++;
    postMessage(i); //method used to post a message back to the HTML page
    setTimeout("timedCount()", 500);
}

timedCount();

//Web worker object --> calls the web worker file from an HTML page
if (typeof(w) == "undefined"){
    w = new Worker("demo_workers.js")
}

//then we can send and recieve messages from the web worker
w.onmessage = function(event){
    document.getElementById("result").innerHTML = event.data;
};

//terminating a web worker
w.terminate();

//reusing the web worker
w = undefined;


//full example
// <!DOCTYPE html>
// <html>
// <body>

// <p>Count numbers: <output id="result"></output></p>
// <button onclick="startWorker()">Start Worker</button>
// <button onclick="stopWorker()">Stop Worker</button>

// <script>
// let w;

// function startWorker() {
//   if (typeof(w) == "undefined") {
//     w = new Worker("demo_workers.js");
//   }
//   w.onmessage = function(event) {
//     document.getElementById("result").innerHTML = event.data;
//   };
// }

// function stopWorker() {
//   w.terminate();
//   w = undefined;
// }
// </script>

// </body>
// </html>