import axios from "axios";
import { useEffect, useState } from "react";

import { TESTIMONIES_API_URL } from "./api";

function App() {
    const [testimonies, setTestimonies] = useState();

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
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
