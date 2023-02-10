import { Create, ExpandMore, NotInterested } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Grid,
  IconButton,
  SxProps,
  Toolbar,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import useSelector from "../../../hooks/use-selector";
import User from "../../../models/user.model";
import ContainerProps from "../../container-props";

interface FieldProps extends ContainerProps {
  sx?: SxProps;
  hide?: boolean;
  width?: string | number;
}

interface RowProps extends ContainerProps {
  user: User;
  expanded: string;
  onDisable: (id: string) => Promise<void>;
}

interface ActiveUserListProps {
  users: User[];
  onDisable: (id: string) => Promise<void>;
}

const Field = ({ sx, width, hide, children }: FieldProps) => {
  return (
    <Typography
      sx={{
        ...sx,
        width: width,
        display: hide ? "none" : "",
      }}
    >
      {children}
    </Typography>
  );
};

const Row = ({ user, expanded, onDisable }: RowProps) => {
  const { id, fname, lname, email, avatar } = user;
  const isExpanded = expanded === id;

  return (
    <Accordion key={id} expanded={isExpanded}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Field width="5%" hide={isExpanded}></Field>

        <Field width="10%" hide={isExpanded}>
          <Avatar alt={`${fname} ${lname}`} src={avatar} />
        </Field>

        <Field width="20%" hide={isExpanded}>
          {`${fname} ${lname}`}
        </Field>

        <Field width="19%" hide={isExpanded}>
          {email}
        </Field>

        <Grid container sx={{ width: "19%", mx: 4 }}>
          <Grid item xs={4}>
            <IconButton>
              <Create />
            </IconButton>
          </Grid>

          <Grid item xs={4}>
            <IconButton
              onClick={() => {
                onDisable(id);
              }}
            >
              <NotInterested />
            </IconButton>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>No details here</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const ActiveUserList = ({ users, onDisable }: ActiveUserListProps) => {
  const { selected: expanded } = useSelector("");

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Field width="5%" />
          <Field width="10%" />
          <Field width="20%">{" Name"}</Field>
          <Field width="19%">{"Email"}</Field>
        </Toolbar>
      </AppBar>
      {users.map((user) => (
        <Row
          key={user.id}
          user={user}
          expanded={expanded}
          onDisable={onDisable}
        />
      ))}
    </Fragment>
  );
};

export default ActiveUserList;
