const fs = require("fs");

function requesHandler(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    let message = ""; // Initialize an empty message variable

    // Check if message.txt file exists before reading its contents
    if (fs.existsSync("message.txt")) {
      const readParser = fs.readFileSync("message.txt");
      message = readParser.toString();
    }

    res.write("<html>");
    res.write("<head><title>Project 1</title></head>");
    res.write(`<body><h1>${message}</h1>`); // Display the message if available
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">send</button></form>'
    );
    res.write("</body></html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const bodyParser = Buffer.concat(body).toString();
      const message = bodyParser.split("=")[1];
      fs.writeFileSync("message.txt", message);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
}

//1st way to export single object
//module.exports = requesHandler;

//2nd way
// module.exports = {
//   handler: requesHandler,
//   message: "I am coming from route.js file",
// };

//3rd way
exports.handler = requesHandler;
exports.message = "I am coming from route.js file";
