"use client";
import React, { FormEventHandler, useState } from "react";
import { IFood } from "../../../types/foods";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
// import { CiEdit } from "react-icons/ci";
import Modal from "./Modal";
import { deleteFood, editFood } from "../../../api";

interface FoodProps {
  food: IFood;
}

const FoodItem: React.FC<FoodProps> = ({ food }) => {
  const router = useRouter();
  // console.log(food.price);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  const [nameToEdit, setNameToEdit] = useState<string>(food.name);
  const [priceToEdit, setPriceToEdit] = useState<string>(food.price);
  const [imageToEdit, setImageToEdit] = useState<string>(food.image);
  const [descToEdit, setDescToEdit] = useState<string>(food.desc);

  const handleSubmitEditFood: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    //console.log(newFoodDesc);
    await editFood({
      id: food.id,
      name: nameToEdit,
      price: priceToEdit.toString(),
      desc: descToEdit,
      image: imageToEdit,
    });
    setNameToEdit("");
    setPriceToEdit("");
    setImageToEdit("");
    setDescToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteFood = async (id: string) => {
    await deleteFood(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  //
  return (
    <div>
      <Card
        key={food.id}
        sx={{ maxWidth: 345 }}
        className="p-2 m-1 bg-gradient-to-b from-yellow-300 to-red-400"
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
          <Button
            size="small"
            className="text-green-800"
            onClick={() => setOpenModalEdit(true)}
          >
            Edit
          </Button>
          <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditFood}>
              <h3 className="font-bold text-lg text-blue-700">
                Edit Food Item
              </h3>
              <div>
                <div>
                  <label htmlFor="name" className=" text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Food's Name Here"
                    className="input w-full max-w-xs mx-2 text-white"
                    value={nameToEdit}
                    onChange={(e) => setNameToEdit(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="price" className=" text-white">
                    Price
                  </label>
                  <input
                    id="price"
                    type="text"
                    placeholder="Enter Price Here"
                    className="input w-full max-w-xs mx-2 text-white"
                    value={priceToEdit}
                    onChange={(e) => setPriceToEdit(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="image" className=" text-white">
                    Image
                  </label>
                  <input
                    id="image"
                    type="text"
                    placeholder="Image Link Here"
                    className="input w-full max-w-xs mx-2 text-white"
                    value={imageToEdit}
                    onChange={(e) => setImageToEdit(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="desc" className=" text-white">
                    Desc
                  </label>
                  <input
                    id="desc"
                    type="text"
                    placeholder="Enter Description Here"
                    className="input w-full max-w-xs mx-2 text-white"
                    value={descToEdit}
                    onChange={(e) => setDescToEdit(e.target.value)}
                  />
                </div>

                <div className="my-3">
                  <button
                    type="submit"
                    className="btn bg-slate-200 text-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal>
          <Button
            size="small"
            className="text-red-800"
            onClick={() => setOpenModalDelete(true)}
          >
            Delete
          </Button>
          <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <h3 className="font-bold text-lg text-red-600">
              Are you sure, you want to delete this Food Item?
            </h3>
            <div className="modal-action">
              <button
                onClick={() => handleDeleteFood(food.id)}
                className="btn text-red-600  bg-gray-600"
              >
                Yes
              </button>
              <button
                onClick={() => setOpenModalDelete(false)}
                className="btn text-green-600 bg-gray-600"
              >
                No
              </button>
            </div>
          </Modal>
        </CardActions>
      </Card>
    </div>
  );
};

export default FoodItem;
