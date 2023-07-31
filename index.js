const http = require("http");

//const requesHandler = require("./routes");

const { handler, message } = require("./routes");
console.log(message);
const server = http.createServer(handler);

server.listen(3000, () => {
  console.log("Server is working on the port 3000");
});
