import React from "react";
import { IFood } from "../../../types/foods";
import FoodItem from "./FoodItem";
//npm run json-server

interface FoodListProps {
  foods: IFood[];
}

const FoodList: React.FC<FoodListProps> = ({ foods }) => {
  return (
    <div className="flex py-4 flex-wrap justify-between">
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
};
export default FoodList;
