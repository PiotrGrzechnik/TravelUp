import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(
      "\x1b[36m%s\x1b[0m",
      `Server is running on: http://localhost:${port}`
    );
  }
});
