import { RESUME_ABOUT, RESUME_DEV, RESUME_EDUCATION, RESUME_PROFILE, RESUME_SKILLS } from "../actions/types";

const iState = {
    dev: [
      { id: 1, name: "Bryan Czar Muli" },
      { id: 2, name: "Full-Stack JavaScript Engineer" },
      { id: 3, name: "(JavaScript/React/Redux/React Native/Node.js) + Rails" },
    ],
    skills: [
        { id: 1, skillt: "Front-End Development:", skilld: "✓ JavaScript | React (including Hooks & Context)\n✓ Redux (including Hooks) | Redux Saga | Redux Thunk\n✓ React Router | Styled Components | Storybook \n✓ React Spring | React Transition Group\n✓ TypeScript | Flow | JSX | Babel | Webpack | SASS/SCSS" },
        { id: 2, skillt: "Back-End Development:", skilld: "✓ Node.js | Express.js | Ruby on Rails | REST APIs | GraphQL | Apollo" },
        { id: 3, skillt: "Mobile Development:", skilld: "✓ React Native - Native Android & iOS mobile apps development" },
        { id: 4, skillt: "Unit Testing:", skilld: "✓ Jest" },
        { id: 5, skillt: "Authentication || Authorization:", skilld: "✓ JSON Web Tokens (JWT) | OAuth | Single Sign-On (SSO)" },
        { id: 6, skillt: "Environments || DevOps:", skilld: "✓ AWS: S3/EC2/ECS | Firebase | Heroku | Docker" },
        { id: 7, skillt: "Databases:", skilld: "✓ MongoDB | PostgreSQL | MySQL" },
        { id: 8, skillt: "Payment Processing:", skilld: "✓ Stripe | Braintree/PayPal" },
        { id: 9, skillt: "Web Scraping/Web crawling:", skilld: "✓ NodeJS + Puppeteer | Python Scrapy" },
        { id: 10, skillt: "Workflow & Version Control:", skilld: "✓ CI/CD | Pipelines | Git(GitHub or Bitbucket)" },
      ],
    about: { me: "I am a self-motivated, innovative, proactive and achievement orientedindividual, also highly Knowledgeable in various professional fields.\n I'm a seasoned developer with over 7 years experience building robust applications. I have an all round knowledge of the web environment and various web technologies.\n I am ready to apply my skills, experience and background to a challenging and stimulating situation, enabling me to make positive contribution in making peoples lives better." }

  };

export default function(state = iState, action) {
  switch (action.type) {
    case RESUME_ABOUT:
        return { ...state };
    case RESUME_DEV:
        return {
            ...state,

        };
    case RESUME_EDUCATION:
        return {
            ...state,

        };
    case RESUME_PROFILE:
        return {
            ...state,

        };
    case RESUME_SKILLS:
        return { ...state }; 
    default:
      return state;
  }
}
