import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.text.Primary,
        '&:hover .MuiIconButton-root .MuiButton-outlined': {
            borderColor: theme.palette.Primary.main,
            background: theme.palette.Primary.background,
        },
    },
}));

export default useStyles;