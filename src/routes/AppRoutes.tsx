import { Route, Routes } from "react-router-dom"
import { Car, Home } from "@pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Home />}
      />
      <Route 
        path="car/:carId"
        element={<Car />}
      />
    </Routes>
  )
}
