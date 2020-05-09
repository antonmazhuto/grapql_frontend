// Core
import React from "react";

// Hooks
import { useForm } from "../hooks/useForm";
import { useUserCreator } from "./hooks/useUserCreator";

export const Registration = () => {
    const {} = useForm();
    const { handleChange, save, createdUser } = useUserCreator();

    const customerJSX = createdUser && (
        <p>We already created customer with name: { createdUser.name }</p>
    );
    return (
        <>
            <h1>Registration</h1>
            <input type="text" name="name" placeholder="name" onChange={handleChange} />
            <input type="text" name="email" placeholder="email" onChange={handleChange} />
            <input type="text" name="password" placeholder="password" onChange={handleChange} />
            <button type="submit" onClick={save}>Save</button>
            {
                customerJSX
            }
        </>
    )
};
