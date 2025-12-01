import { View, Text, StyleSheet } from 'react-native';
import { FormInput } from '../components/FormInput';
import { FromButton } from '../components/FormButton';
import { Vehiculo } from '../models/vehiculo';

type Props = {
  vehiculo: Vehiculo; onChange: (field: keyof Vehiculo, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export const DetalleVehiculoScreen = ({ vehiculo, onChange, onNext, onBack }: Props) => {

  const isValid = 
    vehiculo.placa.trim() !== '' &&
    vehiculo.nombreDuenio.trim() !== '' &&
    vehiculo.anio !== 0 &&
    vehiculo.tipoGasolina.trim() !== '';

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Detalle del vehículo</Text>
      
      <FormInput
        label="Placa"
        value={vehiculo.placa}
        onChangeText={(text) => onChange('placa', text)}
        placeholder="Ingrese la placa"
      />
      
      <FormInput
        label="Nombre del dueño"
        value={vehiculo.nombreDuenio}
        onChangeText={(text) => onChange('nombreDuenio', text)}
        placeholder="Ingrese el nombre del dueño"
      />
      
      <FormInput
        label="Año"
        value={vehiculo.anio === 0 ? '' : String(vehiculo.anio)}
        onChangeText={(text) => onChange('anio', text)}
        placeholder="Ingrese el año"
        keyboardType="numeric"
      />
      
      <FormInput
        label="Tipo de gasolina"
        value={vehiculo.tipoGasolina}
        onChangeText={(text) => onChange('tipoGasolina', text)}
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
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 'auto',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  backButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
  continueButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
  disabledButton: {
    backgroundColor: '#ccc',
    opacity: 0.7,
  },
});
