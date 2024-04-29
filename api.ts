import { IFood } from "./types/foods";

const baseUrl = "http://localhost:3001";

export const getAllFoods = async (): Promise<IFood[]> => {
  const res = await fetch(`${baseUrl}/foods`, { cache: "no-store" });
  const foodlist = await res.json();
  return foodlist;
};

export const addFood = async (food: [IFood]): Promise<IFood> => {
  const res = await fetch(`${baseUrl}/foods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  const newFood = await res.json();
  return newFood;
};
