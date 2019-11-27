import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";

import image1 from "../../assets/img/carou1.png";
import image2 from "../../assets/img/carou2.png";
import image3 from "../../assets/img/carou3.png";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/carouselStyle";
import "./style.css";

const useStyles = makeStyles(styles);

const items = [
  {
    src: image1,
    altText: <i class="fa fa-map-marker"></i>,
    caption: "Emadeb Energy"
  },
  {
    src: image2,
    altText: <i class="fa fa-map-marker"></i>,
    caption: "Same Building With Slot"
  },
  {
    src: image3,
    altText: <i class="fa fa-map-marker"></i>,
    caption: "Fountain Of Power"
  }
];

export default function SectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carou_img" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionHeader={item.caption}
          captionText={item.altText}
        />
      </CarouselItem>
    );
  });
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "'Playfair Display', serif"
          }}
        >
          Where We Worship
        </h1>
        <hr style={{ width: "10em", border: "3px solid green" }} />
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
