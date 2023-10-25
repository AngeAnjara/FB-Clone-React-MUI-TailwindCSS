import { Typography, Avatar, Box, Container, IconButton, TextField} from "@mui/material";
import { Favorite} from "@mui/icons-material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShareIcon from "@mui/icons-material/Share";
import { useEffect, useState } from "react";
import { User } from "../UserData/User";

function Post() {


  return (
    <>
      {User.map((item) => {
        return (
          <Container
            key={item.id}
            sx={{ width: "90%" }}
            className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack "
          >
            <Box className="flex items-center gap-2 dark:text-slate-50">
              <Avatar alt="Avatar" src={item.photo} />
              <Box>
                <Typography variant="h5">{item.first_name}</Typography>
                <Typography sx={{ fontSize: "12px" }}>4h</Typography>
              </Box>
            </Box>
            <Box className="dark:text-slate-50 m-5">
              <Typography>{item.Post}</Typography>
            </Box>
            <Box className="flex m-5 rounded-md ">
              <img src={item.photo} alt="post" />
            </Box>
            <Box sx={{ justifyContent: "space-between" }}>
              <IconButton
                className="dark:text-slate-100"
                
              >
                <Favorite sx={{ fontSize: 40 }} />
                {item.like}
              </IconButton>
              <IconButton
                className="dark:text-slate-100"
                
              >
                <InsertCommentIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton className="dark:text-slate-100">
                <ShareIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
           
          </Container>
        );
      })}
    </>
  );
}

export default Post;
