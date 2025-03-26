const express = require("express");
const {users} = require("./data/users.json")


const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "server is up and running :-)",
        data: "hey",
    });
});


/*
* Route: /users
* Method: GET
* Description: Get all users
* Access: Public
* Parameters: None
*/

app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

app.get("*", (req, res)=> {
    res.status(404).json({
        message: "page not found",
    });
});

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});