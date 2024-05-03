import express from "express";
import * as path from "path";
import "dotenv/config";

// Express Setting
const app = express();
const port = process.env.PORT || 3000;

// App Setting
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/app/views"));

app.listen(port, () => {
    console.log(`Server menyala abangkuh di localhost:${port}`);
});
