export type Vehicle = {
  id?: number;
  model: string;
  brand: string;
  plate: string;
  ownerName: string;
  year: number;
  fuelType: string;
};

export const emptyVehicle: Vehicle = {
  id: undefined,
  model: "",
  brand: "",
  plate: "",
  ownerName: "",
  year: 0,
  fuelType: "",
};
