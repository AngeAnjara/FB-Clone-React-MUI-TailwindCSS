import { Container, Typography,Box, Avatar } from "@mui/material"

const VosPages = () => {
  return (
    <Container className="containerWhite dark:containerDark m-2">
        <Typography variant="h6" className="text-slate-500 m-2 dark:text-slate-50">Vos Pages</Typography>
        <Box className='flex items-center gap-1 m-5'> 
            <Avatar>P</Avatar>
            <Typography  className="text-slate-500  dark:text-slate-50">My Page</Typography>
        </Box>
        <Box className='flex items-center gap-1 m-5'> 
            <Avatar>S</Avatar>
            <Typography  className="text-slate-500  dark:text-slate-50">Best Page</Typography>
        </Box>
        <Box className='flex items-center gap-1 m-5'> 
            <Avatar>D</Avatar>
            <Typography  className="text-slate-500  dark:text-slate-50">Awesome Page</Typography>
        </Box>
    </Container>
  )
}

export default VosPages