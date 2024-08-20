import express from "express";
import bodyParser from "body-parser";
import yts from "yt-search";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.post("/search", async (req,res)=>{
    const search = req.body.search;
    const r = await yts( search );
    const videos = r.videos.slice( 0, 10 );
    let vidlist = [];
    let i=0;
    videos.forEach( function ( v ) {
        vidlist.push({"ind": i, "title": v.title, "vidid": v.videoId});
        i++;
    });
    
    res.render("index.ejs", { vidlist: vidlist });
});

app.post("/stream", async(req,res)=>{
    res.render("index.ejs", { videolink: req.body.video });
});



app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
});