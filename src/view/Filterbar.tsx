import ViewListIcon from "@suid/icons-material/ViewList";
import ViewCardsIcon from "@suid/icons-material/ViewModule";
import Paper from "@suid/material/Paper";
import Stack from "@suid/material/Stack";
import TextField from "@suid/material/TextField";
import ToggleButton from "@suid/material/ToggleButton";
import ToggleButtonGroup from "@suid/material/ToggleButtonGroup";
import { Select } from "@thisbeyond/solid-select";
import { Component } from "solid-js";
import { Currency } from "../model/Currency";
import { Language } from "../model/Language";
import { StudyCourse } from "../model/StudyCourse";
import { UniversityView } from "../model/UniversityView";
import { setLanguageFilter, setMaxFeeFilter, setStudyCourseFilter, setUniversityView } from "../store/reducer";
import { state } from "../store/store";

export const Filterbar: Component = () => {
    return (
        <Paper sx={{ p: 3 }}>
            <Stack direction="row" spacing={2}>
                <Select onChange={val => setLanguageFilter([val])} placeholder="language" options={Object.values(Language)} />
                <Select onChange={val => setStudyCourseFilter([val])} placeholder="Study course" options={Object.values(StudyCourse)} />
                <TextField onChange={(e, num) => setMaxFeeFilter({ amount: parseFloat(num) || 0, currency: Currency.EUR, timespan: 1 })} type="number" label="Max semester fee" />

                <ToggleButtonGroup
                    color="primary"
                    value={state.view.universities}
                    onChange={(e, val) => setUniversityView(val)}
                    exclusive
                >
                    <ToggleButton value={UniversityView.LIST} aria-label="left aligned">
                        <ViewListIcon />
                    </ToggleButton>
                    <ToggleButton value={UniversityView.CARD} aria-label="centered">
                        <ViewCardsIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Paper>
    )
}