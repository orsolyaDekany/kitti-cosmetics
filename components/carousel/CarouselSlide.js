import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { darkColor } from "../../assets/jss/mui-kit";
import { slides } from "./CarouselSlide.data";

const useStyles = makeStyles({
  imageSize: {
    maxWidth: "300px",
  },
  root: {
    "&.MuiPaper-root": {
      maxWidth: "500px",
      margin: "auto",
      backgroundColor: darkColor,
    },
  },
});

function CarouselSlide() {
  return (
    <Carousel>
      {slides.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <img src={props.item.src} className={classes.imageSize} />
    </Paper>
  );
}

export default CarouselSlide;
