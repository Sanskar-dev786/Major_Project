const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

//Index Route
router.get("/", wrapAsync(listingController.index));

//New Route
router.get(
  "/new",
  isLoggedIn("You must be logged in to create listing!"),
  listingController.renderNewForm
);

//Show Route
router.get("/:id", wrapAsync(listingController.showListing));

//Create Route
router.post(
  "/",
  validateListing,
  isLoggedIn("You must be logged in to create listing!"),
  wrapAsync(listingController.createListing)
);

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn("You must be logged in to edit listing!"),
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

//Update Route
router.put(
  "/:id",
  isLoggedIn("You must be logged in to update listing!"),
  isOwner,
  validateListing,
  wrapAsync(listingController.updateListing)
);

//Delete Route
router.delete(
  "/:id",
  isLoggedIn("You must be logged in to delete listing!"),
  isOwner,
  wrapAsync(listingController.destoryListing)
);

module.exports = router;
