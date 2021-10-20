import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {BotonCal} from '../components/BotonCal';
import {styles} from '../theme/appThemes';

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    setNumero(numero + numeroTexto);
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCal texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCal texto="+/-" color="#9B9B9B" accion={limpiar} />
        <BotonCal texto="del" color="#9B9B9B" accion={limpiar} />
        <BotonCal texto="/" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="7" accion={armarNumero} />
        <BotonCal texto="8" accion={armarNumero} />
        <BotonCal texto="9" accion={armarNumero} />
        <BotonCal texto="X" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="4" accion={armarNumero} />
        <BotonCal texto="5" accion={armarNumero} />
        <BotonCal texto="6" accion={armarNumero} />
        <BotonCal texto="-" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="1" accion={armarNumero} />
        <BotonCal texto="2" accion={armarNumero} />
        <BotonCal texto="3" accion={armarNumero} />
        <BotonCal texto="+" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="0" accion={armarNumero} ancho />
        <BotonCal texto="." accion={armarNumero} />
        <BotonCal texto="=" color="#FF9427" accion={limpiar} />
      </View>
    </View>
  );
};
