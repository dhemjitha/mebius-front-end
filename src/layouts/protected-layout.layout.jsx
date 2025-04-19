import { Outlet } from "react-router";

// Simple Protected layout that doesn't actually verify authentication
// In a real app, this would check authentication status
const ProtectedLayout = () => {
  return <Outlet />;
};

export default ProtectedLayout;
