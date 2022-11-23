import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TestimonyCard from "./components/testimonyCard/TestimonyCard";

import { TESTIMONIES_API_URL } from "./api";

const useTestimonies = () => {
    const [testimonies, setTestimonies] = useState([]);
    let sortedTestimonies = useRef([]);

    useEffect(() => {
        // Sorting testimonies
        sortedTestimonies.current = testimonies.sort(
            (objA, objB) => Number(objB.rating) - Number(objA.rating)
        );
        setTestimonies(sortedTestimonies.current);
    }, [testimonies]);

    return [testimonies, setTestimonies, sortedTestimonies.current];
};

function App() {
    const [testimonies, setTestimonies] = useTestimonies();

    // Obtaining data from the API
    async function getResponse() {
        try {
            const response = await axios.get(TESTIMONIES_API_URL);
            setTestimonies(response.data);
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
