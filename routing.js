import express from 'express';
import employees, { newName } from "#db/employees";
const employeeRouter = express.Router();

employeeRouter.get("/", (req, res) => {
  res.send(employees);
});

employeeRouter.post("/", (req, res, next) => {
  if (!req.body || !req.body.name) {
    res.status(400).send('no body given');
  }

  res.status(201).send(newName(req.body.name));
});

employeeRouter.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

employeeRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});

export default employeeRouter;