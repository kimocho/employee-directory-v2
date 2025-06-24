import express from "express";
import employeeRouter from "#routing";
import employeeRouter from "#routing";
import router from './api/index.js';
import { newName } from "#db/notes";

const router = express.Router();

router.use(express.json());
router.use('/employee', employeeRouter);

router.post((req, res) => {
  if (!req.body) return res.status(400).send("Name or request body not correctly provided.");
  const newEmployeeName = newName();
  res.status(201).send(newEmployeeName);
});

router.get("/", (req, res) => {
  res.send("Hello employees!");
});

router.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});

export default router;