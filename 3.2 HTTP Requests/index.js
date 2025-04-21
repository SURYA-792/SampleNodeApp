import bodyParser from "body-parser";
import express from "express";
import path from "path";
// import bodyParser from "body-parser";
const app = express();

// Middleware function
function logger(req, res, next) {
  console.log("Logging");
  next();
}
app.use(bodyParser.urlencoded({ extended: true }));

// Define the root directory for serving static files
const __dirname = path.resolve(); // Gets the current directory

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "loginForm.html"));
});

app.post("/loginValidation", (req, res) => {
  // res.send("Validating");
  console.log(req.body);

  res.send(
    req.body.username == "SURYA" && req.body.password == "surya792"
      ? "Logged In " + req.body.username
      : "Invalid userName and password"
  );
});

// Start the server
app.listen(3000, () => {
  console.log("app listening on post number 3000");
});
