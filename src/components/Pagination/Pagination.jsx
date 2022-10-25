import React from 'react';
import { Typography, Button } from '@mui/material';
import { KeyboardDoubleArrowRight as ArrowRight, KeyboardDoubleArrowLeft as ArrowLeft } from '@mui/icons-material';
import useStyles from './styles';

function Pagination({ currentPage, setPage, totalPages }) {
  const classes = useStyles();

  const handlePrev = () => {
    if (currentPage !== 1) { setPage((prevPage) => prevPage - 1); }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) { setPage((prevPage) => prevPage + 1); }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button disabled={currentPage === 1} onClick={handlePrev} variant="contained" className={classes.button} color="primary" type="button">
        <ArrowLeft />
      </Button>
      <Typography variant="h5" className={classes.pageNumber}>{currentPage}</Typography>
      <Button onClick={handleNext} variant="contained" className={classes.button} color="primary" type="button">
        <ArrowRight />
      </Button>
    </div>
  );
}

export default Pagination;
