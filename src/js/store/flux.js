const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			peopleData: [],
			vehicles: [],
			vehicleData: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},


			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people/"
				)
					.then(res => res.json())
					.then(data => setStore({ people: data["results"] }))
					.catch(err => console.error(err))
			},
			loadAllDataPerson: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => setStore({ peopleData: data["result"] }))
					.catch(err => console.error(err))
			},
			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/"
				)
					.then(res => res.json())
					.then(data => setStore({ vehicles: data["results"] }))
					.catch(err => console.error(err))
			},
			loadVehiclesData: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(res => res.json())
					.then(data => setStore({ vehicleData: data["result"] }))
					.catch(err => console.error(err))
			},
		}
	}
};


export default getState;
