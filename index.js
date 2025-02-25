const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


// app.get("/users", (req,res) => {
//     const html = `
//     <ul>
//         ${users.map(user => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
// })



//rest api
app.get("/api/users", (req, res) => {
    return res.json(users);
})

app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id);
    console.log(id);
    const user = users.find((user) => user.id === id);
    console.log(user);
    return res.json(user);
})

app.post("/api/users", (req,res) => {
    //todo : create new user
    return res.json({ status: "pending"});
})

app.patch("/api/users/:id", (req,res) => {
    //todo : edit the user with id
    return res.json({ status: "pending"});
})

app.delete("/api/users/:id", (req,res) => {
    //todo : delete the user with id
    return res.json({ status: "pending"});
})

//routes
app.listen(PORT,() => console.log(`Server started at port ${PORT}`));