import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const CompilerPage: React.FC = () => {
  const [clickedButton, setClickedButton] = useState('');

  const compileCode = (language: string) => {
    let url = '';
    switch (language) {
      case 'Python':
        url = 'https://www.sololearn.com/en/compiler-playground/python';
        break;
      case 'Java':
        url = 'https://www.sololearn.com/en/compiler-playground/java';
        break;
      case 'HTML':
        url = 'https://www.sololearn.com/en/compiler-playground/html';
        break;
      case 'JavaScript':
        url = 'https://www.sololearn.com/en/compiler-playground/javascript';
        break;
      case 'CSS':
        url = 'https://www.sololearn.com/en/compiler-playground/css';
        break;
      default:
        break;
    }
    if (url) {
      window.location.href = url;
    }
  };

  const buttonStyle = {
    width: '25%',
    height: '50px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0px 5px 0px #2E8026, 0px 8px 6px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out',
    '&:hover': {
      transform: 'scale(1.1)', // Change in scale on hover
      width: '35%',
      height: '55px',
    },
  };

  const clickedButtonStyle = {
    ...buttonStyle,
    background: '#282c34',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08)',
    '&:hover': {
      transform: 'scale(1.1)', // Change in scale on hover
      width: '35%',
      height: '55px',
    },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          backgroundColor: 'black',
          minHeight: '100vh',
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <div className="heading">
          <h1 style={{ color: 'white', marginBottom: '20px', fontSize: '29px', textAlign: 'center', alignItems: 'center', width: '100%', paddingLeft: '20px' }}>Welcome to the Code Compiler</h1>
          <h6 style={{ color: 'white', marginBottom: '20px', fontSize: '16px', textAlign: 'center', alignItems: 'center', width: '100%', paddingLeft: '20px' }}>Our free online code editor supports all the major programming languages, whether you're editing HTML, CSS and JavaScript, running Python, C++, or Go, or compiling Java. Pick a language to get started! (You can change the coding language anytime within the compiler.)</h6>
          <h1 style={{ color: 'white', marginBottom: '20px', fontSize: '29px', textAlign: 'center', alignItems: 'center', width: '100%', paddingLeft: '20px' }}>Choose your programming language to start</h1>

          <div>
            <h2 style={{ color: 'white', marginBottom: '10px', fontSize: '20px', marginLeft: '0' }}>Most Popular Compilers</h2>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
              <Button
                variant="contained"
                onClick={() => compileCode('Python')}
                style={clickedButton === 'Python' ? clickedButtonStyle : buttonStyle}
                className={clickedButton === 'Python' ? 'clicked' : ''}
              >
                Python
              </Button>
              <Button
                variant="contained"
                onClick={() => compileCode('Java')}
                style={clickedButton === 'Java' ? clickedButtonStyle : buttonStyle}
                className={clickedButton === 'Java' ? 'clicked' : ''}
              >
                Java
              </Button>
              <Button
                variant="contained"
                onClick={() => compileCode('HTML')}
                style={clickedButton === 'HTML' ? clickedButtonStyle : buttonStyle}
                className={clickedButton === 'HTML' ? 'clicked' : ''}
              >
                HTML
              </Button>
            </div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <h2 style={{ color: 'white', marginBottom: '10px', fontSize: '20px', marginLeft: '0' }}>Other Compilers</h2>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
              <Button
                variant="contained"
                onClick={() => compileCode('JavaScript')}
                style={clickedButton === 'JavaScript' ? clickedButtonStyle : buttonStyle}
                className={clickedButton === 'JavaScript' ? 'clicked' : ''}
              >
                JavaScript
              </Button>
              <Button
                variant="contained"
                onClick={() => compileCode('CSS')}
                style={clickedButton === 'CSS' ? clickedButtonStyle : buttonStyle}
                className={clickedButton === 'CSS' ? 'clicked' : ''}
              >
                CSS
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default CompilerPage;
