const express = require('express');
const parser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "msg" : "Test"
    });
    
});

const gameRouter = require('./routes/game-route');
const menuRoute = require('./routes/menu-route');
const scoreRouter = require('./routes/score-route');

app.use(parser.json());

app.use('/Game', gameRouter);
app.use('/Menu', menuRoute);
app.use('/Scoreboard', scoreRouter);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});