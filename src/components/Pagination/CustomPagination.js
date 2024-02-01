import { ThemeProvider, createTheme } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import React from 'react';

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const whitePaginationTheme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            color: 'white', // Set the color to white
          },
        },
      },
    },
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <ThemeProvider theme={whitePaginationTheme}>
          <Pagination
            count={numOfPages}
            onChange={(e) => handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
            color='primary'
          />
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
