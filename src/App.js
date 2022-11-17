import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TestimonyCard from "./components/testimonyCard/TestimonyCard";

import { TESTIMONIES_API_URL } from "./api";

function App() {
    const [testimonies, setTestimonies] = useState();

    // Obtaining data from the API
    async function getResponse() {
        try {
            const response = await axios.get(TESTIMONIES_API_URL);
            setTestimonies(response.data);

            // Sorting testimonies by rating
            const sortedTestimonies = response.data.sort(
                (objA, objB) => Number(objB.rating) - Number(objA.rating)
            );

            setTestimonies(sortedTestimonies);
            console.log(testimonies);
        } catch (error) {
            console.log(error);
        }
    }

    // Remove testimony by id
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
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center">
                    {testimonies?.map((testimony) => (
                        <TestimonyCard
                            key={testimony.id}
                            testimony={testimony}
                        />
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
