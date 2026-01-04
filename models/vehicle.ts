export type Vehicle = {
  model: string;
  brand: string;
  plate: string;
  ownerName: string;
  year: number;
  fuelType: string;
};

export const emptyVehicle: Vehicle = {
  model: "",
  brand: "",
  plate: "",
  ownerName: "",
  year: 0,
  fuelType: "",
};
