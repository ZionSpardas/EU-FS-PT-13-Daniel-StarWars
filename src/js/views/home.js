import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/baseCardPeople";
import { CardVehicle } from "../component/baseCardVehicle";
import { CardPlanet } from "../component/baseCardPlanet";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		
			<div className="container-fluid" >
				<div className="row" my-4>
					<p className="display-4 border-bottom border-dark">Characters </p>
				</div>
				<div className="row my-4" style={{overflow: "scroll"}}>
					<div className="d-flex flex-row" >
						{store.people.map((data, index) => <CardPeople url={data.url} nome={data.name} />)}
					</div>
				</div>
				<div className="row" my-4>
					<p className="display-4 border-bottom border-dark">Planets </p>
				</div>
				<div className="row my-4" style={{overflow: "scroll"}}>
					<div className="d-flex flex-row">
						{store.planets.map((data, index) => <CardPlanet url={data.url} nome={data.name} />)}
					</div>
				</div>
				<div className="row" my-4>
					<p className="display-4 border-bottom border-dark">Vehicles </p>
				</div>
				<div className="row my-4" style={{overflow: "scroll"}}>
					<div className="d-flex flex-row">
						{store.vehicles.map((data, index) => <CardVehicle url={data.url} nome={data.name} />)}
					</div>
				</div>
				
			</div>
		
	)
};
