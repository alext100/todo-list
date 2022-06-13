import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button, Divider, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";

const Footer = () => (
  <>
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
            <Link href="LinkedInIcon">
              <LinkedInIcon />
            </Link>
          </Button>
        </Tooltip>
      </Box>
    </Typography>
  </>
);
export default Footer;
