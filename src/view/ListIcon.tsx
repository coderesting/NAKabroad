import Avatar from "@suid/material/Avatar";
import { OverridableComponent } from "@suid/material/OverridableComponent";
import { SvgIconTypeMap } from "@suid/material/SvgIcon";
import { Component } from "solid-js";
import { theme } from "../theme";

export const ListIcon: Component<{ Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> }> = ({ Icon }) => {
    return (
        <Avatar sx={{ mr: 2, bgcolor: theme.palette.background.default }}>
            <Icon sx={{ color: theme.palette.text.primary }} />
        </Avatar>
    )
}