import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCarsData } from "@store";
import { Car } from "@shared/types";

export const useButtons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleBackToCatalog = () => {
    navigate(-1);
  };

  const handleActionButton = () => {
    toast.warn("This functionality is not available yet!");
    return;
  };

  const handleTryAgain = (car?: Car | null, cars?: Car[]) => {
    dispatch(getCarsData());
    
    if(cars?.length !== 0 && !car?.colors) {
      toast.warn("This car is not available!");
    }
  };

  return { handleLogoClick, handleBackToCatalog, handleActionButton, handleTryAgain };
}