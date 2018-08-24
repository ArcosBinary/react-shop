import * as React from "react";
import OrderEntry from "./orderEntry";

class OrderList extends React.Component {
  render() {
    const orders = this.props.orderList.map(order => ({
      articles: this.props.articleList.filter(article =>
        order.articles.includes(article.id)
      ),
      address: order.address
    }));

    return (
      <div>
        <h2>Bestellübersicht</h2>
        {orders.map(order => (
          <div className="articleBox m-2 listItem">
            {order.articles.map(article => (
              <div>
                <OrderEntry
                  key={article.id}
                  id={article.id}
                  name={article.name}
                  price={article.price}
                />
              </div>
            ))}
            <h4>{order.address}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default OrderList;
