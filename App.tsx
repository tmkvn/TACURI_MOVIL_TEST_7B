import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TOTAL_STEPS, useVehiculoForm } from './state/useVehiculoForm';
import { DatosVehiculoScreen } from './screens/DatosVehiculoScreen';

export default function App() {

  const { vehiculo, updateField, step, nextStep, prevStep, setStep, reset } = useVehiculoForm();

  const renderScreen = () => {
    if (step === 0) {
      return (
        <DatosVehiculoScreen
          vehiculo={vehiculo}
          onChange={updateField}
          onNext={nextStep}
        />
      );
    }
  };

  const getSubtitle = () => {
    if (step === 3) {
      return 'Vehiculos Registrados';
    }
    return `Paso ${step + 1} de ${TOTAL_STEPS}`;
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Registro de un vehículo</Text>
        {getSubtitle() && <Text style={styles.steps}>{getSubtitle()}</Text>}
        <View style={styles.card}>
          {renderScreen()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#158231',
  },
  steps: {
    fontSize: 14,
    color: '#f44336',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
