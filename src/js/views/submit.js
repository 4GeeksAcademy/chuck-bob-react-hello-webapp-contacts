import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Submit = () => (
    <div>
        <div className="title-for-add"><h1>Add a new contact</h1></div>

        <div className="full-name-text">Full Name</div>
        <div className="full-name-input"><input /></div>

        <div className="email-text">Email</div>
        <div className="email-input"><input /></div>

        <div className="phone-text">Phone</div>
        <div className="phone-input"><input /></div>

        <div className="address-text">Address</div>
        <div className="address-input"><input /></div>

        <div className="save-button">
        <Link to={"/"}><button>Button</button>
        </Link>

        </div>

        <Link to={"/"}>or get back to contacts
        </Link>
        

    </div>
);
