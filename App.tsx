import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TOTAL_STEPS, useVehicleForm } from "./state/useVehicleForm";
import { useVehicle } from "./state/useVehicle";
import { VehicleInfoScreen } from "./screens/VehicleInfoScreen";
import { VehicleDetaiScreen } from "./screens/VehicleDetaiScreen";
import { SummaryScreen } from "./screens/SummaryScreen";
import { RegisteredVehiclesScreen } from "./screens/RegisteredVehiclesScreen";

export default function App() {
  const { vehicle, updateField, step, nextStep, prevStep, setStep, reset } =
    useVehicleForm();
  const { vehicles, addVehicle } = useVehicle();

  const handleRegistrar = () => {
    addVehicle(vehicle);
    setStep(3);
  };

  const handleRegistrarOtro = () => {
    reset();
  };

  const renderScreen = () => {
    if (step === 0) {
      return (
        <VehicleInfoScreen
          vehicle={vehicle}
          onChange={updateField}
          onNext={nextStep}
        />
      );
    }
    if (step === 1) {
      return (
        <VehicleDetaiScreen
          vehicle={vehicle}
          onChange={updateField}
          onNext={nextStep}
          onBack={prevStep}
        />
      );
    }
    if (step === 2) {
      return (
        <SummaryScreen
          vehicle={vehicle}
          onBack={prevStep}
          onRegistrar={handleRegistrar}
        />
      );
    }

    return (
      <RegisteredVehiclesScreen
        vehicles={vehicles}
        onRegistrarOtro={handleRegistrarOtro}
      />
    );
  };

  const getSubtitle = () => {
    if (step === 3) {
      return "Vehicles Registrados";
    }
    return `Paso ${step + 1} de ${TOTAL_STEPS}`;
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Registro de un vehículo</Text>
        {getSubtitle() && <Text style={styles.steps}>{getSubtitle()}</Text>}
        <View style={styles.card}>{renderScreen()}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#158231",
  },
  steps: {
    fontSize: 14,
    color: "#f44336",
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});
