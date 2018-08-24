import * as React from "react";
import BaseArticle from "./baseArticle";

class WishListEntry extends React.Component {
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
            onClick={() => this.props.onRemoveFromWishList(this.props.id)}
          >
            Entfernen
          </button>
          <button
            className="btn m-2 btn-sm btn-success"
            onClick={() => this.props.onMoveToShoppingCard(this.props.id)}
          >
            In Warenkorb
          </button>
        </div>
      </div>
    );
  }
}

export default WishListEntry;
