import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Edit = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [inputFullname, setInputFullname] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputAddress, setInputAddress] = useState("");

    const params = useParams();

    useEffect(
        () => {
            let foundPerson = store.contactList.find((contact) => contact.id == params.id);
            console.log("x", foundPerson);
            setInputFullname(foundPerson.name);
            setInputEmail(foundPerson.email);
            setInputPhone(foundPerson.phone);
            setInputAddress(foundPerson.address);

        }, []
    )




    return (
        <div>
            <div className="title-for-add"><h1>Edit contact</h1></div>

            <div className="fullname">
                <label>Full Name</label>
                <input
                    type="text"
                    value={inputFullname}
                    onChange={(e) => setInputFullname(e.target.value)}
                />
            </div>

            <div className="email">
                <label>Email</label>
                <input
                    type="text"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                />
            </div>

            <div className="phone">
                <label>Phone</label>
                <input
                    type="text"
                    value={inputPhone}
                    onChange={(e) => setInputPhone(e.target.value)}
                />
            </div>

            <div className="address">
                <label>Address</label>
                <input
                    type="text"
                    value={inputAddress}
                    onChange={(e) => setInputAddress(e.target.value)}
                />
            </div>

            <div className="save-button">
                <button onClick={() => {
                actions.handleSubmitEdit(params.id, inputFullname, inputEmail, inputAddress, inputPhone)
                navigate("/"); // Redirect to the home page
                }}>Submit Changes</button>
                
            </div>

            <Link to={"/"}>or get back to contacts
            </Link>


        </div>
    );
}