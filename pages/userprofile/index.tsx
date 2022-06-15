import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "@/styles/UserProfile.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Avatar,
  Button,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser } from "services/services";

const UserProfile: NextPage = () => {
  const initialUser = {
    email: "",
    email_verified: true,
    family_name: "",
    given_name: "",
    locale: "",
    name: "",
    nickname: "",
    picture: "",
    sub: "",
    updated_at: "",
  };
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    async function fetchData() {
      const userFromAPI = await getUser();
      setUser(userFromAPI);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Typography
          sx={{ display: "inline" }}
          component="span"
          variant="h5"
          color="text.primary"
        >
          Your profile data
        </Typography>
        <List sx={{ width: "100%", maxWidth: 460 }}>
          <ListItem
            alignItems="flex-start"
            sx={{ border: "solid gray 1px", borderRadius: 2, boxShadow: 2 }}
          >
            <ListItemAvatar>
              <Avatar alt={`${user?.name}'s avatar`} src={user?.picture} />
            </ListItemAvatar>
            <ListItemText
              primary={`${user?.name} aka ${user?.nickname}`}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {user?.email}
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
        <Button>
          {" "}
          <Link href="/">
            <Tooltip title="Back to your tasks">
              <ArrowBackIcon />
            </Tooltip>
          </Link>
        </Button>
      </Container>
      <Container className={styles.footer}>
        <Footer />;
      </Container>
    </>
  );
};

export default UserProfile;
