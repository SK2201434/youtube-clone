import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import { FetchFromApi } from './utils/FetchFromApi';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log(searchTerm);
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        // Ensure searchTerm is properly decoded
        
        const apiUrl = `search?part=snippet&q=${searchTerm}`;
        console.log('API URL:', apiUrl);

        const data = await FetchFromApi(apiUrl);
        console.log('API Response:', data);

        // Ensure 'data' is defined before trying to access 'items'
        if (data && data.items) {
          setVideos(data.items);
        } else {
          console.error("API response is missing expected data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
