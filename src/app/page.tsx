import React from "react";
import { Button } from "@mui/material";
import AddItem from "./components/AddItem";
import FoodList from "./components/FoodList";
import { getAllFoods } from "../../api";

//npm run json-server

export default async function Home() {
  const foods = await getAllFoods();
  console.log(foods);
  return (
    <main className=" max-w-4xl mx-auto mt-4 text-center flex-auto">
      <div className="text-center my-5 flex-col gap-4 mx-3">
        <h1 className="text-2xl font-bold">Food Items</h1>
        <AddItem />
        <FoodList foods={foods} />
      </div>
    </main>
  );
}
