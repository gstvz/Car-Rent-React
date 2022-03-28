import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const renderComponent = () => {
    setIsHovering(!isHovering);
  };

  const handleCardClick = (id: number) => {
    navigate(`car/${id}`);
  };

  return { isHovering, renderComponent, handleCardClick };
};
