import { useState, useCallback } from "react";
import { Vehicle } from "../models/vehicle";
import {
  saveVehicle,
  getAllVehicles,
  deleteVehicle,
  updateVehicle,
} from "../service/vehicleService";

export function useVehicle() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadVehicles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllVehicles();
      setVehicles(data);
    } catch (err) {
      setError("Error al cargar los vehículos");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addVehicle = useCallback(
    async (vehicle: Vehicle) => {
      if (vehicle.model.trim() === "") return;

      try {
        setError(null);
        await saveVehicle(vehicle);
        await loadVehicles();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al registrar el vehículo",
        );
        throw err;
      }
    },
    [loadVehicles],
  );

  const removeVehicle = useCallback(
    async (id: number) => {
      try {
        setError(null);
        await deleteVehicle(id);
        await loadVehicles();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al eliminar el vehículo",
        );
        throw err;
      }
    },
    [loadVehicles],
  );

  const modifyVehicle = useCallback(
    async (id: number, vehicle: Vehicle) => {
      try {
        setError(null);
        await updateVehicle(id, vehicle);
        await loadVehicles();
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error al actualizar el vehículo",
        );
        throw err;
      }
    },
    [loadVehicles],
  );

  return {
    vehicles,
    loading,
    error,
    addVehicle,
    removeVehicle,
    modifyVehicle,
    loadVehicles,
  };
}
