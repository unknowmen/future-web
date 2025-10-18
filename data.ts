import { useState } from "react";
import data from "../signin/page";

function Data() {
    const [formData, setFormData] = useState({
        id: null,
        name: "",
        phone: "",
        email: "",
        date: "",
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formDataObj = Object.fromEntries(new FormData(event.currentTarget).entries());
        console.table(formDataObj);
    };

    return null; // or your JSX here
}

export default Data;
