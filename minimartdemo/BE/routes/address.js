const express = require("express");
const router = express.Router();
const { verifyAcessToken } = require("../middleware/verifyToken");

const {
    createAddress,
    getAddress,
    updateAddressInfor,
    deleteAddress,
} = require("../controllers/addressController");

// Chinh sua dia chi
router.put("/:addressId", verifyAcessToken, updateAddressInfor);

// Xoa dia chi
router.delete("/:addressId", verifyAcessToken, deleteAddress);

// Tao dia chi moi
router.post("/", verifyAcessToken, createAddress);

// Lay danh sach dia chi
router.get("/", verifyAcessToken, getAddress);

module.exports = router;
