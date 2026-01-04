import { useState } from "react";
import { Vehicle } from "../models/vehicle";

export function useVehicle() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const addVehicle = (vehicle: Vehicle) => {
    if (vehicle.model.trim() === "") return;
    const newVehicle: Vehicle = { ...vehicle };
    setVehicles((prev) => [...prev, newVehicle]);
  };

  return { vehicles, addVehicle };
}
