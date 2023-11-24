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
			peopledata: [],
			planets: [],
			planetsdata: [],
			vehicles: [],
			vehiclesdata: [],
			favorites: [],
		
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
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/"
				)
					.then(res => res.json())
					.then(data => setStore({ planets: data["results"] }))
					.catch(err => console.error(err))
			},
			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/"
				)
					.then(res => res.json())
					.then(data => setStore({ vehicles: data["results"] }))
					.catch(err => console.error(err))
			},
			loadPeopleData: (id) => {
			
				fetch(`https://www.swapi.tech/api/people/${id}`
				)
					.then(res => res.json())
					.then(data => setStore({ peopledata: data.result.properties }))
					.catch(err => console.error(err))
			},
			loadPlanetsData: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`
				)
					.then(res => res.json())
					.then(data => setStore({ planetsdata: data.result.properties }))
					.catch(err => console.error(err))
			},
			loadVehiclesData: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`
				)
					.then(res => res.json())
					.then(data => setStore({ vehiclesdata: data.result.properties }))
					.catch(err => console.error(err))
			},
			Favorites: (name, start, id) => {
				const store = getStore();
			
				
				const isDuplicate = store.favorites.some(favorite => favorite.name === name);
			
				if (!isDuplicate) {
					setStore({ favorites: [...store.favorites, { name: name, start: start , id: id}] });
				} else {
					
					alert('Item is already in favorites.');
				}
			},
			DeleteFavorite: (index) =>{
				const store = getStore();
				let ok = store.favorites
				ok.splice(index,1)
				setStore({favorites: ok})
			}
			
		}
	}
};


export default getState;
