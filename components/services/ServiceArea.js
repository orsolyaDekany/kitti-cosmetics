import React from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const ServiceStyle = {
  imageWrapper: {
    margin: "2em 0 .5em",
  },
  serviceArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px",
  },
  descriptionWrapper: {
    color: "black",
  },
  title: {
    marginTop: "0em",
  },
  description: {
    color: "black",
    overflow: "hidden",
    margin: "0 1em 0 1em",
  },
};

const useStyles = makeStyles(ServiceStyle);

function ServiceArea(props) {
  const { description, image, title } = props;
  const classes = useStyles();

  return (
    <div className={classes.serviceArea}>
      <div className={classes.imageWrapper}>
        <div
          style={{
            backgroundImage: "url(" + image + ")",
            height: "200px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className={classes.descriptionWrapper}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

ServiceArea.PropTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default ServiceArea;
