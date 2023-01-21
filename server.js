const express = require("express");
const path = require("path");
const db = require("./db.json");

const app = express();
const getJobs = function (req, res) {
  return res.status(200).json(db.jobs);
};
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
const jobsRouter = express.Router();
jobsRouter.get("/", getJobs);

app.use("/job/results", jobsRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on ${PORT}...`));
