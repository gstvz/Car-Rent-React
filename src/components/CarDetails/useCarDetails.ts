import { useNavigate } from "react-router-dom";

export const useCarDetails = () => {
  const navigate = useNavigate();

  const handleBackToCatalog = () => {
    navigate(-1);
  };

  const handleBookNow = () => {
    return;
  };

  return [handleBackToCatalog, handleBookNow];
};
