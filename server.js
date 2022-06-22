const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const query = req.query;
  console.log("QUERY : ", query);
  res.send({
    products: [
      {
        id: 1,
        name: "NFT마켓",
        price: 5,
        seller: "박성범",
        imageUrl: "images/products/nftmarket.png",
      },
      {
        id: 2,
        name: "토이 프로젝트",
        price: 5,
        seller: "김성훈",
        imageUrl: "images/products/toyproject.png",
      },
      {
        id: 3,
        name: "미니 프로젝트",
        price: 5,
        seller: "류재준",
        imageUrl: "images/products/nftmarket.png",
      },
      {
        id: 4,
        name: "미니 프로젝트",
        price: 5,
        seller: "류재준",
        imageUrl: "images/products/nftmarket.png",
      },
      {
        id: 5,
        name: "미니 프로젝트",
        price: 5,
        seller: "류재준",
        imageUrl: "images/products/nftmarket.png",
      },
      {
        id: 6,
        name: "토이 프로젝트",
        price: 5,
        seller: "김성훈",
        imageUrl: "images/products/toyproject.png",
      },
      {
        id: 7,
        name: "토이 프로젝트",
        price: 5,
        seller: "김성훈",
        imageUrl: "images/products/toyproject.png",
      },
      {
        id: 8,
        name: "토이 프로젝트",
        price: 5,
        seller: "김성훈",
        imageUrl: "images/products/toyproject.png",
      },
      {
        id: 9,
        name: "토이 프로젝트",
        price: 5,
        seller: "김성훈",
        imageUrl: "images/products/toyproject.png",
      },
      {
        id: 10,
        name: "토이 프로젝트",
        price: 5,
        seller: "김성훈",
        imageUrl: "images/products/toyproject.png",
      },
    ],
  });
});

app.post("/products", (req, res) => {
  const body = req.body;
  res.send({
    // body: body
    body,
  });
});

app.get("/products/:id/events/:eventId", (req, res) => {
  const params = req.params;
  const { id, eventId } = params;
  res.send(`id는 ${id}와 ${eventId}입니다.`);
});

app.listen(port, () => {
  console.log("범마켓 서버가 돌아가고 있습니다");
});
