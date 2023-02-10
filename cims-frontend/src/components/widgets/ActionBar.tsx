import { Grid, Toolbar } from "@mui/material";
import ContainerProps from "../container-props";
import StyledActionBar from "../lib/StyledActionBar";

interface ActionBarProps extends ContainerProps {}

const ActionBar = ({ children }: ActionBarProps) => {
  return (
    <StyledActionBar>
      <Toolbar>
        <Grid container sx={{ justifyContent: "flex-end" }}>
          {children}
        </Grid>
      </Toolbar>
    </StyledActionBar>
  );
};

export default ActionBar;
