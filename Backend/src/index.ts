import express from "express";
import randomstring from "randomstring";
const app = express();
const port = 8080;



const state = randomstring.generate();
// tslint:disable-next-line:no-console
console.log(state);

app.get("/", (req, res) => {
    res.send("Hello TypeScript World!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${ port }`);
});