import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

class Kisi{
    constructor(name,email,text){
        this.name = name;
        this.email = email;
        this.text = text;
    }
}
const kisiler = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const {name,email,text} = req.body;
    const yeniKisi = new Kisi(name,email,text);
    kisiler.push(yeniKisi);
    res.render("posts.ejs", {kisiler: kisiler, name: yeniKisi.name, email: yeniKisi.email, text: yeniKisi.text});
});
app.get("/kisiler", (req, res) => {
    res.json(kisiler);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

