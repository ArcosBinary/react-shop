import * as React from "react";
import ShoppingCardEntry from "./shoppingCardEntry";
import Article from "../App";

class ShoppingCard extends React.Component {
  render() {
    // doesn't work with access to state because the current value is passed
    // via props and the state is only set once on initializing
    const filteredShoppingCardArticles = this.props.articleList.filter(
      (article: Article) => this.props.shoppingCardArticles.includes(article.id)
    );
    return (
      <div className="shoppingCard articleBox m-2">
        <h1>Einkaufswagen</h1>
        <div className="listElement">
          {filteredShoppingCardArticles.map((article: Article) => (
            <ShoppingCardEntry
              key={article.id}
              id={article.id}
              name={article.name}
              price={article.price}
              onRemoveFromShoppingCard={this.props.onRemoveFromShoppingCard}
            />
          ))}
          <button
            className="btn m-2 btn btn-success"
            onClick={() => this.props.onExecuteOrder()}
          >
            Bestellen
          </button>
        </div>
      </div>
    );
  }
}

export default ShoppingCard;
