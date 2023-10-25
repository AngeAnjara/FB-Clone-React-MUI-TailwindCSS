import { Box, Container, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TableViewIcon from "@mui/icons-material/TableView";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Container className="containerWhite dark:containerDark">
      <div className="flex-col m-2 rounded-md gap-5 ">
        <Box className="flex gap-5">
          <Link to="/">
            <IconButton className="dark:text-slate-100  gap-3">
              <AccountCircleIcon />
              <Typography>Profile Name </Typography>
            </IconButton>
          </Link>
        </Box>
        <Box>
          <IconButton className="dark:text-slate-100 gap-3">
            <Diversity3Icon />
            <Typography>Group</Typography>
          </IconButton>
        </Box>
        <Box>
          <IconButton className="dark:text-slate-100 gap-3">
            <TableViewIcon />
            <Typography>Sheudle</Typography>
          </IconButton>
        </Box>
        <Box>
          <IconButton className="dark:text-slate-100 gap-3">
            <ContactPageIcon />
            <Typography>Contact</Typography>
          </IconButton>
        </Box>
        <Box>
          <IconButton className="dark:text-slate-100 gap-3">
            <GroupAddIcon />
            <Typography>Add Friends</Typography>
          </IconButton>
        </Box>
      </div>
      <Container>
        <Typography className="text-slate-600">
          This is a Portfolio By Angelo Anjaratiavina 
        </Typography>
      </Container>
    </Container>
  );
}

export default Profile;
