// Core
import React from "react";

// Hooks
import { useCheckIn } from "./hooks/useCheckIn";

export const CheckInPet = () => {
    const { checkIn, pet, Error } = useCheckIn();

    const petJSX = pet && (
        <>
            <p>Id: {pet.id}</p>
            <p>Name: {pet.name}</p>
        </>
    );

    // const errorJSX = error && (
    //     <p>Error: {error.message}</p>
    // );
    const ErrorJSX = Error && (
        <p>Error: {Error}</p>
    );

    return (
        <>
            <h1>CheckInPet</h1>
            <button onClick={() => checkIn('C-2')}>Check In</button>
            {/*{errorJSX}*/}
            {ErrorJSX}
            {petJSX}
        </>
    )
};
