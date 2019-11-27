import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import NavPills from "../../components/NavPills/NavPills";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/pillsStyle";

const useStyles = makeStyles(styles);

export default function ChurchActivity() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div>
          <div className="text-center" id="navigation-pills">
            <div className={classes.title}>
              <h3 className="church_act">Church Activities</h3>
              <hr style={{ width: "10em", border: "3px solid green" }} />
            </div>
            <div className="align_activity">
              <div className="align_center">
                <GridContainer>
                  <GridItem xs={12} sm={12} md={8} lg={6}>
                    <NavPills
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Weekly",
                          tabIcon: Dashboard,
                          tabContent: (
                            <span className="church_text">
                              <p>
                                Tuesdays: Digging Deep <br />
                                This is the time we study the word of God in
                                depth
                              </p>
                              <br />
                              <p>
                                Thurdays: Faith Clinic <br />
                                This is a clinic where prayer is the medicine we
                                come together and pray until something happens
                              </p>
                              <br />
                              <p>
                                Sundays: Sunday Service <br />
                                Sunday School: Starts from 8am - 8:55am Service:
                                Starts by 9am prompt
                              </p>
                            </span>
                          )
                        },
                        {
                          tabButton: "Schedule",
                          tabIcon: Schedule,
                          tabContent: (
                            <span className="church_text">
                              Digging Deep: 6:30pm - 8:30pm
                              <p>Faith Clinic: 6:30pm - 8:30pm</p>
                              <p>Sunday Service: 8am - 11:30am</p>
                            </span>
                          )
                        },
                        {
                          tabButton: "Tasks",
                          tabIcon: List,
                          tabContent: (
                            <span className="church_text">
                              <p>Fast And Pray</p>
                              <br />
                              <p>
                                Join the church in prayers and always support
                                them with your attendance
                              </p>
                              <br />
                              <p>
                                Never forget the Heavenly Race <br />
                                Have you been{" "}
                                <span style={{ color: "red" }}>Saved.</span>
                              </p>
                            </span>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
