import { Avatar, Container, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import {User} from "../UserData/User"

const Contact = () => {
  const [data,setData]= useState([])
  useEffect(()=>{
    setData(User)
  }, [])

  return (
    <Container className="containerWhite dark:containerDark m-2">
      <Typography variant="h6" className="text-slate-500 dark:text-slate-50">
        Contact
      </Typography>
      <div className='Line'>
     {
      data.map((item)=>{
        return item.isFriend && <button className="OnLine" key={item.id}>
       
        <span></span>
        <Box className="flex items-center">
          <Avatar src={item.photo} className=" m-5"></Avatar>
          <Typography>{item.first_name}</Typography>
        </Box>
      </button>
      })
     }
   

    
     
  
      </div>
     

      
    </Container>
  );
};

export default Contact;
