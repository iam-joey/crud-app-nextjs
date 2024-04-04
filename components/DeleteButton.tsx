"use client";
import React from "react";
import { MdDelete } from "react-icons/md";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function DeleteButton({ id }: any) {
  const router = useRouter();
  const handleDelete = async () => {
    console.log("Delete");
    const data = await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  };

  return (
    <Button type="button" onClick={handleDelete}>
      <MdDelete className="hover:cursor-pointer" size={24} />
    </Button>
  );
}

export default DeleteButton;
