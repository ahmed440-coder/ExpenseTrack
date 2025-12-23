require("dotenv").config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const incomeRoute = require('./routes/incomeRoute')
const expenseRoutes = require('./routes/expenseRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const app = express()

// Trust proxy for Render/Heroku SSL termination
app.set("trust proxy", 1);


app.use(cors(
    {
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET","POST","PUT","DELETE"],
        allowedHeaders : ["Content-Type","Authorization"],
    })
)
app.use(express.json())

connectDB();

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/income", incomeRoute)
app.use("/api/v1/expense", expenseRoutes)
app.use("/api/v1/dashboard", dashboardRoutes)



app.use("/uploads",express.static(path.join(__dirname,"uploads")))


app.use(express.static(path.join(__dirname, "../frontend/dist")));


app.get(/.*/, (req, res) => {
    const indexPath = path.join(__dirname, "../frontend/dist", "index.html");
    if (!require('fs').existsSync(indexPath)) {
        console.error("Frontend build not found at:", indexPath);
        return res.status(404).send("Frontend build not found. Please run 'npm run build' in the frontend directory.");
    }
    res.sendFile(indexPath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is starting on port ${PORT}`)
})
