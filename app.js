import express from "express";
import employeeRouter from "#routing";
import { newName } from "#db/employees";

const app = express();

app.use(express.json());
app.use('/employee', employeeRouter);

app.post((req, res) => {
  if (!req.body) return res.status(400).send("Name or request body not correctly provided.");
  const newEmployeeName = newName();
  res.status(201).send(newEmployeeName);
});

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});

export default app;