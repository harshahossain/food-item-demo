"use client";
import React, { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import FoodList from "./components/FoodList";
import { getAllFoods } from "../../api";
import { useSelector } from "react-redux";

//npm run json-server
import { Provider } from "react-redux";
import { makeStore } from "./store/store";

export default function Home() {
  const store = makeStore();
  // const foods = useSelector((state: any) => state.food.foods);

  //const [foods, setFoods] = useState<any>([]);
  // const getFoods = async () => {
  //   const getFoods = await getAllFoods();
  //   setFoods(getFoods);
  // };
  // useEffect(() => {
  //   getFoods();
  // },[]);

  //console.log(foods);

  return (
    <Provider store={store}>
      <main className=" p-2 mx-auto text-center flex-auto">
        <div className="text-center p-2 flex-col gap-4 mx-3">
          <h1 className="text-2xl font-bold">Food Items</h1>
          <AddItem />
          <FoodList />
        </div>
      </main>
    </Provider>
  );
}
