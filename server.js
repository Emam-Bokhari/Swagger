import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import dotenv from "dotenv";

// create express application
const app = express();
dotenv.config();
const port = process.env.PORT;
// load YAML file
const swaggerDocument = YAML.load("./learning/basic/get.yaml");

// Swagger UI route setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

//  API endpoints
app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      fullName: "John Doe",
      email: "john.doe@example.com",
      role: "user",
      isDeleted: false,
      createdAt: "2024-12-23T15:30:00Z",
      updatedAt: "2024-12-23T15:30:00Z",
    },
    {
      id: 2,
      fullName: "Jane Doe",
      email: "jane.doe@example.com",
      role: "user",
      isDeleted: false,
      createdAt: "2024-12-23T15:30:00Z",
      updatedAt: "2024-12-23T15:30:00Z",
    },
  ]);
});

// API স্রোত শুরু
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
