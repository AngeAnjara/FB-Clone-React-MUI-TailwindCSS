import { Container, Typography, Box,Button } from "@mui/material";
import { useEffect, useState } from "react";
import { User } from "../UserData/User";

const FriendsAdd = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(User);
  }, []);
  const filterData = data.filter((item)=> item.isFriend===false)
  return (
    <Container className="containerWhite dark:containerDark">
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack ">
        <Typography
          variant="h6"
          className="text-slate-600 dark:text-emerald-50"
        >
          Add Friends
        </Typography>
      </Box>
      {
        filterData.map((item)=>{
          
      return  <Box key={item.id} className="flex rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack">
      <Box className="flex-col items-center gap-2 ">
        <img src={item.photo} alt=""  />
        <Box className="flex-col">
          <Typography variant="h6">{item.last_name}</Typography>
          <Typography variant="h8">{item.first_name}</Typography>
        </Box>
        <Button variant="contained">Add</Button>
      </Box>
    </Box>
        })
      }
    </Container>
  );
};

export default FriendsAdd;
