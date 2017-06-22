const Data = {
  typersData: [
    {
      data: ["const AaronFlower = {", "occupation: 'Javascript Developer'", "}"]
    },
    {
      data: ["AaronFlower.skills = [", "'Javascript', 'HTML5', 'CSS3', 'React', 'Redux', 'Node'", "]"]
    },
    {
      data: ["Redirecting...", "Done!"]
    }
  ],
  projectsData: [
    {
      id: 0,
      title: 'Human Design',
      overview: 'Human Design’s website is a responsive site built with custom HTML, Stylus and Javascript in order to give users the best experience on any browser size to communicate the vision, values and create brand awareness for the company.',
      contributions: 'Worked collaboratively with another developer to build responsive UI components.',
      stack: 'HTML, Stylus and Javascript',
      liveUrl: 'http://humandesign.com',
      heroImg: require('./base/assets/hd1.jpg'),
      slideShow: [ { src: require('./base/assets/hd1.jpg') }, { src: require('./base/assets/hd2.jpg') }, { src: require('./base/assets/hd3.jpg') } ]
    },
    {
      id: 1,
      title: 'Social Action Machine',
      overview: 'Social Action Machine included a landing page that promoted a minimum viable product focused on creating custom widgets and empowering their use through embeddable JS/HTML scripts.',
      contributions: 'Took on leadership role in development team to organize and delegate tasks, clarify project requirements, and accommodate scope creep. Personally took on majority of development of the static website. Integrated Mailchimp and Mandrill for an AB testing email campaign. Assisted with full stack bug fixes.',
      stack: 'HTML, Stylus, Javascript, MongoDB, NodeJS, ExpressJS and MithrilJS',
      liveUrl: 'https://socialactionmachine.com/',
      heroImg: require('./base/assets/sam1.jpg'),
      slideShow: [ { src: require('./base/assets/sam1.jpg') }, { src: require('./base/assets/sam2.jpg') }, { src: require('./base/assets/sam3.jpg') }, { src: require('./base/assets/sam4.jpg') }, { src: require('./base/assets/sam5.jpg') } ]
    },
    {
      id: 2,
      title: 'The Ivory Game',
      overview: 'The Ivory Game website is an informative site for the Netflix Original Documentary. I focused on developing a responsive layout so that the custom design was visually pleasing across all browser sizes.',
      contributions: 'Worked collaboratively with another developer to build responsive UI components.',
      stack: 'Jade, Javascript and VelocityJS',
      liveUrl: 'https://theivorygame.com',
      heroImg: require('./base/assets/ivory1.jpg'),
      slideShow: [ { src: require('./base/assets/ivory1.jpg') }, { src: require('./base/assets/ivory2.jpg') }, { src: require('./base/assets/ivory3.jpg') }, { src: require('./base/assets/ivory4.jpg') }, { src: require('./base/assets/ivory5.jpg') }, { src: require('./base/assets/ivory6.jpg') }, { src: require('./base/assets/ivory7.jpg') } ]
    },
    {
      id: 3,
      title: 'Verge of Extinction',
      overview: 'Verge of Extinction is a static website raising awareness about Elephant extinction and an upcoming concert to raise money for the cause.',
      contributions: 'Worked collaboratively with another developer to build UI components which included a custom page loader and modals. Added Node server, Express routing, and custom forms for Mailchimp and Stripe integration.',
      stack: 'Jade, Stylus, Javascript, ExpressJS and NodeJS',
      liveUrl: 'http://vergeofextinction.org/',
      heroImg: require('./base/assets/verge1.jpg'),
      slideShow: [ { src: require('./base/assets/verge1.jpg') }, { src: require('./base/assets/verge2.jpg') }, { src: require('./base/assets/verge3.jpg') }, { src: require('./base/assets/verge4.jpg') }, { src: require('./base/assets/verge5.jpg') }, { src: require('./base/assets/verge6.jpg') } ]
    },
    {
      id: 4,
      title: 'Humanwire',
      overview: 'Humanwire was a rewrite of an existing crowdfunding application for refugees around the world. The application encompasses both an administrative dashboard and public facing site.',
      contributions: 'Worked collaboratively with supervising senior developer. Developed the style guide and pattern library for reference and design updates of reusable components. Developed full stack user stories - user login, signup, and refuge application form. Initial development of UI for the admin dashboard.',
      stack: 'Loopback, Mithril, PostgreSQL, NodeJS, Stylus and Webpack',
      heroImg: require('./base/assets/human1.jpg'),
      slideShow: [ { src: require('./base/assets/human1.jpg') }, { src: require('./base/assets/human2.jpg') } ]
    }
  ],
  aboutData: [
    {
      title: 'Pizzas',
      date: '3 years',
      summary: 'Worked collaboratively with the engineering team to ensure functional and design requirements were met on projects throughout the project life cycle.'
    },
    {
      title: 'Quality Assurance Tester',
      date: '10 months',
      summary: 'Worked collaboratively with the engineering team to ensure functional and design requirements were met on projects throughout the project life cycle.'
    },
    {
      title: 'Front End Developer',
      date: '1 year 7 months',
      summary: 'Worked collaboratively with the engineering team to ensure functional and design requirements were met on projects throughout the project life cycle.'
    },
    {
      title: 'Present and on',
      data: 'now',
      summary: 'Worked collaboratively with the engineering team to ensure functional and design requirements were met on projects throughout the project life cycle.'
    },
  ]
}

module.exports = Data
