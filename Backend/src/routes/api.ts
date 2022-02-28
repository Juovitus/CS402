import express from "express";
import axios from "axios";


export const register = ( app: express.Application ) => {

    app.get("/user", (req, res) => {
        res.send("response");
    });

    // Returns all projects from a user
    app.get("/projects/:userID", (req, res) => {

        // query the database to get the user access token
        const token = 0;   // TEMP VALUE

        const config = {
            headers: {Authorization: `Bearer ${token}`}
        };

        const query = 'https://git.las.iastate.edu/api/v4/projects?owned=true&simple=true';

        axios.get(query, config).then( (val: any) => {
            res.send(val.data);
        });
    });

    // Gets latest commit from a project
    // userID: id of the user with access to the project
    // projectID: id of the project
    // app.get("/projects/commit/:userID/:projectID", (req, res) => {

    // });

    // app.post('/user/')
};