import * as React from "react";
import ArticleEntry from "./articleEntry";

class ArticleList extends React.Component {
  render() {
    const {
      onClearAll,
      articleList,
      onDelete,
      onIncrement,
      onClear,
      onAddToShoppingCard,
      onAddToWishList
    } = this.props;

    return (
      <div className="articleList articleBox m-2">
        <button className="btn m-2 btn-primary btn-sm" onClick={onClearAll}>
          Reset All
        </button>
        <div className="listElement">
          {articleList.map(article => (
            <ArticleEntry
              key={article.id}
              id={article.id}
              name={article.name}
              price={article.price}
              onAddToShoppingCard={onAddToShoppingCard}
              onAddToWishList={onAddToWishList}
            />
            /*<Article
            key={article.id}
            article={article}
            onDelete={onDelete}
            onClick={onIncrement}
            onClear={onClear}
          />*/
          ))}
        </div>
      </div>
    );
  }
}

export default ArticleList;
