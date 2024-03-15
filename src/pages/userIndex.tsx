import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function loader() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  return { users };
}

const UserIndex = () => {
  const { users } = useLoaderData();
  console.log(users);

  const columns: ColumnDef<{ header: string; accessorKey: string }>[] = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Address",
      accessorKey: "address.city",
    },
  ];
  const table = useReactTable({
    columns,
    data: users,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table);

  return (
    <>
      <ul>
        {users.map((user: User) => (
          <li key={user.id} className="py-2">
            <Link
              to={`${user.id}`}
              className="py-1 underline hover:text-blue-400"
            >
              {user.id}: {user.name}
            </Link>
          </li>
        ))}
      </ul>
      <table className="w-full">
        <thead className="border-b-2 border-stone-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="p-2 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b-2 border-stone-400">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserIndex;
