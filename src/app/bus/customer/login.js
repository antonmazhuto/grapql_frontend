// Core
import React from "react";

// Hooks
import { useLogin } from "./hooks/useLogin";

export const Login = () => {
    const {handleChange, login, error, loading, customer} = useLogin();
    const loaderJSX = loading && (
        <p>Идет проверка пользователя...</p>
    );

    const errorJSX = error && (
        <p>We have a problem: {error.message}</p>
    );

    const customerJSX = customer && (
        <p>Добро пожаловать, {customer.name}!</p>
    );
    return (
        <>
            <h1>Login</h1>
            <input type="text" name="username" placeholder="username" onChange={handleChange}/>
            <input type="text" name="password" placeholder="password" onChange={handleChange}/>
            <button type="submit" onClick={login}>Log In</button>
            {loaderJSX}
            {errorJSX}
            {customerJSX}
        </>
    )
};
