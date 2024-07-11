import ClientComponent from "@/ClientComponent";
import ServerComponent from "@/ServerComponent";
import { expensiveFunction } from "@/expensiveFunction";

export default async function ServerPage() {
 const users = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => data);
  expensiveFunction();
  console.log("Server");
  return (
    <main>
      <h1 className="text-2xl font-bold">This runs on the server...</h1>
      <ul>
        {
          users && users.map((user:any)=>
          <li key={user?.id}>{user?.name}</li>
        )
        }
      </ul>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}