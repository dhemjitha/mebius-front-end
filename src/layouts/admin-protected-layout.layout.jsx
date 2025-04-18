import { Outlet } from "react-router";

// Simple AdminProtected layout that doesn't actually verify admin status
// In a real app, this would check for admin role
const AdminProtected = () => {
  return <Outlet />;
};

export default AdminProtected;
