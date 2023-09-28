import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import GrainIcon from '@mui/icons-material/Grain';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from "react";
import {User} from "../UserData/User"


const Message = (props) => {
  const [data,setData]= useState([])
  const [loadign, setLoadign]= useState(false)
  useEffect(()=>{
    setLoadign(true)
    setData(User)
    setLoadign(false)
  }, [data])
  return (
    <Container>
      <Box className='flex justify-between'>
        <Typography variant='h4'>Discussion...</Typography>
        
        <IconButton><GrainIcon/></IconButton>
        <IconButton onClick={props.close}><CloseIcon/></IconButton>
      </Box>
    {
      loadign? 'Loading...': data.map((item)=>{
        return item.message &&   <Box key={item.id} className='mesShow dark:mesShowDark flex gap-2 items-center p-4 my-2 border-y-2 rounded-md dark:border-y-0'>
        <Avatar src={item.photo}></Avatar>
        <Box >
        <Typography fontSize={20}>{item.first_name} </Typography>
        <Typography fontSize={13}>{item.message}</Typography>
        </Box>
        <IconButton><ArrowForwardIosIcon/></IconButton>
      </Box> 
      })
    }
    
     
      

      
     
    </Container>
  );
};

export default Message;
