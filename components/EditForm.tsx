"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { useRouter, usePathname } from "next/navigation";

function EditForm({ params }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Extract ID from the current pathname
  console.log("insdei edit form", params?.slug);
  useEffect(() => {
    // Use the id here as needed
    console.log("ID: ", params.slug);
    async function get() {
      const res = await fetch(
        "http://localhost:3000/api/topics/" + params.slug,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      console.log(data.topic);
      setTitle(data.topic.title);
      setDescription(data.topic.description);
    }

    get();
  }, [params.slug]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/topics/${params.slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/");
        router.refresh();
      });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 flex flex-col gap-2">
      <Input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="p-2"
        value={title}
      />
      <Input
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <Button className="w-28 bg-green-600">Edit Todo</Button>
    </form>
  );
}

export default EditForm;
