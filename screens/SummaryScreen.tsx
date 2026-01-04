import { View, Text, StyleSheet } from "react-native";
import { FromButton } from "../components/FormButton";
import { Vehicle } from "../models/vehicle";

type Props = {
  vehicle: Vehicle;
  onBack: () => void;
  onRegistrar: () => void;
};

export const SummaryScreen = ({ vehicle, onBack, onRegistrar }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Resumen de registro</Text>

      <View style={styles.summaryContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Marca:</Text>
          <Text style={styles.value}>{vehicle.brand}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Modelo:</Text>
          <Text style={styles.value}>{vehicle.model}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Placa:</Text>
          <Text style={styles.value}>{vehicle.plate}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Nombre del dueño:</Text>
          <Text style={styles.value}>{vehicle.ownerName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Año:</Text>
          <Text style={styles.value}>{vehicle.year}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tipo de gasolina:</Text>
          <Text style={styles.value}>{vehicle.fuelType}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <FromButton
            label="Regresar"
            onPress={onBack}
            style={styles.backButton}
          />
          <FromButton
            label="Registrar"
            onPress={onRegistrar}
            style={styles.registerButton}
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
  summaryContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  value: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
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
    backgroundColor: "#f44336",
  },
  registerButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
  },
});
