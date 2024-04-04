import Link from "next/link";
import React from "react";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import DeleteButton from "./DeleteButton";

const getToDos = async () => {
  const res = await fetch("http://localhost:3000/api/topics", {
    cache: "no-store",
  });
  return res.json();
};

async function ToDoSList() {
  const { todos }: any = await getToDos();
  return (
    <main className="p-4 border my-3 bg-slate-400 rounded-lg">
      {
        //@ts-ignore
        todos.map((todo): any => (
          <div
            key={todo._id}
            className="flex justify-between p-2 m-3 items-center gap-2 border bg-slate-500"
          >
            <div className="text-white">
              <h1 className="font-bold uppercase">{todo.title}</h1>
              <p>{todo.description}</p>
            </div>

            <div className="flex gap-2 items-center">
              <Link href={`/editTodo/${todo._id}`}>
                <MdEdit size={24} />
              </Link>
              <DeleteButton id={todo._id} />
            </div>
          </div>
        ))
      }
    </main>
  );
}

export default ToDoSList;
