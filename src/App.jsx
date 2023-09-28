import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import { useState } from "react";
import { useEffect } from "react";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import RoofingIcon from "@mui/icons-material/Roofing";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Typography, Container, Avatar } from "@mui/material";
import Profile from "./Components/Profile/Profile";
import Post from "./Components/Post/Post";
import Contact from "./Components/Contact/Contact";
import VosPages from "./Components/VosPage/VosPages";
import Message from "./Components/Message/Message";
import Group from "./Components/Group/Group";
import Paramettre from "./Components/Paramettre/Paramettre";
import FriendsAdd from "./Components/FriendsAdd/FriendsAdd";
import { MobileView, BrowserView } from "react-device-detect";
import SearchIcon from "@mui/icons-material/Search";
import imageProfile from "./assets/gre.jpg";
import Notification from "./Components/Notification/Notification";

function App() {
  const [theme, setTheme] = useState("light");
  const [btn, setBtn] = useState(false);
  const [mes, setMess] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const Layout = () => {
    const showMessage = () => {
      setMess(!mes);
    };
    const closeMsg = () => {
      setMess(false);
    };

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const seuil = 50;
        if (scrollY > seuil) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        setBtn(true);
      } else {
        document.documentElement.classList.remove("dark");
        setBtn(false);
      }
    }, [theme]);
    const switchTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
      <>
        <BrowserView>
          <div className="AllHome">
            <div className="navBar dark:navBarDark">
              <div className="flex gap-4 items-center">
                <div className="uppercase font-bold ">Logo</div>
                <div className="searchField">
                  <input type="search" placeholder="Search..." />
                </div>
              </div>
              <div className="flex gap-10">
                <Link to="/" className="emojy">
                  <IconButton className="dark:text-slate-100">
                    <RoofingIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Link>
                <Link to="/group" className="emojy">
                  <IconButton className="dark:text-slate-100">
                    <Diversity2Icon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Link>
                <Link to="/friendsAdd" className="emojy">
                  <IconButton className="dark:text-slate-100">
                    <PersonAddAltIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Link>
                <Link to="/settigns" className="emojy">
                  <IconButton className="dark:text-slate-100">
                    <SettingsIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Link>
              </div>
              <div className="flex ">
                {btn ? (
                  <IconButton onClick={switchTheme}>
                    <WbSunnyIcon sx={{ color: "white" }} />
                  </IconButton>
                ) : (
                  <IconButton onClick={switchTheme}>
                    <DarkModeIcon />
                  </IconButton>
                )}
                <IconButton className="dark:text-slate-100">
                  <NotificationsNoneIcon />
                </IconButton>
                <div className="message">
                  <IconButton
                    className="dark:text-slate-100"
                    onClick={showMessage}
                  >
                    <div className="msgIcon">
                      <span></span>
                      <MessageIcon />
                    </div>
                  </IconButton>
                  {mes && (
                    <div className="messageShow dark:messageShowDark">
                      <Message close={closeMsg} />
                    </div>
                  )}
                </div>

                <IconButton className="dark:text-slate-100">
                  <AccountCircleIcon />
                </IconButton>
              </div>
            </div>
            <div className="acceuil dark:acceuilDark">
              <div>
                <Profile />
              </div>
              <div>
                <Outlet />
              </div>
              <div>
                <VosPages />
                <Contact />
              </div>
            </div>
          </div>
        </BrowserView>

        <MobileView>
          <div className="All dark:AllDark">
            <div className="topBar dark:topBarDark">
              <Container>
                <Typography className="uppercase font-bold dark:text-slate-50">
                  Logo
                </Typography>
              </Container>
              <div className="flex">
                {btn ? (
                  <IconButton onClick={switchTheme}>
                    <WbSunnyIcon sx={{ color: "white" }} />
                  </IconButton>
                ) : (
                  <IconButton onClick={switchTheme}>
                    <DarkModeIcon />
                  </IconButton>
                )}
                <IconButton className="dark:text-slate-100">
                  <SearchIcon />
                </IconButton>
                <IconButton className="dark:text-slate-100">
                  <MessageIcon />
                </IconButton>
              </div>
            </div>
            <div
              className={
                scrolled
                  ? "midleBarFixed dark:midleBarFixedDark"
                  : "midleBar dark:midleBarDark"
              }
            >
              <Link to="/">
                <IconButton className=" dark:text-slate-100 ">
                  <RoofingIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Link>
              <Link to="/group">
                <IconButton className="dark:text-slate-100">
                  <Diversity2Icon sx={{ fontSize: 30 }} />
                </IconButton>
              </Link>
              <Link to="/FriendsAdd">
                <IconButton className="dark:text-slate-100">
                  <PersonAddAltIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Link>
              <Link to="/notification">
                <IconButton className="dark:text-slate-100">
                  <NotificationsNoneIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Link>
              <Link to="/Profile">
                <IconButton className="dark:text-slate-100 border-gray-200">
                  <Avatar src={imageProfile} sx={{ width: 30, height: 30 }} />
                </IconButton>
              </Link>
            </div>
            <div className="py-10">
              <Outlet />
            </div>
          </div>
        </MobileView>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/group",
          element: <Group />,
        },
        {
          path: "/post",
          element: <Post />,
        },
        {
          path: "/friendsAdd",
          element: <FriendsAdd />,
        },
        {
          path: "/notification",
          element: <Notification />,
        },
        {
          path: "/settigns",
          element: <Paramettre />,
        },
      ],
    },

    {
      path: "/Login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
