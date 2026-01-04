import { Vehicle } from "../models/vehicle";

const BASE_URL = "http://192.168.0.108:8080/v1/vehicles";

export const saveVehicle = async (
  vehicle: Vehicle,
): Promise<Vehicle | undefined> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehicle),
  });

  if (response.status !== 201) {
    const errorMessage = "No se pudo registrar el vehículo";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  try {
    return await response.json();
  } catch {
    return undefined;
  }
};

export const getAllVehicles = async (): Promise<Vehicle[]> => {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    const errorMessage = "No se pudieron obtener los vehículos";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  try {
    return await response.json();
  } catch {
    return [];
  }
};

export const getVehicleById = async (
  id: number,
): Promise<Vehicle | undefined> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 404) {
    return undefined;
  }

  if (response.status !== 200) {
    const errorMessage = "No se pudo obtener el vehículo";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  try {
    return await response.json();
  } catch {
    return undefined;
  }
};

export const updateVehicle = async (
  id: number,
  vehicle: Vehicle,
): Promise<Vehicle | undefined> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehicle),
  });

  if (response.status !== 200) {
    const errorMessage = "No se pudo actualizar el vehículo";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  try {
    return await response.json();
  } catch {
    return undefined;
  }
};

export const deleteVehicle = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 204) {
    const errorMessage = "No se pudo eliminar el vehículo";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
};
