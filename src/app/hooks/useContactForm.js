import { useState } from "react";
import dotenv from "dotenv";
dotenv.config();

const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setHasError(false);
        setResponseMessage("");

        const updateFormData = {
            ...formData,
            message: `From ${formData.email} : ${formData.message}`,
        };

        try {
            // Make the POST request to the API route
            // const res = await fetch("http://localhost:3000/api/send-email", {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/send-email`,
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            console.log("🚀 ~ handleSubmit ~ res:", res);

            // const data = await res.json();

            if (res.ok) {
                setResponseMessage("Email sent successfully!");
                setHasError(false);
            } else {
                setResponseMessage(`Failed to send email: ${res.statusText}`);
                setHasError(true);
                // setResponseMessage(`Failed to send email: ${data.message}`);
            }
        } catch (error) {
            setResponseMessage(`Error: ${error.message}`);
            setHasError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        isSubmitting,
        responseMessage,
        hasError,
        handleChange,
        handleSubmit,
    };
};

export default useContactForm;
