import { Box, Typography, Container, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { User } from "../UserData/User";

const Notification = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(User);
  }, []);
  return (
    <Container className="containerWhite dark:containerDark">
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack ">
        <Typography
          variant="h6"
          className="text-slate-600 dark:text-emerald-50"
        >
          Notification
        </Typography>
      </Box>
      {data.map((item) => {
        return item.isFriend && (
          <Box
            key={item.id}
            className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack "
          >
            <Avatar src={item.photo}></Avatar>
            <Typography className="text-slate-600 dark:text-emerald-50">
              {item.last_name} has send you a message
            </Typography>
          </Box>
        );
      })}
    </Container>
  );
};

export default Notification;
