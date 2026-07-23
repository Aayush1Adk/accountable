import app from "./src/app.js";
import prisma from "./src/Config/prisma.js"
import{config} from "dotenv";

config()

async function startServer() {
    try {
        await prisma.$connect();
        console.log("Database connected.");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to database.");
        console.error(error);
        process.exit(1);
    }
}

startServer();