import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return { handleLogoClick };
};
