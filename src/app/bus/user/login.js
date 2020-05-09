import React from "react";

import { useLogin } from "./hooks/useLogin";

export const Login = () => {
    const {handleChange, login, error, loading, authorizedUser} = useLogin();
    const loaderJSX = loading && (
        <p>Идет проверка пользователя...</p>
    );

    const errorJSX = error && (
        <p>We have a problem: {error.message}</p>
    );

    const authorizedUserJSX = authorizedUser && (
        <p>Добро пожаловать, {authorizedUser.name}!</p>
    );
    return (
        <>
            <h1>Login</h1>
            <input type="text" name="name" placeholder="name" onChange={handleChange}/>
            <input type="text" name="password" placeholder="password" onChange={handleChange}/>
            <button type="submit" onClick={login}>Log In</button>
            {loaderJSX}
            {errorJSX}
            {authorizedUserJSX}
        </>
    )
};
