
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import BasicTabs from './Tab';

const Nurse = () => {
    return(
        <>
            <Navbar />
            <Box height={30}/>
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <BasicTabs />
                </Box>
            </Box>
        </>
    )
}

export default Nurse