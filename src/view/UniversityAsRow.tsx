import Chip from "@suid/material/Chip";
import Stack from "@suid/material/Stack";
import TableCell from "@suid/material/TableCell";
import TableRow from "@suid/material/TableRow";
import { Component, For } from "solid-js";
import { University } from "../model/University";
import { formatFee } from "../service/formatFee";

export const UniversityAsRow: Component<{ university: University }> = ({ university }) => {
    return (
        <TableRow sx={{ '&:last-child td': { border: 0 } }}>
            <TableCell scope="row">{university.name}</TableCell>
            <TableCell scope="row">
                <Stack alignItems="flex-start">
                    <For each={university.studyCourses}>
                        {courseOfStudy => <Chip label={courseOfStudy} />}
                    </For>
                </Stack>
            </TableCell>
            <TableCell scope="row">
                <Stack alignItems="flex-start" direction="row" spacing={1}>
                    <For each={university.languages}>
                        {language => <Chip label={language} />}
                    </For>
                </Stack>
            </TableCell>
            <TableCell scope="row">{formatFee(university.fees.studyFee)}</TableCell>
            <TableCell scope="row">{university.fees.additional?.map(formatFee).join(', ')}</TableCell>
            <TableCell scope="row">{university.websites.main}</TableCell>
        </TableRow>
    )
}