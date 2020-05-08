// Core
import React from "react";

// Hooks
import { useCustomer} from "./hooks/useCustomer";

// Components
import {List} from "./list";
import {Login} from "./login";

export const Customer  = () => {
    const { handleChange, save, createdAccount } = useCustomer();

    const customerJSX = createdAccount && (
        <p>We already created customer with name: { createdAccount.name }</p>
    );
    return (
        <>
            <Login />
            <h1>Customer Registration</h1>
            <input type="text" name="name" placeholder="name" onChange={handleChange} />
            <input type="text" name="username" placeholder="username" onChange={handleChange} />
            <input type="text" name="password" placeholder="password" onChange={handleChange} />
            <button type="submit" onClick={save}>Save</button>
            {
                customerJSX
            }
            {/*<List />*/}
        </>
    )
};
