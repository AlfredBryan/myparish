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
        <div className="pastor_area">
          <div className="pastor_title">
            <h1>
              Fountain of Power
            </h1>
            <h4 className="text-center">Pastor incharge: Pst Peter Elumelu </h4>
            <p style={{ color: "green", textAlign: "center" }}>
              An Anointed man of God
            </p>
          </div>
          <div className="pastor_img">
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
