"use client";
import { Button } from "@mui/material";
import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { addFood } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function AddItem() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  //const [newFoodItem, setNewFoodItem] = useState<[]>([]);
  const [newFoodName, setNewFoodName] = useState<string>("");
  const [newFoodPrice, setNewFoodPrice] = useState<string>("");
  const [newFoodImage, setNewFoodImage] = useState<string>("");
  const [newFoodDesc, setNewFoodDesc] = useState<string>("");

  const handleSubmitNewFood: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // console.log(newFoodDesc);
    await addFood({
      id: uuidv4(),
      name: newFoodName,
      price: newFoodPrice.toString(),
      desc: newFoodDesc,
      image: newFoodImage,
    });
    setNewFoodPrice("");
    setNewFoodDesc("");
    setNewFoodName("");
    setNewFoodImage("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <Button
        onClick={() => setModalOpen(true)}
        variant="contained"
        className="btn btn-primary w-full"
      >
        Add a new Food item <AiOutlinePlus className="ml-2" size={18} />
      </Button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewFood}>
          <h3 className="font-bold text-lg">Add a new Food Item</h3>
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Food's Name Here"
                className="input w-full max-w-xs mx-2"
                value={newFoodName}
                onChange={(e) => setNewFoodName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter Price Here"
                className="input w-full max-w-xs mx-2"
                value={newFoodPrice}
                onChange={(e) => setNewFoodPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Image Link Here"
                className="input w-full max-w-xs mx-2"
                value={newFoodImage}
                onChange={(e) => setNewFoodImage(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="desc">Desc</label>
              <input
                id="desc"
                type="text"
                placeholder="Enter Description Here"
                className="input w-full max-w-xs mx-2"
                value={newFoodDesc}
                onChange={(e) => setNewFoodDesc(e.target.value)}
              />
            </div>

            <div className="my-3">
              <button type="submit" className="btn bg-slate-500 text-blue-900">
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
