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
  portfolioData: [
    {
      id: 0,
      title: 'Human Design',
      overview: 'Human Design’s website is a responsive site to give users the best experience in any browser size. Its mission is to clearly communicate the company’s vision, values and create brand awareness.',
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
      overview: 'The Ivory Game website is an informative site for the Netflix Original Documentary.',
      contributions: 'Worked collaboratively with another developer to build responsive UI components. I focused on developing a responsive layout so that the custom design was visually pleasing across all browser sizes.',
      stack: 'Jade, Stylus, Javascript and VelocityJS',
      liveUrl: 'https://theivorygame.com',
      heroImg: require('./base/assets/ivory1.jpg'),
      slideShow: [ { src: require('./base/assets/ivory1.jpg') }, { src: require('./base/assets/ivory2.jpg') }, { src: require('./base/assets/ivory3.jpg') }, { src: require('./base/assets/ivory4.jpg') }, { src: require('./base/assets/ivory5.jpg') }, { src: require('./base/assets/ivory6.jpg') }, { src: require('./base/assets/ivory7.jpg') } ]
    },
    {
      id: 3,
      title: 'Verge of Extinction',
      overview: 'Verge of Extinction is a static website raising awareness about elephant extinction and an upcoming concert to raise money for the cause.',
      contributions: 'Collaborated with a colleague to build UI components which included a custom page loader and modals. Added Node server, Express routing, and custom forms for Mailchimp and Stripe integration.',
      stack: 'Jade, Stylus, Javascript, ExpressJS and NodeJS',
      liveUrl: 'http://vergeofextinction.org/',
      heroImg: require('./base/assets/verge1.jpg'),
      slideShow: [ { src: require('./base/assets/verge1.jpg') }, { src: require('./base/assets/verge2.jpg') }, { src: require('./base/assets/verge3.jpg') }, { src: require('./base/assets/verge4.jpg') }, { src: require('./base/assets/verge5.jpg') }, { src: require('./base/assets/verge6.jpg') } ]
    },
    {
      id: 4,
      title: 'Humanwire',
      overview: 'Humanwire was a rewrite of an existing crowdfunding application for refugees around the world. The application encompasses both an administrative dashboard and public facing site.',
      contributions: 'Worked on the project with supervising senior developer. Developed the style guide and pattern library for reference and design updates of reusable components. Developed full stack user stories - user login, signup, and an application form. Initial development of UI for the admin dashboard.',
      stack: 'Loopback, Mithril, PostgreSQL, NodeJS, Stylus and Webpack',
      heroImg: require('./base/assets/human1.jpg'),
      slideShow: [ { src: require('./base/assets/human1.jpg') }, { src: require('./base/assets/human2.jpg') } ]
    }
  ],
  aboutData: [
    {
      title: 'Web Development Training',
      date: 'March 2014 - October 2014',
      summary: 'Dreaming of a career that would challenge and excite my analytical nature and passion for problem solving, I began to pursue Web Development. I spent my days working at Whole Foods, and my evenings taking online classes, studying textbooks, and networking.'
    },
    {
      title: 'Quality Assurance Tester',
      date: 'October 2014 - August 2015',
      summary: 'I was hired as a Quality Assurance Tester by Human Design, a startup in Boulder, CO. While in Quality Assurance, I continued to pursue a deeper understanding of development through collaborating with the development team at the company. I was soon taking on development tasks for various projects. After ten months in Quality Assurance, and two months learning development on the job, I was promoted to Front End Web Developer.'
    },
    {
      title: 'Front End Developer',
      date: 'August 2015 - February 2017',
      summary: 'As a developer, I contributed significantly to many projects that required transforming mockups into websites via JQuery, HTML, and CSS (vanilla CSS, Stylus, and LESS). I have also contributed to NodeJS applications using MithrilJS, Redux, ExpressJS, PostgreSQL and MongoDB.'
    },
    {
      title: 'Present',
      date: 'Today until infinity',
      summary: 'I plan to keep pushing and learning, to keep exploring and growing. My goal is to become the best in my field and one day become a leader of a development team. From there, I hope to support and mentor junior developers as I have been supported and mentored.'
    },
  ]
}

module.exports = Data
