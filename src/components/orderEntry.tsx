import * as React from "react";
import BaseArticle from "./baseArticle";

class OrderEntry extends React.Component {
  render() {
    return (
      <div className="articleBox m-2">
        <BaseArticle
          id={this.props.id}
          name={this.props.name}
          price={this.props.price}
        />
      </div>
    );
  }
}

export default OrderEntry;
