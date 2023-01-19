const pathJoinFunction = (dir, exPath) => {
  const path = require("path");
  return path.join(dir + exPath);
};

module.exports = pathJoinFunction;
