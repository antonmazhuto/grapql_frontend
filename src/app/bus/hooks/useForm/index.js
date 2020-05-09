// Core
import {useState} from "react";

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);

    const handleChange = (event) => {
        event.persist();
        setForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    };

    return {
        handleChange,
        form
    }
};
