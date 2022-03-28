import { useState } from "react";

export const useHover = () => {
  const [isHovering, setIsHovering] = useState(false);

  const renderComponent = () => {
    setIsHovering(!isHovering);
  }

  return { isHovering, renderComponent };
};