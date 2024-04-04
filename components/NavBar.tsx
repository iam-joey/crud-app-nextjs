import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="p-2 bg-slate-300 rounded-lg">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          {" "}
          <div className="text-xl font-bold">Todo Lists</div>
        </Link>
        <div>
          <Link href={"/addTodo"}>
            <Button className="bg-blue-600">Add Todo</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
