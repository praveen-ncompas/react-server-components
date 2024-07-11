"use client";

import { expensiveFunction } from "@/expensiveFunction";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    expensiveFunction();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log("Client");

  return (
    <main>
      <h1 className="text-2xl font-bold">This runs on the client...</h1>
      <ul>
        {
          users && users.map((user:any)=>
          <li key={user?.id}>{user?.name}</li>
        )
        }
      </ul>
    </main>
  );
}
