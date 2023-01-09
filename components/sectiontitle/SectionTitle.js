import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { darkColor, orangeColor } from "../../assets/jss/mui-kit";

const sectionTitleStyle = {
  sectionContainer: {
    marginBottom: "50px",
  },
  subtitle: {
    color: orangeColor,
  },
  title: {
    color: darkColor,
  },
};

const useStyles = makeStyles(sectionTitleStyle);

function SectionTitle(props) {
  const { title, subtitle } = props;
  const classes = useStyles();

  return (
    <div className={classes.sectionContainer}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.subtitle}>{subtitle}</p>
    </div>
  );
}

SectionTitle.PropTypes = {
  description: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
