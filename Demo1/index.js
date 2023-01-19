const app = require("./app");
const pathJoinFunction = require("./pathJoin/joinpath");
require("dotenv").config();
const PORT = process.env.PORT || 3006;

app.use((req, res) => {
  res.status(404).sendFile(pathJoinFunction(__dirname, "/error404.html"));
  console.log(pathJoinFunction(__dirname, "/error404.html"));
});

app.listen(PORT, () => {
  console.log(`The server raning at http://127.0.0.1:${PORT}`);
});
