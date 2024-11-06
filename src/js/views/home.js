import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Contact } from "./contact";
import { Submit } from "./submit";
import { Link, useNavigate } from "react-router-dom";



export const Home = () => {
    const { store, actions } = useContext(Context);

    // Load contacts when the component mounts
    useEffect(() => {
        actions.loadContacts();
    }, []);

    return (
        <div>
            {store.contactList.map((contact) => (
                <Contact key={contact.id} contact={contact} />
            ))}
			
			<Link to={"/submit"} > go to submit page

				</Link>

        </div>
    );
};
