import * as React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import ArticleList from "./components/articleList";
import ShoppingCard from "./components/shoppingCard";
import WishList from "./components/wishList";
import OrderList from "./components/orderList";

interface Article extends React.Props<any>{
  id: number;
  name: string;
  price: number;
}

interface Address extends React.Props<any>{
  city: string;
  street: string;
}

interface Order extends React.Props<any>{
  articles: number[];
  address: Address;
}

interface State extends React.Props<any>{
  articleList: Article[];
  shoppingCardArticles: number[];
  wishListArticles: number[];
  orderList: Order[];
}

class App extends React.Component<{}, State> {
  public state = {
    articleList: [
      { id: 1, name: "Fancy Laptop", price: 400 },
      { id: 2, name: "Normal Laptop", price: 740 },
      { id: 3, name: "Fast Laptop", price: 760 },
      { id: 4, name: "Slow Laptop", price: 990 },
      { id: 5, name: "Cränk Laptop", price: 390 },
      { id: 6, name: "Laptop", price: 1200 },
      { id: 7, name: "Broken Laptop", price: 99 },
      { id: 8, name: "Moderate Laptop", price: 800 }
    ],
    shoppingCardArticles: [],
    wishListArticles: [],
    orderList: []
  };

  // constructor(props) {
  //   // first lifecycle hook, assign state directly here, setState is available later
  //   super(props);
  // }

  componentDidMount() {
    // second lifecycle hook
    // Ajax calls e.g.
    this.setState({});
  }

  handleDelete = (articleId: number) => {
    const articleList = this.state.articleList.filter(c => c.id !== articleId);

    this.setState({ articleList });
  };

  handleIncrement = (article: Article) => {
    // this.setState({
    //   articleList: this.state.articleList.map(c => {
    //     if (article.id === c.id) c.value++;
    //     return c;
    //   })
    // });
  };

  handleClear = (article: Article) => {
    // this.setState({
    //   articleList: this.state.articleList.map(c => {
    //     if (article.id === c.id) c.value = 0;
    //     return c;
    //   })
    // });
  };

  handleClearAll = () => {
    // const articleList = this.state.articleList.map(c => {
    //   c.value = 0;
    //   return c;
    // });
    // this.setState({ articleList });
  };

  handleExecuteOrder = () => {
    this.clearShoppingCard();
    this.storeOrder({
      city: "DE",
      street: "Fritz-Försterplatz 2"
    });
  };

  clearShoppingCard = () => {
    this.setState({ shoppingCardArticles: [] });
  };

  storeOrder = (address: Address) => {
    // store the order with address
    const orderList = [
      ...this.state.orderList,
      {
        articles: this.state.shoppingCardArticles,
        address: address
      }
    ];
    this.setState({ orderList });
  };

  handleAddToShoppingCard = (articleId: number) => {
    const shoppingCardArticles = [
      ...this.state.shoppingCardArticles,
      articleId
    ];
    this.setState({ shoppingCardArticles });
  };

  handleAddToWishList = (articleId: number) => {
    const wishListArticles = [...this.state.wishListArticles, articleId];
    this.setState({ wishListArticles });
  };

  handleRemoveFromShoppingCard = (articleId: number) => {
    const shoppingCardArticles = this.state.shoppingCardArticles.filter(
      id => id !== articleId
    );

    this.setState({ shoppingCardArticles });
  };

  handleRemoveFromWishList = (articleId: number) => {
    const wishListArticles = this.state.wishListArticles.filter(
      id => id !== articleId
    );
    this.setState({ wishListArticles });
  };

  render() {
    // called after constructor and before mounting
    // renders all child components before calling the mount method
    return (
      <React.Fragment>
        <NavBar articleList={this.state.articleList} />
        <main className="wrapper">
          <ArticleList
            articleList={this.state.articleList}
            onAddToShoppingCard={this.handleAddToShoppingCard}
            onAddToWishList={this.handleAddToWishList}
            onClear={this.handleClear}
            onClearAll={this.handleClearAll}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
          <div>
            <WishList
              articleList={this.state.articleList}
              wishListArticles={this.state.wishListArticles}
              shoppingCardArticles={this.state.shoppingCardArticles}
              onRemoveFromWishList={this.handleRemoveFromWishList}
              onMoveToShoppingCard={this.handleMoveToShoppingCard}
            />
            <ShoppingCard
              articleList={this.state.articleList}
              shoppingCardArticles={this.state.shoppingCardArticles}
              onRemoveFromShoppingCard={this.handleRemoveFromShoppingCard}
              onExecuteOrder={this.handleExecuteOrder}
            />
            <OrderList
              orderList={this.state.orderList}
              articleList={this.state.articleList}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
