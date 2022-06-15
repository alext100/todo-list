import { Container, Typography } from "@mui/material";
import * as React from "react";

const NotLoggedInUserView: React.FC = () => (
  <>
    <Container fixed>
      {" "}
      <Typography variant="h3" component="span" sx={{ flexGrow: 1 }}>
        Please sign in to see your tasks
      </Typography>
    </Container>
  </>
);

export default NotLoggedInUserView;
