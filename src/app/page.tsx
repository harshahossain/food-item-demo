"use client";
import React, { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import FoodList from "./components/FoodList";
import { getAllFoods } from "../../api";

//npm run json-server

export default function Home() {
  const [foods, setFoods] = useState<any>([]);
  const getFoods = async () => {
    const getFoods = await getAllFoods();
    setFoods(getFoods);
  };
  useEffect(() => {
    getFoods();
  });

  console.log(foods);
  return (
    <main className=" max-w-4xl mx-auto mt-4 text-center flex-auto">
      <div className="text-center flex-col gap-4 mx-3">
        <h1 className="text-2xl font-bold">Food Items</h1>
        <AddItem />
        <FoodList foods={foods} />
      </div>
    </main>
  );
}
