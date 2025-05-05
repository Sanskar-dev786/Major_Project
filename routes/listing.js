const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/").get(wrapAsync(listingController.index)).post(
  upload.single("listing[image]"),
  validateListing,
  isLoggedIn("You must be logged in to create listing!"),

  wrapAsync(listingController.createListing)
);

//New Route
router.get(
  "/new",
  isLoggedIn("You must be logged in to create listing!"),
  listingController.renderNewForm
);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn("You must be logged in to update listing!"),
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn("You must be logged in to delete listing!"),
    isOwner,
    wrapAsync(listingController.destoryListing)
  );

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn("You must be logged in to edit listing!"),
  isOwner,
  wrapAsync(listingController.renderEditForm)
);
module.exports = router;
