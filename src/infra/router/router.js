// src/infra/router/router.js
const express = require("express");
const fs = require("fs");
const path = require("path");

function loadControllers() {
  const controllersPath = path.join(
    __dirname,
    "..",
    "..",
    "app",
    "api",
    "controller"
  );

  const files = fs
    .readdirSync(controllersPath)
    .filter((file) => file.endsWith(".controller.js"));

  return files.map((file) => require(path.join(controllersPath, file)));
}

function createRouter() {
  const router = express.Router();
  const controllers = loadControllers();

  controllers.forEach((controllerModule) => {
    if (controllerModule.routes && Array.isArray(controllerModule.routes)) {
      controllerModule.routes.forEach((route) => {
        const { method, path: routePath, handler } = route;

        if (typeof router[method] === "function") {
          router[method](routePath, handler);
          console.log(
            `Rota registrada: [${method.toUpperCase()}] ${routePath}`
          );
        } else {
          console.error(`Método HTTP inválido para a rota ${routePath}`);
        }
      });
    }
  });

  return router;
}

module.exports = createRouter;
