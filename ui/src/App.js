import React, { Component } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from "react-router-dom";

import Client from "./Client";
import playLogo from "./images/play.svg";
import reactLogo from "./images/react.svg";
import scalaLogo from "./images/scala.svg";
import Chart from './components/chart';

import "./App.css";
import ChartLayout from "./components/chartLayout";

const Tech = () => {
  const params = useParams();
  return <div>Current Route: {params.tech}</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  async componentDidMount() {
    Client.getSummary((summary) => {
      this.setState({
        title: summary.content,
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Welcome to {this.state.title}</h1>
          <nav>
            <Link to="scala">
              <img width="400" height="400" src={scalaLogo} alt="Scala Logo" />
            </Link>
            <ChartLayout />
            <Link to="react">
              <img width="400" height="400" src={reactLogo} alt="React Logo" />
            </Link>
          </nav>
          <Routes>
            <Route path="/:tech" element={<Tech />} />
          </Routes>
          <div>
            <h2>Check out the project on GitHub for more information</h2>
            <h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/playframework/play-scala-react-seed"
              >
                play-scala-react-seed
              </a>
            </h3>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
