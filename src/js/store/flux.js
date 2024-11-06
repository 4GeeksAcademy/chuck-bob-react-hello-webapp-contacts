const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: []
		},
		actions: {
			loadContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/Derek/contacts")
					.then(res => res.json())
					.then(data => {
						// Assuming data is an array of contacts
						setStore({ contactList: data.contacts });
					})
					.catch(err => console.error("Error fetching contacts:", err));
			},

			handleSubmitEdit: (id, inputFullname, inputEmail, inputAddress, inputPhone) => {
				// Add a new contact using a fetch POST request
				fetch("https://playground.4geeks.com/contact/agendas/Derek/contacts/" + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: inputFullname,
						email: inputEmail,
						address: inputAddress,
						phone: inputPhone
					})
				})
					.then((res) => res.json())
					.then((data) => {
						if (data) {
							
						}
					})
					.catch((err) => console.error("Error adding contact:", err));
			},

			handleDelete: (id) => {
				// Add a new contact using a fetch POST request                        ↓ need to define
				fetch("https://playground.4geeks.com/contact/agendas/Derek/contacts/" + id, {
					method: "DELETE",
				})
					.then((res) =>{
						getActions().loadContacts();
						navigate("/"); // Redirect to the home page
					})
					.catch((err) => console.error("Error adding contact:", err));
			},

			addtocontacts: (newContact) => {
				const store = getStore();
				setStore({ contactList: [...store.contactList, newContact] });
			},

			// Example function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ contactList: data.contacts }))
				*/
			},

			changeColor: (index, color) => {
				// Get the store
				const store = getStore();

				// We have to loop the entire demo array to look for the respective index
				// and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				// Reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
