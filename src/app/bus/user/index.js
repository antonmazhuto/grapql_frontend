// Core
import React from "react";

// Comp
import { Registration } from "./registration";
import { Users } from "./users";
import {Login} from "./login";

export const User = () => {
    return (
        <>
            <Registration/>
            <Login/>
            <Users/>
        </>
    )
};
