import { useCars } from "@shared/hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useCarDetails = () => {
  const navigate = useNavigate();
  const { error, handleTryAgain } = useCars();

  const handleBackToCatalog = () => {
    navigate(-1);
  };

  const handleBookNow = () => {
    toast.warn("The booking functionality is not available yet!");
    return;
  };

  return { error, handleTryAgain, handleBackToCatalog, handleBookNow };
};
