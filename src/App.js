import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TestimonyCard from "./components/testimonyCard/TestimonyCard";

import { TESTIMONIES_API_URL } from "./api";

const useTestimonies = () => {
    const [testimonies, setTestimonies] = useState();

    // Order testimonies by rating
    const sortTestimonies = (array) => {
        const sortedTestimonies = array.sort(
            (objA, objB) => Number(objB.rating) - Number(objA.rating)
        );
        setTestimonies(sortedTestimonies);
    };

    useEffect(() => {
        if (typeof testimonies === "object") {
            sortTestimonies(testimonies);
        }
    }, [testimonies]);

    return [testimonies, sortTestimonies];
};

function App() {
    const [testimonies, sortTestimonies] = useTestimonies();

    // Obtaining data from the API
    async function getResponse() {
        try {
            const { data } = await axios.get(TESTIMONIES_API_URL);
            sortTestimonies(data);
        } catch (error) {
            console.log(error);
        }
    }

    // Remove testimony by id
    const removeTestimony = (index) => {
        const newArray = testimonies.filter((item) => item.id !== index);
        sortTestimonies(newArray);
    };

    // Get data on App load
    useEffect(() => {
        getResponse();
    }, []);

    return (
        <div className="App">
            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center">
                    {testimonies?.map((testimony) => (
                        <TestimonyCard
                            key={testimony.id}
                            testimony={testimony}
                            removeTestimony={removeTestimony}
                        />
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
