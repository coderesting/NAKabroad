import AdditinalFeesIcon from "@suid/icons-material/AttachMoney";
import ReportIcon from '@suid/icons-material/Description';
import LaunchIcon from '@suid/icons-material/Launch';
import LinkIcon from '@suid/icons-material/Link';
import FeeIcon from "@suid/icons-material/School";
import LanguagesIcon from "@suid/icons-material/Translate";
import Button from "@suid/material/Button";
import Card from "@suid/material/Card";
import CardActions from "@suid/material/CardActions";
import CardContent from "@suid/material/CardContent";
import CardHeader from "@suid/material/CardHeader";
import Link from "@suid/material/Link";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemText from "@suid/material/ListItemText";
import styled from "@suid/system/styled";
import { Component, For, Show } from "solid-js";
import { University } from "../model/University";
import { formatFee } from "../service/formatFee";
import { ListIcon } from "./ListIcon";

const StyledListItem = styled(ListItem)(() => ({
    padding: 0
}))

const StyledListLink = styled(Link)(({ theme }) => ({
    display: 'block',
    color: theme.palette.text.secondary
}))

export const UniversityAsCard: Component<{ university: University }> = ({ university }) => {
    return (
        <Card sx={{ minWidth: 300 }}>
            <CardHeader
                sx={{ pb: 0 }}
                title={university.name}
                subheader={university.studyCourses.join(', ')}
            />

            <CardContent sx={{ py: 0 }}>
                <List dense>
                    <StyledListItem>
                        <ListIcon Icon={FeeIcon} />
                        <ListItemText primary="Study Fees" secondary={formatFee(university.fees.studyFee)} />
                    </StyledListItem>

                    <For each={university.fees.additional}>
                        {(fee) => (<StyledListItem>
                            <ListIcon Icon={AdditinalFeesIcon} />
                            <ListItemText primary={fee.name} secondary={formatFee(fee)} />
                        </StyledListItem>)}
                    </For>

                    <StyledListItem>
                        <ListIcon Icon={LanguagesIcon} />
                        <ListItemText primary="Languages" secondary={university.languages.join(', ')} />
                    </StyledListItem>

                    <Show when={university.experienceReports.length > 0}>
                        <StyledListItem>
                            <ListIcon Icon={ReportIcon} />
                            <ListItemText primary="Experience Reports" secondary={university.experienceReports.map(report => <StyledListLink target="_blank" href={report.url}>{report.name}</StyledListLink>)} />
                        </StyledListItem>
                    </Show>

                    <Show when={(university.websites.additional?.length || 0) > 0}>
                        <StyledListItem>
                            <ListIcon Icon={LinkIcon} />
                            <ListItemText primary="Other Resources" secondary={university.websites.additional?.map(website => <StyledListLink target="_blank" href={website.url}>{website.name}</StyledListLink>)} />
                        </StyledListItem>
                    </Show>
                </List>
            </CardContent>
            <CardActions>
                <Link href={university.websites.main} target="_blank">
                    <Button startIcon={<LaunchIcon />} variant="outlined">Website</Button>
                </Link>
            </CardActions>
        </Card>
    )
}