import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FromButton } from '../components/FormButton';
import { Vehiculo } from '../models/vehiculo';

type Props = {
  vehiculos: Vehiculo[];
  onRegistrarOtro: () => void;
};

export const VehiculosRegistradosScreen = ({ vehiculos, onRegistrarOtro }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        {/* Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, styles.cellPlaca]}>Placa</Text>
          <Text style={[styles.headerCell, styles.cellDuenio]}>Dueño</Text>
          <Text style={[styles.headerCell, styles.cellMarca]}>Marca</Text>
          <Text style={[styles.headerCell, styles.cellModelo]}>Modelo</Text>
        </View>
        
        {/* Body */}
        <ScrollView style={styles.tableBody}>
          {vehiculos.length === 0 ? (
            <View style={styles.emptyRow}>
              <Text style={styles.emptyText}>No hay vehículos registrados</Text>
            </View>
          ) : (
            vehiculos.map((vehiculo, index) => (
              <View key={index} style={[styles.tableRow, index % 2 === 0 && styles.evenRow]}>
                <Text style={[styles.cell, styles.cellPlaca]}>{vehiculo.placa}</Text>
                <Text style={[styles.cell, styles.cellDuenio]}>{vehiculo.nombreDuenio}</Text>
                <Text style={[styles.cell, styles.cellMarca]}>{vehiculo.marca}</Text>
                <Text style={[styles.cell, styles.cellModelo]}>{vehiculo.modelo}</Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <FromButton 
          label="Registrar otro" 
          onPress={onRegistrarOtro}
          style={styles.registerButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  headerCell: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
  },
  tableBody: {
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  cell: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  cellPlaca: {
    flex: 1,
  },
  cellDuenio: {
    flex: 1.5,
  },
  cellMarca: {
    flex: 1,
  },
  cellModelo: {
    flex: 1,
  },
  emptyRow: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: '#999',
    fontStyle: 'italic',
  },
  buttonContainer: {
    marginTop: 16,
  },
  registerButton: {
    backgroundColor: '#2196F3',
  },
});

