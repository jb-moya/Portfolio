import { useState } from "react";

const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
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
        setResponseMessage("");

        try {
            // Make the POST request to the API route
            const res = await fetch("http://localhost:3000/api/send-email", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    Accept: "application/json",
                },
            });

            console.log("🚀 ~ handleSubmit ~ res:", res)

            // const data = await res.json();

            if (res.ok) {
                setResponseMessage("Email sent successfully!");
            } else {
                setResponseMessage(`Failed to send email: ${res.statusText}`);
                // setResponseMessage(`Failed to send email: ${data.message}`);
            }
        } catch (error) {
            setResponseMessage(`Error: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        isSubmitting,
        responseMessage,
        handleChange,
        handleSubmit,
    };
};

export default useContactForm;
