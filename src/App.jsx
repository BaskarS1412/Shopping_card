import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import NaveBar from "./component/NaveBar";
import Header from "./component/Header";
import Footer from "./component/Footer";
import CardCount from "./component/CardCount";

function App() {
  const [cardCount, setCardValue] = useState(0);

  let shoppingData = [
    {
      id: 1,
      img: "400*350",
      productName: "Fancy Product",
      price: "$40.00 - $80.00 ",
      buttonText: "View option",
    },
    {
      id: 2,
      img: "400*350",
      productName: "Special Itemt",
      markPrice: "$20.00 ",
      price: " $18.00",
      buttonText: "Add to cart",
    },
    {
      id: 3,
      img: "400*350",
      productName: "Sale Itemt",
      markPrice: "$50.00 ",
      price: "$25.00 ",
      buttonText: "Add to cart",
    },
    {
      id: 4,
      img: "400*350",
      productName: "Popular Item",
      markPrice: "",
      price: "$40.00 ",
      buttonText: "Add to cart",
    },
    {
      id: 5,
      img: "400*350",
      productName: "Sale Itemt",
      markPrice: "$50.00 ",
      price: "$25.00 ",
      buttonText: "Add to cart",
    },
    {
      id: 6,
      img: "400*350",
      productName: "Fancy Product",
      markPrice: "",
      price: " $120.00 - $280.00",
      buttonText: "View option",
    },
    {
      id: 7,
      img: "400*350",
      productName: "Special Itemt",
      markPrice: "$20.00",
      price: " $18.00",
      buttonText: "Add to cart",
    },
    {
      id: 8,
      img: "400*350",
      productName: "Popular Item",
      markPrice: "",
      price: "$40.00 ",
      buttonText: "Add to cart",
    },
  ];

  return (
    <>
      <NaveBar setCardValue={setCardValue} cardCount={cardCount} />
      <Header />
      <CardCount
        setCardValue={setCardValue}
        cardCount={cardCount}
        shoppingData={shoppingData}
      />
      <Footer />
    </>
  );
}

export default App;
