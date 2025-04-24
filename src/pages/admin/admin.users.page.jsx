import UserTable from "./components/UserTable";

export default function AdminUsersPage() {
  return (
    <>
      <h2 className="mt-8 text-xl font-bold">Users Management</h2>
      <UserTable />
    </>
  )
}