// Core
import React from "react";

// Components
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import { Profile } from "./profile";
import { CheckInPet } from "./checkInPet";
import {ReturnedPet} from "./returnedPet";

export const Pet = () => {
    return (
        <>
            <h1>Pet</h1>
            <ReturnedPet/>
            <CheckInPet/>
            <Profile />
            <Counter/>
            <List/>
            <SpecialList/>
        </>
    )
};
