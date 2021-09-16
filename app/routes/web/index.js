const express = require("express");
const router = express.Router();

const homeController = require("app/http/controllers/homeController");

// Middlewares
const errorHandler = require("app/http/middleware/errorHandler");

router.post(
    "/products",
    homeController.products
  );

  router.post(
    "/categories",
    homeController.categories
  );

  router.post(
    "/percentages",
    homeController.percentages
  );


// Handle Errors
router.all("*", errorHandler.error404);
router.use(errorHandler.handler);

module.exports = router;
