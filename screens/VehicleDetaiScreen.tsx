import { View, Text, StyleSheet } from "react-native";
import { FormInput } from "../components/FormInput";
import { FromButton } from "../components/FormButton";
import { Vehicle } from "../models/vehicle";

type Props = {
  vehicle: Vehicle;
  onChange: (field: keyof Vehicle, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export const VehicleDetaiScreen = ({
  vehicle,
  onChange,
  onNext,
  onBack,
}: Props) => {
  const isValid =
    vehicle.plate.trim() !== "" &&
    vehicle.ownerName.trim() !== "" &&
    vehicle.year !== 0 &&
    vehicle.fuelType.trim() !== "";

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Detalle del vehículo</Text>

      <FormInput
        label="Placa"
        value={vehicle.plate}
        onChangeText={(text) => onChange("plate", text)}
        placeholder="Ingrese la placa"
      />

      <FormInput
        label="Nombre del dueño"
        value={vehicle.ownerName}
        onChangeText={(text) => onChange("ownerName", text)}
        placeholder="Ingrese el nombre del dueño"
      />

      <FormInput
        label="Año"
        value={vehicle.year === 0 ? "" : String(vehicle.year)}
        onChangeText={(text) => onChange("year", text)}
        placeholder="Ingrese el año"
        keyboardType="numeric"
      />

      <FormInput
        label="Tipo de gasolina"
        value={vehicle.fuelType}
        onChangeText={(text) => onChange("fuelType", text)}
        placeholder="Ingrese el tipo de gasolina"
      />

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <FromButton
            label="Regresar"
            onPress={onBack}
            style={styles.backButton}
          />
          <FromButton
            label="Continuar"
            onPress={onNext}
            disabled={!isValid}
            style={[styles.continueButton, !isValid && styles.disabledButton]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4CAF50",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: "auto",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  backButton: {
    flex: 1,
    backgroundColor: "#c62323ff",
  },
  continueButton: {
    flex: 1,
  },
  disabledButton: {
    backgroundColor: "#ccc",
    opacity: 0.7,
  },
});
