import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [nota, setNota] = useState("Recordar");
	const [lista, setLista] = useState([]);
	function eliminartarea(posicion) {
		console.log(posicion);
		let listafiltrada = lista.filter((item, index) => {
			if (index !== posicion) {
				return item;
			}
		});
		setLista(listafiltrada);
	}

	return (
		<div className="container mt-5">
			<input
				type="text"
				placeholder="
			Ingrese Nota"
				onChange={(e) => setNota(e.target.value)}></input>
			<ul>
				{lista.map((notas, i) => {
					return (
						<div key={i}>
							<li className="list-group-item ">{notas}</li>
							<button
								className="btn btn-warning"
								onClick={() => eliminartarea(i)}>
								X
							</button>
						</div>
					);
				})}
			</ul>

			<button
				className="btn btn-success"
				onClick={() => setLista([...lista, nota])}>
				Añadir
			</button>
		</div>
	);
};

export default Home;
