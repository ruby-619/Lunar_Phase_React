import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// 以下為瀑布流套件的內容

class App extends React.Component {
  state = {
    items: Array.from({ length: 4 }),
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 4 })),
      });
    }, 1500);
  };

  render() {
    return (
      <div style={{ width: "1200px" }} className="container">
        <div
          id="scrollableDiv"
          style={{ width: 1200, height: 200, overflow: "auto" }}
          className="mx-auto"
        >
          <InfiniteScroll
            className="mx-auto"
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4 className="mx-auto text-center">Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            <>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginLeft: "-48px",
                  marginRight: "78px",
                }}
              >
                {this.state.items.map((i, index) => (
                  <div
                    style={{
                      width: "40%",
                      height: 200,
                      border: "1px solid green",
                      margin: "auto",
                    }}
                    key={index}
                  >
                    1
                    {/* div - #{index}
                  Anim voluptate quis culpa consequat adipisicing labore
                  commodo.Deserunt esse ut culpa magna. */}
                  </div>
                ))}
              </div>
            </>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
