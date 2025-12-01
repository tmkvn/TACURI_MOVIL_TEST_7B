import { useState } from 'react'
import { emptyVehiculo, Vehiculo } from '../models/vehiculo'

export const TOTAL_STEPS = 3;

export const useVehiculoForm = () => {

  const [vehiculo, setVehiculo] = useState<Vehiculo>(emptyVehiculo);
  const [step, setStep] = useState(0);

  const goToStep = (target: number) => {
    setStep(target);
  };

  const updateField = (field: keyof Vehiculo, value: string) => {
    setVehiculo(prev => ({
      ...prev,
      [field]: value
    }));
  }

  const nextStep = () => goToStep(step + 1);
  const reset = () => {
    setVehiculo(emptyVehiculo);
    setStep(0);
  }

  return { vehiculo, step, nextStep, updateField, reset };
}
