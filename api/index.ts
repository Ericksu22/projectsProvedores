// dependencies
import express from "express";
import cors from "cors";
//configs
import corsOptions from "./config/corsOptions";

//routes
import consul from "./routes/Consultas";


//declarations
const api = express();

//routes

api.use("/consul", cors(corsOptions), consul);

export default api;
