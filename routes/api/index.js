const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google")

// Book routes
router.use("/books", bookRoutes);

router.use("/google", googleRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../clinet/build/index.html"));
})

module.exports = router;