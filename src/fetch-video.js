import fs from "fs";
import path from "path";
import download from "download";
import chalk from "chalk";
import vocabulaire from "./assets/vocabulaire.json";

const succeed = chalk.green;
const failed = chalk.bold.red;

let into = path.resolve("src", "assets", "flv");

vocabulaire.forEach(mot => {
  download(mot.video, into)
    .then(() => console.log(succeed(`succeed: ${mot.video}`)))
    .catch(error => console.error(failed(`failed: ${mot.video}`, error)));
});
