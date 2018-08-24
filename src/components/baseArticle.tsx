import * as React from "react";
import State from "../App";

class BaseArticle extends React.Component {
  render() {
    return (
      <div className="baseArticle">
        <div className="articleBox m-2">
          <img src={this.getUniqueUrl()} />
        </div>
        <div className="articleBox m-2">
          <h2>{this.props.name}</h2>
          <h5>{this.props.price}$</h5>
        </div>
      </div>
    );
  }
  getUniqueUrl() {
    let url = "https://picsum.photos/100/80?image=";
    url += this.props.id;
    return url;
  }
}

export default BaseArticle;
