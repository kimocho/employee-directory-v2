import express from "express";
import employeeRouter from "#routing";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/employees', employeeRouter);

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});

export default app;