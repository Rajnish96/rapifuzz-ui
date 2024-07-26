import clsx from "clsx";

import { Button } from "@mui/material";
import useStyles from "./styles";

const RapiButton = (props) => {
    const classes = useStyles();
    return (
        <Button
            variant={props.variant || "contained"}
            disabled={!!props.disabled}
            onClick={props.onClick}
            className={clsx(classes.button, props.className)}
            classes={props.classes}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            fullWidth={!!props.fullWidth}
        >
            {props.buttonText}
        </Button>
    );
};

export default RapiButton;
