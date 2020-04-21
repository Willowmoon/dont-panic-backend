const express = require('express');
const parser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "msg" : "server is up and running"
    });
    
});

// Needs a router import: const cookbookRouter = require('./routes/cookbookRoutes');

app.use(parser.json());

// Needs a router: app.use('/api/cookbooks/', cookbookRouter);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});