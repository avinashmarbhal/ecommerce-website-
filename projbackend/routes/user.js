const express = require("express");
const router = express.Router();

const { getUserById, getUser, updateUser,userPurchaseList} = require("../controllers/user");//add getAllUsers in this 
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { update } = require("lodash");


router.param("userId", getUserById,updateUser);
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
//for geting all users
    //router.get("/users",getAllUsers);

router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser);
router.get("/orders/user/:userId",isSignedIn,isAuthenticated,userPurchaseList);


module.exports = router;

  