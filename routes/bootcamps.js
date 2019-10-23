const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Get all bootcamps"
    });
});

router.get("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Get single bootcamp"
    });
});

router.post("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Create new Bootcamp"
    });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
