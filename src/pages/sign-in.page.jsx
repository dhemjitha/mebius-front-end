import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/use-auth";

const SignInPage = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      login();
    }
  }, [isAuthenticated, navigate, login]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>Redirecting to login...</div>
    </div>
  );
};

export default SignInPage;
