import React, { Component } from "react";
import { Images } from "../theme";
import { Link } from "react-router-dom";

class Niro extends Component {
  render() {
    const { hitems } = this.props;
    return (
      <div className="homelft fx fxdc fxjcc fxaic tac">
        <div className="bio">
          <div className="fx fxdr fxjcc fxaic">
            <Link to="/niro">
              <div className="bioimg">
                <img src={Images.bmw} alt="Crassus Niro" />
              </div>
            </Link>
          </div>
          <h1>
            <Link to="/">{hitems[0].name}</Link>
          </h1>
          <h2>
            <Link to="/skills">{hitems[1].name}</Link>
          </h2>
          <h3>{hitems[2].name}</h3>
          {/* {hitems.map(hitem => {
            const { id, name } = hitem;
            return <div key={id}>{name}</div>;
          })} */}
        </div>
      </div>
    );
  }
}

export default Niro;
