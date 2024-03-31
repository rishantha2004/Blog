const express = require("express");
const router = express.Router();
const Post = require("../models/Post")

router.get("/", async (req, res) => {

    const locals = {

        title: "Daily Routine",
        message: "Welcome"
    }

    try{
        const data = await Post.find();
        res.render('index', {locals, data});

    }catch(error){
        console.log("hrror");
    }
    
  
})






function insertPostData(){

    Post.insertMany([{
        title: "Node Js",
        body: "Hi"
    }
]);
}

insertPostData();


router.get("/post/:id", async (req, res) => {

   
    try{

        const locals = {

            title: "Daily Routine",
            message: "Welcome"
        }
    
        let slug = req.params.id;
        const data = await Post.findById( {_id: slug} );
        res.render("post", {locals, data});

    }catch(error){
        console.log("hrror");
    }
    
  
})

module.exports = router;