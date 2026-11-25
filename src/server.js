const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(express.json());

const healthRoutes = require("./routes/health.routes");
const taskRoutes = require("./routes/task.routes");

app.use("/", healthRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();