// Imports
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { Post, Twur } from "./models/models.ts";
import cors from "cors"

// Express setup
const PORT = process.env.PORT || 3000;
const app: Express = express();

// Connect to mongodb
const dbURI = "mongodb+srv://charlesrello:9W$t8Z3M7Vn6rmq@twuring.bxvwtnp.mongodb.net/twuring?retryWrites=true&w=majority"
mongoose.connect(dbURI)
  .then(() => app.listen(3000))
  .then(() => console.log(`Server is listening on port ${PORT}`))
  .catch((err) => console.error(err.message))

// Middleware
app.options("*", cors())
app.use(cors())

app.use(express.static("public"))
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS")
  next();
});

// Routes

// POST
app.post("/posts", (req: Request, res: Response) => {
  const post = new Post(req.body)

  post.save()
    .then(result => res.send(result))
    .catch(err => console.error(err.message))
})

app.post("/twurs", (req: Request, res: Response) => {
  const post = new Twur(req.body)

  post.save()
    .then(result => res.send(result))
    .catch(err => console.error(err.message))
})

// GET
app.get("/posts", (_, res: Response) => {
  Post.find()
    .then(result => res.send(result))
    .catch(err => console.error(err.message))
})

app.get("/posts/:id", (req: Request, res: Response) => {
  const id = req.params.id
  Post.findById(id)
    .then(result => res.send(result))
    .catch(err => console.error(err.message))
})

app.get("/twurs", (_, res: Response) => {
  Twur.find()
    .then(result => res.send(result))
    .catch(err => console.error(err.message))
})

app.get("/twurs/:id", (req: Request, res: Response) => {
  const id = req.params.id
  Twur.findById(id)
    .then(result => res.send(result))
    .catch(err => console.error(err.message))
})

// PUT
app.put("/twurs/:id", async(req: Request, res: Response) => {
  const id = req.params.id
  const { profile_pic } = req.body
  console.log(profile_pic)
  Twur.findOneAndUpdate({ _id: id }, { profile_pic }, {
    new: true
  })
    .then(result => res.send(result))
    .catch(err => console.error(err.message))
})
