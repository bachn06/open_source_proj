const express = require("express");
const router = express.Router();
const {
    banUserById,
    banUsers,
    activatedUser,
    getUsers,
} = require("../controllers/adminController");

const { checkAdminPermission } = require("../middleware/checkPermission");
const { verifyAcessToken } = require("../middleware/verifyToken");

// Lay danh sach user
router.get("/user/", verifyAcessToken, checkAdminPermission, getUsers);

// Khoa tai khoan nguoi dung
router.delete(
    "/user/delete/:id",
    verifyAcessToken,
    checkAdminPermission,
    banUserById
);

// Khoa tai khoan nhieu nguoi dung
router.delete(
    "/user/delete/",
    verifyAcessToken,
    checkAdminPermission,
    banUsers
);

// Mo khoa tai khoan nguoi dung
router.put(
    "/user/activated/:id",
    verifyAcessToken,
    checkAdminPermission,
    activatedUser
);
module.exports = router;
