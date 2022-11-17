import axios from "axios";
import { useEffect, useState } from "react";

import { TESTIMONIES_API_URL } from "./api";

function App() {
    const [testimonies, setTestimonies] = useState();

    // Obtrining data from the API
    async function getResponse() {
        try {
            const response = await axios.get(TESTIMONIES_API_URL);
            setTestimonies(response.data);
            const sortedTestimonies = response.data.sort(
                (objA, objB) => Number(objB.rating) - Number(objA.rating)
            );

            setTestimonies(sortedTestimonies);
        } catch (error) {
            console.log(error);
        }
    }

    // Remove testimony function
    const removeTestimony = (index) => {
        const newArray = testimonies.filter((item) => item.id !== index);
        setTestimonies(newArray);
    };

    // Get data on App load
    useEffect(() => {
        getResponse();
    }, []);

    return (
        <div className="App">
            <h1>Testimonies</h1>
            <ul>
                {testimonies?.map((testimony) => (
                    <li key={testimony.id}>
                        {testimony.name} - &nbsp;<span>{testimony.rating}</span>
                        <button onClick={(e) => removeTestimony(testimony.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
