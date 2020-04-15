import dotenv from "dotenv";

import app from "./app";
import sequelize from "./database";

dotenv.config();

const { SERVER_PORT, NODE_ENV, DATABASE } = process.env;

const port = SERVER_PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      if (NODE_ENV === "development") {
        console.log(
          "\x1b[36m%s\x1b[0m",
          `Server is running on: http://localhost:${port}`
        );
        console.log("\x1b[36m%s\x1b[0m", `Database name: ${DATABASE}`);
      }
    });
  })
  .catch((e) => {
    console.log("\x1b[31m%s\x1b[0m", "[Error]", e.original);
  });

// const result = sequelize.query("");
// console.log(result);
