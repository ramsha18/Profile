import React from "react";
import "./profile.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function profile() {
  return (
    <Router>
      <div id="container">
        <header>
          <div className="quoteoftheday">Profile</div>
          <div className="name">Ramsha</div>
        </header>

        <article>
          <div className="quote">
            <h1>Make it work, Make it Right, Make it Fast.</h1>
          </div>

          <div className="quoteby">
            <h4>Ramsha Hassan</h4>
          </div>
        </article>

        <footer>
          <div className="skills">
            <h6>Menu</h6>
            <ul>
              <li>
                <Link to="/">Introduction</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/experience">Professional Experience</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/">
              <div className="content">
                <p>
                  Student at University Of Karachi, UBIT department, doing Bs in
                  Software Engineering, Currently in my Final Year.
                </p>
              </div>
            </Route>
            <Route path="/education">
              <div className="content">
                <p>
                  University Of Karachi
                  <br />
                  Bs(Software Engineering)
                </p>
                <br />
                <p>Alevel's: Whales College</p>
              </div>
            </Route>
            <Route path="/experience">
              <div className="content">
                <p>6 weeks Internship at JS-Bank IT-Department in Asp.Net</p>
                <br />
                <p>6 weeks Online Internship at Interns.Pakistan</p>
              </div>
            </Route>
            <Route path="/contact">
              <div className="content">
                <p>
                  <a
                    href="https://www.linkedin.com/in/ramsha-hassan-2582711a2/"
                    target="_black"
                  >
                    LinkedIn Profile
                  </a>
                </p>
                <p>
                  <a href="https://github.com/ramsha18" target="_black">
                    GitHub Profile
                  </a>
                </p>
              </div>
            </Route>
            *+
          </Switch>
        </footer>
      </div>
    </Router>
  );
}

export default profile;
