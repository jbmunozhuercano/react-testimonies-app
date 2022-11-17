import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [testimonies, setTestimonies] = useState({});

    async function getResponse() {
        try {
            const response = await axios.get(
                "https://testimonialapi.toolcarton.com/api"
            );
            setTestimonies(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getResponse();
    }, []);

    return (
        <div className="App">
            <h1>Hello World!</h1>
        </div>
    );
}

export default App;
