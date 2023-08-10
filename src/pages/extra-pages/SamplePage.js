import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import { spacing } from '@mui/system';

// import { Tablecomponent } from './tablecomponent/Tablecomponent'
export default function SamplePage() {
  // const [divbool, setdivbool] = useState(false)
  // values to be mapped in form
  const selectvalues = [
    {
      value: '1',
      label: 'i have',
    },

    {
      value: '0',
      label: 'i dont have',
    },
  ];


  return (
    <div className="content-wrapper">
      <h1>Challan Insurance</h1>
      <Button variant="contained" >Hello World</Button>

      {/* // first div containing challan num , job worker and add items button */}
      <div className='first div'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />

          <TextField id="standard-basic" label="Standard" variant="standard" />
          <Button variant="text">+Add items</Button>
        </Box>
      </div>
      {/* first div finished */}

      {/* 2nd div showing items only when add items button is clicked */}
      <div className='2nd div' >

        {/* adding 2 inner div for better structuring */}
        <div className='all select fields of 1st line'>
          <TextField
            id="standard-select-currency"
            select
            label="Style no"
            defaultValue="Style no"
            helperText="Please select your currency"
            variant="standard"
          >
            {selectvalues.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="standard-select-currency"
            select
            label="Style code"
            defaultValue="Syle code"
            helperText="Please select your currency"
            variant="standard"
          >
            {selectvalues.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="standard-select-currency"
            select
            label="HSn code"
            defaultValue="HSn code"
            helperText="Please select your currency"
            variant="standard"
          >
            {selectvalues.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="standard-select-currency"
            select
            label="bill number"
            defaultValue="bill no"
            helperText="Please select your currency"
            variant="standard"
          >
            {selectvalues.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="standard-select-currency"
            select
            label="colour"
            defaultValue="colour"
            helperText="Please select your currency"
            variant="standard"
          >
            {selectvalues.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

        </div>
        <div className='all select fields of 2nd line'>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
        </div>
        <div className='submit buttons '>
          <Button variant="contained" >Submit</Button>
          <Button variant="contained" >Cancel</Button>
        </div>
        <div className='form-table'>
          {/* <Tablecomponent /> */}
        </div>

      </div>

    </div>
  );
}
