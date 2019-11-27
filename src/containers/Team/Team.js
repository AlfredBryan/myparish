import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/typographyStyle";

import image1 from "../../assets/img/daddy.jpeg";
import image2 from "../../assets/img/mummy.jpeg";
import image3 from "../../assets/img/aspastor.jpeg";

const useStyles = makeStyles(styles);

export default function Team() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h2
                style={{
                  textAlign: "center",
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                Our Leaders
              </h2>
              <hr style={{ width: "5em", border: "3px solid green" }} />
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <h6 className="text-center new_size">
                  Pastor incharge: Pst Peter Elumelu
                </h6>
                <img
                  src={image1}
                  alt="..."
                  className={
                    classes.imgRaised +
                    "resize_image" +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  id="inherit_img"
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h6 className="text-center new_size">
                  Pastor’s Wife : Deaconess Margaret Elumelu
                </h6>
                <img
                  src={image2}
                  alt="..."
                  className={
                    classes.imgRaised +
                    "resize_image" +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  id="inherit_img"
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h6 className="text-center new_size">
                  Assistant Pastor: Pst Ojo Esemokhai Kingsley
                </h6>
                <img
                  src={image3}
                  alt="..."
                  className={
                    classes.imgRaised +
                    "resize_img" +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  id="inherit_img"
                />
              </GridItem>
            </GridContainer>
            <GridContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
