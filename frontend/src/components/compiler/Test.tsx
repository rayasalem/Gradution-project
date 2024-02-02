import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextareaAutosize,
  Select,
  MenuItem,
  Paper,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { com } from '../../api/user';

const Compiler: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [userCode, setUserCode] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('java'); // Default language

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await com(userCode, selectedLanguage);
        setApiResponse(response.data);
      } catch (error) {
        console.error(error);
        setApiResponse('Error occurred during API call.');
      }
    };

    fetchData();
  }, [userCode, selectedLanguage]);

  const handleLanguageChange = (
    event: SelectChangeEvent<string>,
  ) => {
    setSelectedLanguage(event.target.value);
  };

  const supportedLanguages = [
    'php',
    'python',
    'c',
    'c_cpp',
    'csharp',
    'kotlin',
    'golang',
    'r',
    'java',
    'typescript',
    'nodejs',
    'ruby',
    'perl',
    'swift',
    'fortran',
    'bash',
  ];

  const transparentCodeWindowStyle = {
    marginBottom: '20px',
    width: '100%',
    padding: '20px',
    borderRadius: '8px',
    marginLeft:'500px',
    marginTop: '20px',
    backgroundColor: 'white', 
  };

  const transparentOutputWindowStyle = {
    width: '100%',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
    marginLeft:'500px',
    backgroundColor: 'white', 
  };

  const themedTextStyle = {
    color: 'green',
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
      maxWidth="800px"
      marginTop="40px"
    >
       <Typography variant="h5" sx={{color:'green',marginLeft:'400px',marginTop:'10px',marginBottom: '20px'}}>
          Welcom To DevLoom Compiler!
        </Typography>
      <Paper elevation={3} sx={transparentCodeWindowStyle}>
       
        <label htmlFor="codeInput" style={themedTextStyle}>
          Enter your code:
        </label>
        <TextareaAutosize
          id="codeInput"
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          minRows={10}
          style={{ width: '100%', backgroundColor: 'transparent', color: '#333' }}
        />
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="languageSelect" style={themedTextStyle}>
            Select language:
          </label>
          <Select
            id="languageSelect"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            label="Select language"
            style={{ width: '100%', backgroundColor: 'transparent', color: '#333' }}
          >
            {supportedLanguages.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </Select>
        </div>
      </Paper>

      <Paper elevation={3} sx={transparentOutputWindowStyle}>
        <Typography variant="h5" sx={themedTextStyle}>
          Output:
        </Typography>
        {apiResponse !== null ? (
          <pre style={{color:'black'}}>{JSON.stringify(apiResponse, null, 2)}</pre>
        ) : (
          <Typography>No output yet. Run your code to see the result.</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Compiler;
