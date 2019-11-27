import React, { Component } from "react";

import Card from "../../components/Card/Card";

export class Pastor extends Component {
  render() {
    return (
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "'Playfair Display', serif"
          }}
        >
          Our Daddy
        </h1>
        <hr style={{ width: "10em", border: "3px solid green" }} />
        <div className="row">
          <div className="col-md-6">
            <h1 style={{ marginTop: "5em" }} className="text-center">
              Fountain of Power
            </h1>
            <h4 className="text-center">Pastor incharge: Pst Peter Elumelu </h4>
            <p style={{ color: "green" }} className="text-center">
              An Anointed man of God
            </p>
          </div>
          <div className="col-md-6">
            <Card className="new_card_width">
              <img
                className="daddy_incharge"
                src={require("../../assets/img/daddymain.jpeg")}
                alt=""
              />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Pastor;
