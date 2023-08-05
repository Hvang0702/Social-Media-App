import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const WidgetWrapper = styled(Box) (({ theme }) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem", //goes top, right, bottom, left
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem",
}));

export default WidgetWrapper;