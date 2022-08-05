import Container from "@suid/material/Container"
import Paper from "@suid/material/Paper"
import Table from "@suid/material/Table"
import TableBody from "@suid/material/TableBody"
import TableCell from "@suid/material/TableCell"
import TableContainer from "@suid/material/TableContainer"
import TableHead from "@suid/material/TableHead"
import TableRow from "@suid/material/TableRow"
import { Component, For } from "solid-js"
import { filteredUniversities } from "../store/reducer"
import { UniversityAsRow } from "./UniversityAsRow"

export const UniversityList: Component = () => {
    return (
        <Container maxWidth="lg">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Course of study</TableCell>
                            <TableCell>Languages</TableCell>
                            <TableCell>Semester fees</TableCell>
                            <TableCell>Website</TableCell>
                            <TableCell>Request deletion</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <For each={filteredUniversities()} >
                            {(university) => <UniversityAsRow university={university} />}
                        </For>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}