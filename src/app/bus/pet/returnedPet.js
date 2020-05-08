// Core
import React from "react";

// Hooks
import { useReturnedPet } from "./hooks/useReturnedPet";

export const ReturnedPet = () => {
    const { pet } = useReturnedPet();

    const petsJSX = pet && (
        <p key={pet.id}>Name: {pet.name}</p>
    );
    return (
        <>
            <h1>Returned Pets</h1>
            {petsJSX}
        </>
    )
};
