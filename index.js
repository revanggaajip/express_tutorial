import express from "express";
import * as path from "path";
import { router } from "./src/app/routes/main.js";
import { PORT } from "./src/app/config/app.js";

// Express Setting
const app = express();

// App Setting
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/app/views"));
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server menyala abangkuh di localhost:${PORT}`);
});
