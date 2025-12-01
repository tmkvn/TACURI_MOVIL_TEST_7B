export type Vehiculo = {
    modelo: string;
    marca: string;
    placa: string;
    nombreDuenio: string;
    anio: number;
    tipoGasolina: string;
}


export const emptyVehiculo: Vehiculo = {
    modelo: '',
    marca: '',
    placa: '',
    nombreDuenio: '',
    anio: 0,
    tipoGasolina: '',
}