import * as React from "react";
import BaseArticle from "./baseArticle";
import State from "../App";
import Article from "../App";

class ArticleEntry extends React.Component {
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
        <div className="articleBox m-2 articleList">
          <button
            className="btn m-2 btn-sm btn-success"
            onClick={() => this.props.onAddToShoppingCard(this.props.id)}
          >
            In Warenkorb
          </button>
          <button
            className="btn m-2 btn-sm btn-success"
            onClick={() => this.props.onAddToWishList(this.props.id)}
          >
            Auf Merkliste
          </button>
        </div>
      </div>
    );
  }
}

export default ArticleEntry;
