const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
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
    ],
  });
});

app.post("/products", (req, res) => {
  res.send("상품이 등록되었습니다.");
});

app.listen(port, () => {
  console.log("범마켓 서버가 돌아가고 있습니다");
});
