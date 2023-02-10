import { Button, Typography } from "@mui/material";
import StyledBox from "../lib/StyledBox";

interface ErrorPageProps {
  message: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
  return (
    <StyledBox>
      <Typography variant="h6">{message}</Typography>
      <Button variant="contained" href="/">
        Go Back
      </Button>
    </StyledBox>
  );
};

export default ErrorPage;
