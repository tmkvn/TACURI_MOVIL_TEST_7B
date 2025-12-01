import { useState } from "react";
import { Vehiculo } from "../models/vehiculo";

export function useVehiculo() {

  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);

  const addVehiculo = (vehiculo: Vehiculo) => {
    if (vehiculo.modelo.trim() === "") return;
    const newVehiculo: Vehiculo = { ...vehiculo };
    setVehiculos((prev) => [...prev, newVehiculo]);
  };


  return { vehiculos, addVehiculo};
}