import { SKILLS } from "../actions/types";

const initialState = {
  greens: [
    { id: 1, skillt: "Front End Development:", skilld: "✔ JavaScript | TypeScript | React | Redux | Zustand\n✔ Next.js | Remix | TanStack Start | SolidJS | Solid Start \n✔ React Router | TanStack Router | TanStack Query \n✔ Tailwind CSS | Ant-Design | Chakra-UI | Shadcn/ui\n✔ React-Hook-Form | Formik | React-Select" },
    { id: 2, skillt: "Back End Development:", skilld: "✔ Node.js | NestJS | Express.js | Strapi | Puppeteer\n✔ Ruby on Rails | Socket.io | REST APIs | GraphQL\n✔ Passport | NextAuth.js | TypeORM | Drizzle ORM" },
    { id: 3, skillt: "Mobile Development:", skilld: "✔ React Native | Expo" },
    { id: 4, skillt: "TDD || Component || Unit || E2E Testing:", skilld: "✔ Testing Library | Jest | Vitest | Cypress" },
    { id: 6, skillt: "Environments || DevOps:", skilld: "✔ AWS | Linux | Apache | Nginx | Heroku | Docker" },
    { id: 7, skillt: "Databases:", skilld: "✔ MongoDB | PostgreSQL | MySQL | MariaDB | SQLite" },
    { id: 8, skillt: "Payment Processing:", skilld: "✔ Stripe | PayPal" },
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
