import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Button,
  Container,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";

const Footer: React.FC = () => (
  <Container>
    <Divider variant="middle" />
    <Typography component="div">
      <Box sx={{ textAlign: "center", m: 1 }}>
        {" "}
        Made by Aleksandr Turchenko
        <Tooltip title="Go to GitHub page">
          <Button>
            {" "}
            <Link href="https://github.com/alext100/">
              <GitHubIcon />
            </Link>
          </Button>
        </Tooltip>
        <Tooltip title="Go to LinkedIn page">
          <Button>
            {" "}
            <Link href="https://www.linkedin.com/in/alexandr-turchenko/">
              <LinkedInIcon />
            </Link>
          </Button>
        </Tooltip>
      </Box>
    </Typography>
  </Container>
);
export default Footer;
