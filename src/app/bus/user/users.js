import React from "react";

// hooks
import { useQueryUsers } from "./hooks/useQueryUsers";


export const Users = () => {
    const {loading, error, users} = useQueryUsers();

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return  <p>Error: {error.message}</p>
    }
    const usersJSX = users.map(({id, name, email, password}) => (
        <p key={id}>
            <span>Name: {name}</span>
            <span>Email: {email}</span>
            <span>Password: {password}</span>
        </p>
    ))
    return (
        <>
            <h1>Users</h1>
        </>
    )
};
