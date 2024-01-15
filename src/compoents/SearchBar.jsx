import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper,IconButton } from "@mui/material";
import {Search} from '@mui/icons-material';

const SearchBar = () => {
  const [search, setsearch] = useState('');
  const handleInputChange = (e) =>{
    setsearch(e.target.value);
  }

  return (
    <Paper
    component = "form"
    onSubmit ={()=>{}}
    sx={{
        borderRadius :20,
        border: '1px solid #e3e3e3',
        pl:2,
        boxShadow : 'none',
        mr:{ sm :5}
    }}
    >
    <input
    className= "search-bar"
    placeholder="Search..."
    value = {search}
    onChange={handleInputChange}
    />
    <IconButton type="submit" sx ={
       { p:'10px',color:'red'}}>
       <Search/> 
    </IconButton> 

    </Paper>
  )
}

export default SearchBar