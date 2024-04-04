"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify Content-Type
        },
        body: JSON.stringify({ title, description: desc }),
      });
      if (!res.ok) {
        // Check if response is successful
        throw new Error("Failed to add todo");
      }
      router.push("/");
      router.refresh(); // Redirect after successful submission
    } catch (error) {
      console.error("Error adding todo:", error); // Log any errors
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          placeholder="Title"
          className="p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Button type="submit" className="w-28 bg-green-600">
          Add Todo
        </Button>{" "}
      </form>
    </div>
  );
}

export default AddTodo;
