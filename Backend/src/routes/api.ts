import express from "express";


export const register = ( app: express.Application ) => {

    app.get("/user", (req, res) => {
        res.send("response");
    });
};