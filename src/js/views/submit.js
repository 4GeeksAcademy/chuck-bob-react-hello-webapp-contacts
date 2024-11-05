import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Submit = () => {

    const navigate = useNavigate();
    const [inputFullname, setInputFullname] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputAddress, setInputAddress] = useState("");


    const handleSubmit = () => {
        // Add a new contact using a fetch POST request
        fetch("https://playground.4geeks.com/contact/agendas/Derek/contacts", {
            method: "POST",
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
                    navigate("/"); // Redirect to the home page
                }
            })
            .catch((err) => console.error("Error adding contact:", err));
    };



    return (
        <div>
            <div className="title-for-add"><h1>Add a new contact</h1></div>

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
                <button onClick={handleSubmit}>Button</button>

            </div>

            <Link to={"/"}>or get back to contacts
            </Link>


        </div>
    );
}