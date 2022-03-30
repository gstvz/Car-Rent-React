import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCarsData } from "@store";

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

  const handleTryAgain = () => {
    dispatch(getCarsData());
  };

  return { handleLogoClick, handleBackToCatalog, handleActionButton, handleTryAgain };
}