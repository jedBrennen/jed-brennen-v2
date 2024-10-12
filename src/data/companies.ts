import { Company } from '@/common/types';
import LogoAig from '@/assets/icons/logos/aig-logo.svg?react';
import LogoSage from '@/assets/icons/logos/sage-logo.svg?react';
import LogoUrbanScience from '@/assets/icons/logos/urban-science-logo.svg?react';

const COMPANIES: Company[] = [
  {
    id: 'aig',
    name: 'AIG',
    logo: LogoAig,
    joined: new Date(2020, 11),
    title: 'Front End Developer',
    location: 'London, UK',
    description:
      'Front end developer across multiple teams, with some back-end involvement as well.',
    additionalPoints: [
      'Stack included Typescript, React, Redux, ChartJS, Python, Django and GraphQL.',
      'Collaborated with other developers and UI/UX to build internal search, data visualisation and annotation tools for various desks to improve efficiency in managing their portfolios. Features included charts (ChartJS), maps (ArcGIS), data tables and document readers with annotation capabilities.',
      'After 9 months, I was entrusted with spearheading a new trends chart feature as the only front-end developer in a different team. Following completion of the feature I worked on building out a new module for the product, built on a GraphQL API, a first for the platform.',
      'Frequently contributed to a common UI library. Pushing for quality and consistency across components and in constant communication with the other developers and designers to ensure new components are fit for purpose across teams.',
      'Regularly requested more full-stack responsibilities, taking on some Python/Django work alongside my front-end tasks. This involved building dataset makers, models and migrations to transform data from new sources.',
      'Helped with interviewing new front end developers, both contractors and permanent. Including reviewing and improving the interview process.',
    ],
  },
  {
    id: 'sage-people',
    name: 'Sage People',
    logo: LogoSage,
    joined: new Date(2018, 6),
    departed: new Date(2020, 11),
    title: 'Software Engineer',
    location: 'Reading, UK',
    description:
      'Full stack developer building an HR platform using Salesforce and Angular, later transitioning to mobile development.',
    additionalPoints: [
      'Initially working on an HR platform built with Angular and Redux on the front end, using Salesforce and Apex as the backend. I collaborated with design and product owners to build new features with highly testable code, regularly participating in code reviews and agile methodologies to ensure a quality outcome.',
      'Attended Angular Connect and used learnings from the conference to overhaul the product’s Angular test suite, saving minutes of test execution time in most modules whilst preserving coverage. I presented my work to the department to improve department-wide understanding of writing more efficient tests.',
      'Involved in a hackathon team building a faster, more developer and user friendly mobile application for the platform with Flutter. Following presentation to the senior leadership team, development of the app was formally added to the product roadmap and my team transitioned to full time mobile development.',
      'Built a real-time sprint retrospective board with another developer from my team, to replace the sticky notes we had been using. Initially built with Angular and Firebase, I later rewrote the app in React having taken an interest in the framework. The rebuild focused on improving usability and multi-team capabilities, allowing the entire department to use the tool.',
    ],
  },
  {
    id: 'urban-science',
    name: 'Urban Science',
    logo: LogoUrbanScience,
    joined: new Date(2016, 5),
    departed: new Date(2018, 2),
    title: 'Analyst',
    location: 'Reading, UK',
    description:
      'Joining as an intern for my industrial placement, I processed raw data from various sources using SQL, SQl Server and Excel and deployed the result to the live systems. This involved performing QA on the data and fixing any errors from processing, fixing and improving stored procedures used in processing and communicating with clients regarding their live environments. I was also responsible for querying the data to produce various reports for certain clients. For a 3-month period, I worked remotely with a team in Germany to develop a new feature for one of the products using Java and JSP. In addition, throughout my time at the company, I learned C# to help maintain and improve my team’s internal data and task tracking tool. Following my internship, I continued as an Analyst for 7 months, part-time, whilst finishing my final year of university.',
  },
];

export default COMPANIES;
