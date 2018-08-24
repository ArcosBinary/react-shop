import * as React from "react";
import WishListEntry from "./wishListEntry";

class WishList extends React.Component {
  render() {
    const filteredWishListArticles = this.props.articleList.filter(article =>
      this.props.wishListArticles.includes(article.id)
    );
    return (
      <div className="wishList articleBox m-2">
        <h1>Merkliste</h1>
        <div className="listElement">
          {filteredWishListArticles.map(article => (
            <WishListEntry
              key={article.id}
              id={article.id}
              name={article.name}
              price={article.price}
              onMoveToShoppingCard={this.props.handleMoveToShoppingCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default WishList;
