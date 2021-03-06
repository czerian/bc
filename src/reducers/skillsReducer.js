import { SKILLS } from "../actions/types";

const initialState = {
  greens: [
    { id: 1, skillt: "Front-End Development:", skilld: "✔ JavaScript | React (including Hooks & Context)\n✔ Redux (including Hooks) | Redux Saga | Redux Thunk\n✔ React Router | Styled Components | Storybook \n✔ React Spring | React Transition Group\n✔ Next.js | Gatsby\n✔ Formik | Final-Form | Redux-Form\n✔ TypeScript | Flow | JSX | Babel | Webpack | Sass" },
    { id: 2, skillt: "Back-End Development:", skilld: "✔ Node.js | Express.js | Ruby on Rails | Socket.io\n✔ REST APIs | GraphQL | Apollo" },
    { id: 3, skillt: "Mobile Development:", skilld: "✔ React Native - Native Android & iOS mobile apps development" },
    { id: 4, skillt: "Unit Testing:", skilld: "✔ Jest" },
    { id: 5, skillt: "Authentication || Authorization:", skilld: "✔ JSON Web Tokens (JWT) | OAuth | Single Sign-On (SSO)" },
    { id: 6, skillt: "Environments || DevOps:", skilld: "✔ AWS: S3/EC2/ECS | Firebase | Heroku | Docker | Netlify" },
    { id: 7, skillt: "Databases:", skilld: "✔ MongoDB | PostgreSQL | MySQL | Cloud Firestore" },
    { id: 8, skillt: "Payment Processing:", skilld: "✔ Stripe | Braintree/PayPal" },
    { id: 9, skillt: "Web Scraping/Web crawling:", skilld: "✔ NodeJS + Puppeteer | Python Scrapy" },
    { id: 10, skillt: "Workflow & Version Control:", skilld: "✔ CI/CD | Pipelines | Git(GitHub/Bitbucket) | CircleCI" },
  ],
};

// { id: 4, skillt: "Unit Testing:", skilld: "✓ Jest \n✔︎ Backend \n✅ Trello" },

export default function(state = initialState, action) {
  switch (action.type) {
    case SKILLS:
      return { ...state };
    default:
      return state;
  }
}
