const express = require('express');
const parser = require("body-parser");
const app = express();
const cors = require('cors');

app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "msg" : "we in dis"
    });
    
});

const WordRouter = require('./routes/WordRouter');
const UserRouter = require('./routes/UserRouter');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', UserRouter);
app.use('/word', WordRouter);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});