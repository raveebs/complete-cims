import { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

interface StyledBoxProps extends BoxProps {}

const StyledBox = styled(Box)<StyledBoxProps>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100vh",
}));

export default StyledBox;
