const express = require("express");
const router = express.Router();
const Post = require("../models/Post")


router.get("admin", async (req, res) => {

   
    try{

        const locals = {

            title: "Admin",
            message: "Welcome"
        }
    
       res.render("admin", {locals});

    }catch(error){
        console.log("hrror");
    }
    
  
})

module.exports = router;