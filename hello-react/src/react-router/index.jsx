import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

export default class ReactRouterDemo extends React.Component {
  state = {
    num: 0,
  };

  render() {
    return (
      <>
        <p>
          <span>num:{this.state.num}</span>
          <button
            onClick={() => {
              this.setState({ num: this.state.num + 1 });
            }}
          >
            +1
          </button>
        </p>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="page1">page1</Link>
              </li>
              <li>
                <Link to="page2">page2</Link>
              </li>
              <li>
                <Link to="page3">page3</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>路由页面</p>
            <Switch>
              {/* component */}
              {/* 正确 component */}
              <Route path="/page1" component={Page1}></Route>
              <Route path="/page2" component={Page2}></Route>
              <Route path="/page3" component={Page3}></Route>

              {/* 错误 component */}
              {/* <Route path="/page1" component={() => <Page1 />}></Route>
            <Route path="/page2" component={() => <Page2 />}></Route>
            <Route path="/page3" component={() => <Page3 />}></Route> */}

              {/* children */}
              {/* <Route path="/page1" children={() => <Page1 />}></Route>
            <Route path="/page2" children={() => <Page2 />}></Route>
            <Route path="/page3" children={() => <Page3 />}></Route> */}

              {/* render */}
              {/* <Route path="/page1" render={() => <Page1 />}></Route>
              <Route path="/page2" render={() => <Page2 />}></Route>
              <Route path="/page3" render={() => <Page3 />}></Route> */}
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
