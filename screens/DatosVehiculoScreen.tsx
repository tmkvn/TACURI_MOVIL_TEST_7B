import { View, Text, StyleSheet } from 'react-native';
import { FormInput } from '../components/FormInput';
import { FromButton } from '../components/FormButton';
import { Vehiculo } from '../models/vehiculo';

type Props = {
  vehiculo: Vehiculo;
  onChange: (field: keyof Vehiculo, value: string) => void;
  onNext: () => void;
};

export const DatosVehiculoScreen = ({ vehiculo, onChange, onNext }: Props) => {

  const isValid = vehiculo.marca.trim() !== '' && vehiculo.modelo.trim() !== '';

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Datos del vehículo</Text>
      
      <FormInput
        label="Marca"
        value={vehiculo.marca}
        onChangeText={(text) => onChange('marca', text)}
        placeholder="Ingrese la marca"
      />
      
      <FormInput
        label="Modelo"
        value={vehiculo.modelo}
        onChangeText={(text) => onChange('modelo', text)}
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
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 'auto',
    gap: 12,
  },
  disabledButton: {
    backgroundColor: '#ccc',
    opacity: 0.7,
  },
});
