import { Box, Button, Container, Typography } from "@mui/material";
import groupPhotos from "../../assets/burger.jpg";

const Group = () => {
  return (
    <Container>
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack ">
        <Typography variant="h6" className="text-slate-600 dark:text-slate-50">
          My Groups
        </Typography>
      </Box>
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack">
        <Box className="flex items-center gap-2 justify-between">
          <img src={groupPhotos} alt="" className="w-20" />
          <Box className="flex-col">
            <Typography variant="h6">My Awesome group</Typography>
            <Typography variant="h8">Another Detail for my group</Typography>
          </Box>
          <Button variant="contained">Enter</Button>
        </Box>
      </Box>
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack">
        <Box className="flex items-center gap-2 justify-between">
          <img src={groupPhotos} alt="" className="w-20" />
          <Box className="flex-col">
            <Typography variant="h6">My Awesome group</Typography>
            <Typography variant="h8">Another Detail for my group</Typography>
          </Box>
          <Button variant="contained">Enter</Button>
        </Box>
      </Box>
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack">
        <Box className="flex items-center gap-2 justify-between">
          <img src={groupPhotos} alt="" className="w-20" />
          <Box className="flex-col">
            <Typography variant="h6">My Awesome group</Typography>
            <Typography variant="h8">Another Detail for my group</Typography>
          </Box>
          <Button variant="contained">Enter</Button>
        </Box>
      </Box>
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack">
        <Box className="flex items-center gap-2 justify-between">
          <img src={groupPhotos} alt="" className="w-20" />
          <Box className="flex-col">
            <Typography variant="h6">My Awesome group</Typography>
            <Typography variant="h8">Another Detail for my group</Typography>
          </Box>
          <Button variant="contained">Enter</Button>
        </Box>
      </Box>
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack">
        <Box className="flex items-center gap-2 justify-between">
          <img src={groupPhotos} alt="" className="w-20" />
          <Box className="flex-col">
            <Typography variant="h6">My Awesome group</Typography>
            <Typography variant="h8">Another Detail for my group</Typography>
          </Box>
          <Button variant="contained">Enter</Button>
        </Box>
      </Box>
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack">
        <Box className="flex items-center gap-2 justify-between">
          <img src={groupPhotos} alt="" className="w-20" />
          <Box className="flex-col">
            <Typography variant="h6">My Awesome group</Typography>
            <Typography variant="h8">Another Detail for my group</Typography>
          </Box>
          <Button variant="contained">Enter</Button>
        </Box>
      </Box>
      <Box className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack">
        <Box className="flex items-center gap-2 justify-between">
          <img src={groupPhotos} alt="" className="w-20" />
          <Box className="flex-col">
            <Typography variant="h6">My Awesome group</Typography>
            <Typography variant="h8">Another Detail for my group</Typography>
          </Box>
          <Button variant="contained">Enter</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Group;
