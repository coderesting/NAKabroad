import Container from "@suid/material/Container"
import Grid from "@suid/material/Grid"
import { Component, For } from "solid-js"
import { filteredUniversities } from "../store/reducer"
import { UniversityAsCard } from "./UniversityAsCard"

export const UniversityCards: Component = () => {
    return (
        <Container>
            <Grid container gap={3} justifyContent="center">
                <For each={filteredUniversities()}>
                    {
                        (university) => <Grid item><UniversityAsCard university={university} /></Grid>
                    }
                </For>
            </Grid>
        </Container>

    )
}