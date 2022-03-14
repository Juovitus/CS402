import express from "express";
import axios from "axios";
import { User } from "../models/User";
import mongoose from "mongoose";

export const register = ( app: express.Application ) => {


    app.get("/user", (req, res) => {
        const users = User.find();
        res.json(users);
    });

    app.post("/user", (req, res) => {
        const Test = new User({
            name: "test",
            authKey: "testAuthKey"
        });

        Test.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
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