module.exports.isLoggedIn = (message = "You must be logged in!") => {
  return (req, res, next) => {
    if (!req.isAuthenticated()) {
      req.flash("error", message);
      return res.redirect("/login");
    }
    next();
  };
};
