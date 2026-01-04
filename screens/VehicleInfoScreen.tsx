import { View, Text, StyleSheet } from "react-native";
import { FormInput } from "../components/FormInput";
import { FromButton } from "../components/FormButton";
import { Vehicle } from "../models/vehicle";

type Props = {
  vehicle: Vehicle;
  onChange: (field: keyof Vehicle, value: string) => void;
  onNext: () => void;
};

export const VehicleInfoScreen = ({
  vehicle: vehiculo,
  onChange,
  onNext,
}: Props) => {
  const isValid = vehiculo.brand.trim() !== "" && vehiculo.model.trim() !== "";

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Datos del vehículo</Text>

      <FormInput
        label="Marca"
        value={vehiculo.brand}
        onChangeText={(text) => onChange("brand", text)}
        placeholder="Ingrese la marca"
      />

      <FormInput
        label="Modelo"
        value={vehiculo.model}
        onChangeText={(text) => onChange("model", text)}
        placeholder="Ingrese el modelo"
      />

      <View style={styles.buttonContainer}>
        <FromButton
          label="Continuar"
          onPress={onNext}
          disabled={!isValid}
          style={!isValid && styles.disabledButton}
        />
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
    gap: 12,
  },
  disabledButton: {
    backgroundColor: "#ccc",
    opacity: 0.7,
  },
});
