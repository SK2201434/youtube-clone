import {useState,useEffect} from 'react';
import{Box, Stack,Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { FetchFromApi } from './utils/FetchFromApi';

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        // Ensure 'data' is defined before trying to access 'items'
        if (data && data.items) {
          setVideos(data.items);
        } else {
          console.error("API response is missing expected data structure:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCategory]);
  
  
  
  
  return (
    <Stack sx={{
      flexDirection:{sx:"column",md:"row"}}}>
        <Box sx={{height:{sx:'auto',md:'92vh'}, borderRight: '1px solid #3d3d3d',px:{sx:0, md:2}}}>
          <Sidebar
          selectedCategory = {selectedCategory}
          setSelectedCategory={setSelectedCategory}
          /> 

          <Typography className="copyright"
          variant="body2" sx={{mt:1.5,
          color:'#fff'}}>
            copyright 2022 satish
          </Typography>
        </Box>

        <Box p={2} sx={{overflowY: 'auto',
          height:'90vh',flex:2}}>
          <Typography variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{color:'white'}}>
            {selectedCategory} <span style={{color:'#F31503'}}
            >videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed