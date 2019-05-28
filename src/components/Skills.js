import React, { Component } from "react";
import { Link } from "react-router-dom";

class Skills extends Component {
  render() {
    return (
      <div className="homerit fx fxdc fxjcc fxaic">
        <div className="skills">
          <div className="">
            <Link to="/">Skills Summary</Link>
            <hr />
            <p>
              Front-End Development: <br />✓ JavaScript | React | Redux | Redux
              Saga <br />✓ TypeScript | Flow | JSX | Babel | Webpack | SASS/SCSS
            </p>
            <p>
              {
                "Back-End Development:\n✓ Node.js | Express.js | Apollo | Ruby on Rails"
              }
            </p>
            <p>
              {
                "Mobile Development:\n✓ React Native - Native Android & iOS mobile apps development"
              }
            </p>
            <p>{"Unit Testing:\n✓ Jest"}</p>
            <p>
              {
                "Authentication || Authorization:\n✓ JSON Web Tokens (JWT) / OAuth"
              }
            </p>
            <p>
              {"Environments:\n✓ AWS: S3/EC2/ECS | Firebase | Heroku | Docker"}
            </p>
            <p>{"Databases:\n✓ MongoDB | PostgreSQL | GraphQL | MySQL"}</p>
            <p>{"Payment Processing\n✓ Stripe | Braintree/PayPal"}</p>
            <p>
              {
                "Web Scraping/Web crawling\n✓ NodeJS + Puppeteer | Python Scrapy"
              }
            </p>
            <p>
              {
                "Workflow & Version Control\n✓ CI/CD | Pipelines | Git(GitHub or Bitbucket)"
              }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
