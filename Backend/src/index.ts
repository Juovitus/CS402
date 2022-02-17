import express from "express";
import randomstring from "randomstring";
import axios from "axios";
const app = express();

const port = 8080;



// const state = randomstring.generate();
// // tslint:disable-next-line:no-console
// console.log(state);

app.get("/", (req, res) => {
    // res.send("Hello TypeScript World!");
    res.redirect("https://git.las.iastate.edu/oauth/authorize?client_id=fc94a7e013a5f5ae499b5fb8cebe8cf1480d21845933231572c6ed4f689167fc&redirect_uri=http://localhost:8080/home&response_type=code&state=FT52maX47nRH5ubBpraPU30CrgnU2ZX0&scope=read_user+api+read_api+read_repository&code_challenge=M5oPBP6RmJPh5QsGtx6ptVH7S2yjqt8sum96jBCyhZg&code_challenge_method=plain");
    // res.send(req.params);
});

app.get("/home", (req, res) => {
    // res.send("Welcome Home");

    const response = req.originalUrl.split("&");
    const code = response[0].substring(response[0].indexOf("=") + 1);

    // TEMPORARY
    const clientid = "fc94a7e013a5f5ae499b5fb8cebe8cf1480d21845933231572c6ed4f689167fc";
    const clientsecret = "15eb944a1a96401bb4add5fc16d5a3d7ae4026074fbad479926a4e2b3d601aa5";
    const granttype = "authorization_code";
    const redirecturi = "http://localhost:8080/home";
    const codeverifier = "M5oPBP6RmJPh5QsGtx6ptVH7S2yjqt8sum96jBCyhZg";

    const authURL = "https://git.las.iastate.edu/oauth/token?client_id=fc94a7e013a5f5ae499b5fb8cebe8cf1480d21845933231572c6ed4f689167fc&client_secret=15eb944a1a96401bb4add5fc16d5a3d7ae4026074fbad479926a4e2b3d601aa5&code=" + code + "&grant_type=authorization_code&redirect_uri=http://localhost:8080/home&code_verifier=M5oPBP6RmJPh5QsGtx6ptVH7S2yjqt8sum96jBCyhZg"
    // tslint:disable-next-line:no-console
    console.log(authURL);

    let token = "";

    axios.post(authURL).then( (val: any) => {
        token = val;

        // tslint:disable-next-line:no-console
        // console.log(val);
   });

   res.send(token);

});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${ port }`);
});