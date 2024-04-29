import React from "react";
import { IFood } from "../../../types/foods";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface FoodProps {
  food: IFood;
}

const FoodItem: React.FC<FoodProps> = ({ food }) => {
  console.log(food.price);
  return (
    <div>
      <Card
        key={food.id}
        sx={{ maxWidth: 345 }}
        className="p-2 m-1 bg-gradient-to-b from-yellow-500 to-red-600"
      >
        <CardMedia sx={{ height: 140 }} image={food.image} title={food.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {food.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {food.desc}
          </Typography>
          <div className="text-center font-bold">{food.price}$</div>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FoodItem;
