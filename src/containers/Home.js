import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import Parallax from "../components/Parallax/Parallax";
// sections for this page
import HeaderLinks from "../components/Header/HeaderLinks";

import styles from "../assets/jss/material-kit-react/views/components";
import SectionBasics from "./SectionBasics/SectionBasics";
import SectionBasicsTwo from "./SectionBasicsTwo/SectionBasicsTwo";
import SectionCarousel from "./SectionCarousel/SectionCarousel";
import ChurchActivity from "./ChurchActivity/ChurchActivity";

import "./style.css";
import Pastor from "./Pastor/Pastor";
import Team from "./Team/Team";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("../assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  className="logo_bg"
                  src={require("../assets/img/recently.png")}
                  alt="bgimage"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div className={classes.brand}>
                  <h1 className="first_header">Fountain Of Power</h1>
                  <h3 className="first_title">
                    Jesus Christ is the same yesterday and today and forever.
                    Hebrews 13:8
                  </h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionBasicsTwo />
        <SectionCarousel />
        <ChurchActivity />
        <Pastor />
        <Team />
        <GridItem md={12} className={classes.textCenter}>
          {/* <Link to={"/login_page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link> */}
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}
