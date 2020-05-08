// Core
import React from "react";

// Hooks
import { useQueryAllCustomers } from "./hooks/useQueryAllCustomers";


export const List = () => {
    const { loading, error, customers } = useQueryAllCustomers();

    const loaderJSX = loading && (
        <p>Идет загрузка...</p>
    );

    const errorJSX = error && (
        <p>We have a problem: {error.message}</p>
    );

    const customersJSX = customers && customers.map(({name, username, dateCreated}) => (
        <li key={username}>
            <span>UserName: {username}</span>
            <span>Name: {name}</span>
            <span>DateCreated: {dateCreated}</span>
        </li>
    ));

    return (
        <>
            {loaderJSX}
            {errorJSX}
            <ul>{customersJSX}</ul>
        </>
    )
};
