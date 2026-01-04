import { useState } from "react";
import { emptyVehicle, Vehicle } from "../models/vehicle";

export const TOTAL_STEPS = 3;

export const useVehicleForm = () => {
  const [vehicle, setVehicle] = useState<Vehicle>(emptyVehicle);
  const [step, setStep] = useState(0);

  const goToStep = (target: number) => {
    setStep(target);
  };

  const updateField = (field: keyof Vehicle, value: string) => {
    setVehicle((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => goToStep(step + 1);
  const prevStep = () => goToStep(step - 1);
  const reset = () => {
    setVehicle(emptyVehicle);
    setStep(0);
  };

  return { vehicle, step, nextStep, prevStep, updateField, reset, setStep };
};
