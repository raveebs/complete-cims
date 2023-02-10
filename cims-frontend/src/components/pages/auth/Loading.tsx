import { CircularProgress, Typography } from "@mui/material";
import StyledBox from "../../lib/StyledBox";

const Loading = () => {
  return (
    <StyledBox>
      <Typography variant="h6">Loading</Typography>
      <CircularProgress />
    </StyledBox>
  );
};

export default Loading;
