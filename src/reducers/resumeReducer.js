import { RESUME_ABOUT, RESUME_DEV, RESUME_EDUCATION, RESUME_PROFILE, RESUME_SKILLS } from "../actions/types";

const iState = {
    dev: [
      { id: 1, name: "Bryan Czar Muli" },
      { id: 2, name: "Full-Stack JavaScript Engineer" },
      { id: 3, name: "(JavaScript/React/Redux/React Native/Node.js) + Rails" }
    ],
    skills: [
        { id: 1, skillt: "Front-End Development:", skilld: "✔ JavaScript | React (including Hooks & Context)\n✔ Redux (including Hooks) | Redux Saga | Redux Thunk\n✔ React Router | Styled Components | Storybook \n✔ React Spring | React Transition Group\n✔ Next.js | Gatsby\n✔ Formik | Final-Form | Redux-Form\n✔ TypeScript | Flow | JSX | Babel | Webpack | Sass" },
        { id: 2, skillt: "Back-End Development:", skilld: "✔ Node.js | Express.js | Ruby on Rails | Socket.io\n✔ REST APIs | GraphQL | Apollo" },
        { id: 3, skillt: "Mobile Development:", skilld: "✔ React Native - Native Android & iOS mobile apps development" },
        { id: 4, skillt: "Unit Testing:", skilld: "✔ Jest" },
        { id: 5, skillt: "Authentication || Authorization:", skilld: "✔ JSON Web Tokens (JWT) | OAuth | Single Sign-On (SSO)" },
        { id: 6, skillt: "Environments || DevOps:", skilld: "✔ AWS: S3/EC2/ECS | Firebase | Heroku | Docker | Netlify" },
        { id: 7, skillt: "Databases:", skilld: "✔ MongoDB | PostgreSQL | MySQL | Cloud Firestore" },
        { id: 8, skillt: "Payment Processing:", skilld: "✔ Stripe | Braintree/PayPal" },
        { id: 9, skillt: "Web Scraping/Web crawling:", skilld: "✔ NodeJS + Puppeteer | Python Scrapy" },
        { id: 10, skillt: "Workflow & Version Control:", skilld: "✔ CI/CD | Pipelines | Git(GitHub/Bitbucket) | CircleCI" }
      ],
    about: { me: "I am a self-motivated, innovative, proactive and achievement oriented individual, also highly Knowledgeable in various professional fields.\n I'm a seasoned developer with over 7 years experience building robust applications.\n I am ready to apply my skills, experience and background to a challenging and stimulating situation, enabling me to make positive contribution in making peoples lives better." },
    profile: [
        { id: 1, tittle: "Name", description: "Bryan Czar Muli" },
        { id: 11, tittle: "Date of Birth", description: "1st April 1992" },
        { id: 2, tittle: "Nationality", description: "Kenyan" },
        { id: 3, tittle: "Gender", description: "Male" },
        { id: 4, tittle: "Marital Status", description: "Single" },
        { id: 5, tittle: "Address", description: "P.O Box 23580, 00100\n Nairobi." },
        { id: 6, tittle: "Mobile No.", description: "+254 714201317\n+254 737005065" },
        { id: 7, tittle: "Website", description: "https://bryanczar.com" },
        { id: 77, tittle: "GitHub Profile", description: "https://github.com/czerian" },
        { id: 78, tittle: "Upwork Profile", description: "https://upwork.com/fl/bryanczar" },
        { id: 8, tittle: "Email", description: "king@bryanczar.com\nczerianx@gmail.com" },
        { id: 9, tittle: "Language Proficiency", description: "English\nSwahili\nKamba" }
      ],
    education: [
    { id: 1, tittle: "Bachelor's Degree in Film & Animation", school: "Multimedia University of Kenya", period: "2011 - 2014", grade: "Majored in Animation & Multimedia Design", semoji: "🏢", pemoji: "🗓" },
    { id: 2, tittle: "Kenya Certificate of Secondary Education", school: "Nakuru High School", period: "2006 - 2009", grade: "Attained Grade B (plain)", semoji: "🏢", pemoji: "🗓" },
    { id: 3, tittle: "Kenya Certificate of Primary Education", school: "Kangundo Junior Academy", period: "1998 - 2005", grade: "Attained Grade A (plain)", semoji: "🏢", pemoji: "🗓" }
    ]
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
