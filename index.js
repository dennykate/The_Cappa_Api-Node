import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./routes/admin.js";
import bookingRoutes from "./routes/booking.js";
import leaderRoutes from "./routes/leader.js";
import roomRoutes from "./routes/room.js";
import guestRoutes from "./routes/guest.js";
import conciergeRoutes from "./routes/concierge.js";
import reviewRoutes from "./routes/review.js";
import serviceRoutes from "./routes/service.js";
import facilityRoutes from "./routes/facility.js";
import menuRoutes from "./routes/menu.js";
import newsRoutes from "./routes/news.js";
import { checkAdmin } from "./middlewares/admin.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use("/booking", checkAdmin, bookingRoutes);
app.use("/leader", checkAdmin, leaderRoutes);
app.use("/room", checkAdmin, roomRoutes);
app.use("/guest", checkAdmin, guestRoutes);
app.use("/concierge", checkAdmin, conciergeRoutes);
app.use("/review", checkAdmin, reviewRoutes);
app.use("/service", checkAdmin, serviceRoutes);
app.use("/facility", checkAdmin, facilityRoutes);
app.use("/menu", checkAdmin, menuRoutes);
app.use("/news", checkAdmin, newsRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "server running" });
});

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT} `);
  });
});
