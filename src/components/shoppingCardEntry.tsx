import * as React from "react";
import BaseArticle from "./baseArticle";

class ShoppingCardEntry extends React.Component {
  render() {
    return (
      <div className="articleBox m-2 listItem">
        <div className="articleBox m-2">
          <BaseArticle
            id={this.props.id}
            name={this.props.name}
            price={this.props.price}
          />
        </div>
        <div className="articleBox m-2">
          <button
            className="btn m-2 btn-sm btn-danger"
            onClick={() => this.props.onRemoveFromShoppingCard(this.props.id)}
          >
            Entfernen
          </button>
        </div>
      </div>
    );
  }
}

export default ShoppingCardEntry;
