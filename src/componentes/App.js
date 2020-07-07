import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {calcularMarca,obtenerDiferenciaAnio,obtenerPlan} from '../helper'
import Resumen from './Resumen';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			resultado : '',
			datos: {}
		};
	}

	cotizarSeguro = (datos)=>{
		const {marca,plan,year} = datos;
		let resultado = 2000;
		const diferencia = obtenerDiferenciaAnio(year);

		resultado -= ((diferencia * 3)*resultado)/100; 
		resultado = resultado * calcularMarca(marca);

		let incrementoPlan = obtenerPlan(plan);

		resultado = parseFloat(resultado * incrementoPlan).toFixed(2);

		const datosAuto ={
			marca: marca,
			plan : plan,
			year:year
		}

		this.setState({
			resultado : resultado,
			datos: datosAuto
		});
	}

	render() {
		return (
			<div className="contenedor">
			<Header 
				titulo="Cotizador de auto de seguros"/>

			<div className="contenedor-formulario">
				<Formulario
				cotizarSeguro = {this.cotizarSeguro}
				/>
				<Resumen
					datos = {this.state.datos}
					resultado = {this.state.resultado}
				/>
			</div>
			</div>
		);
	}
}

export default App;