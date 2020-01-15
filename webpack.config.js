const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js", //output은 main.js가 나올 것임.
    path: path.resolve("./dist")
  }
};
