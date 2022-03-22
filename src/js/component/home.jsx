import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [nota, setNota] = useState("Recordar");
	const [lista, setLista] = useState([]);
	function eliminartarea(posicion) {
		let listafiltrada = lista.filter((item, index) => {
			if (index !== posicion) {
				return item;
			}
		});
		setLista(listafiltrada);
		console.log(listafiltrada);
	}
	function agrgartarea() {
		let nuevalista = [...lista, { label: nota, done: false }];
		setLista(nuevalista);
		console.log(nuevalista);
		fetch(url, {
			method: "PUT",
			body: JSON.stringify(nuevalista),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch();
	}

	const url =
		"https://assets.breatheco.de/apis/fake/todos/user/Paulaospinabe";
	useEffect(() => {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([]),
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch();
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setLista(data);
			})
			.catch();
	}, []);

	return (
		<div style={{ background: "black" }}>
			<div
				className="container mt-5"
				style={{
					width: "40rem",
					height: "35rem",
					background: "white",
				}}>
				<div
					className="container mt-5, text-muted"
					style={{ textAlign: "center" }}>
					<h1>
						<p style={{ color: "pink" }}>TODOS</p>
					</h1>
				</div>
				<div
					className="container mt-4"
					style={{
						background: "white",
						width: "30rem",
					}}>
					<input
						style={{ textAlign: "center" }}
						type="text"
						placeholder="
					What needs to be done?"
						onChange={(e) => setNota(e.target.value)}></input>
				</div>
				<ul className="list-group">
					{lista.map((notas, i) => {
						return (
							<div key={i}>
								<li className="list-group-item ">
									{notas.label}
								</li>
								<button
									className="btn btn-light, list-group-item"
									onClick={() => eliminartarea(i)}>
									X
								</button>
							</div>
						);
					})}
				</ul>

				<button
					className="btn btn-light"
					onClick={() => {
						agrgartarea();
					}}>
					Añadir
				</button>
			</div>
		</div>
	);
};

export default Home;
