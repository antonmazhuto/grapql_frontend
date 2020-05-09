// Core
import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useState } from 'react';

// Hooks
import { useForm } from "../../../hooks/useForm";

// Queries
const mutationLoginUser = loader('./gql/mutationLoginUser.graphql');

export const useLogin = () => {
    const {form, handleChange} = useForm({
        name: '',
        password: ""
    });
    const [_logIn, { loading, data, error }] = useMutation(mutationLoginUser, {
        onCompleted({logIn}) {
            if (logIn.token) {
                localStorage.setItem('Token', logIn.token)
            }
        }
    });

    const authorizedUser = data && data.login;

    const login = () => {
        const { name, password } = form;

        _logIn({
            variables: {
                username: name,
                password: password
            }
        })
    };



    return {
        handleChange,
        login,
        loading,
        error,
        authorizedUser
    }
};
