import React from "react";
import { IFood } from "../../../types/foods";
import FoodItem from "./FoodItem";
import { useSelector } from "react-redux";
//npm run json-server

// interface FoodListProps {
//   foods: IFood[];
// }

const FoodList = () => {
  const foods = useSelector((state: any) => state.food.foodState);
  return (
    <div className="flex w-full flex-wrap">
      {foods.map((food: IFood) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
};
export default FoodList;
