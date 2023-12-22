import axios from "axios";
import express from "express";

const app=express();
const port=3000;
const config={
    params: {
        q: '-27.36,-55.89'
    },
    headers: {
        'X-RapidAPI-Key': '03c7c135d3msh66da49927685768p1fc252jsn88d473a7222d',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
}
app.use(express.static("public"));

app.get("/",async(req,res)=>{
    console.log("arrancamo");
    try {
        const response= await axios.get("https://weatherapi-com.p.rapidapi.com/current.json",config);
        console.log(response.data);
        res.render("index.ejs",{data:response.data.current,location:response.data.location});
        console.log(response.location);
    } catch (error) {
        console.error("Failed to make request:", error.message);
    }
})
app.post("/en",async(req,res)=>{
    try {
        const response= await axios.get("https://weatherapi-com.p.rapidapi.com/current.json",config);
        console.log(response.data);
        res.render("indexen.ejs",{data:response.data.current,location:response.data.location});
        console.log(response.location);
    } catch (error) {
        console.error("Failed to make request:", error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });