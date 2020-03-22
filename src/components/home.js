import React from "react";

function createMarkup(text) {
  return {__html: text};
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introTitle: 'Web Developer and Designer', 
      introDescription: 'Hello, I am a web developer and designer currently living in the San Fransisco Bay Area. I have a keen interest in user interface and user experience design as well as programming and web development. By the way, this entire site is built on <a href="http://emberjs.com/" target="_blank" class="no-highlight"><strong>Ember.js</strong></a> and <a href="http://getbootstrap.com/" target="_blank" class="no-highlight"><strong>Bootstrap</strong></a>. All of the graphics you see on this site were all designed by me as well! Scroll down to see more.', 
  
      aboutTitle: 'About Bach Vo',
      aboutDescription: 'I am a graduate from <a href="http://www.sfu.ca" class="no-highlight" target="_blank"><strong>Simon Fraser University</strong></a> where I received a Bachelors of Science with Co-operative Education at the <a href="http://www.sfu.ca/siat.html" class="no-highlight" target="_blank"><strong>School of Interactive Arts and Technology</strong></a> with a concentration in Informatics. I am passionate about the art of design and the science of programming, where I balance this unique skillset to become a more creative designer and more intelligent programmer.',
      aboutQuote: '"Knowing is not enough; we must apply. Willing is not enough; we must do."',
      aboutQuoteCite: 'Johann Wolfgang von Goethe',

      aboutMeSkills: [
        {
          title: 'User Interface Designer',
          img: 'images/UI.png',
          description: 'Being a user interface designer means that my creativity will directly impact the way users interact with my application and how information is presented to the user. I must consider the workflow of a user and keep the user interface clean and usable following the principle of form follows function. I use wireframe techniques such as sketching and balsamiq to create low fidelity prototypes and later use Adobe Illustrator, InDesign, and Photoshop to create high fidelity user interface mock-ups.',
        },
        {
          title: 'User Experience Designer',
          img: 'images/UX.png',
          description: 'As a user experience designer, I study how to improve the usability and ease of use of an application by implementing design methods and heuristics. I use methodologies such as Think-Aloud, Co-discovery, and Wizard of Oz to observe any anomalies that occur in the application. During the post analysis, I use methods such as the System Usability Scale to measure the user effectiveness and satisfaction as well as an Affinity Diagram to look for patterns of in-efficiency that occur in the application.',
        },
        {
          title: 'Web Developer',
          img: 'images/Dev.png',
          description: 'After the design phase comes the implementation phase, which excites me the most. Here is where my creativity and ideas come to life, using modern web technologies such as AngularJS, Ember.js, and JavaScript to engineer the web framework and using HTML5, CSS3 and Bootstrap to design the aesthetic user interface of my application. It is also imperative to use modules such as Node.js, Bower, JQuery, Sass, and Gulp.js to help improve the code quality of the application as well as the efficiency in developing it.',
        }
      ],
  
      workExpTitle: 'Work Experience',
      workExpDescription: 'My work experience includes several different types of organizations ranging from non-profit organizations to large global corporations. The variety of small and large companies in my past experience has allowed me to be very agile with my skillset, where I am able to quickly adapt to different teams and develop my soft skills.',
  
      projectTitle: 'Projects',
      projectDescription: 'My projects include a variety of school projects that I have completed during my undergrad at Simon Fraser University. This includes my capstone project and other projects from different classes that I enjoyed working on throughout my time at University.',
  
      contact: 'Contact Me',
      email: 'info@bachvo.com',
      phone: '+1.650.224.5152',
      linkedin: 'https://www.linkedin.com/in/bachvo'
    };
  }

  render() {
    return (
      <main>
        <section className="home">
          <h2>{this.state.introTitle}</h2>
          <p className="text-center" dangerouslySetInnerHTML={createMarkup(this.state.introDescription)}></p>
          <img alt="" className="home__landing-page-image" src="images/landing_page.png"/>
        </section>
        <section className="d-flex flex-column align-items-center">
          <h2>{this.state.aboutTitle}</h2>
          <p className="text-center" dangerouslySetInnerHTML={createMarkup(this.state.aboutDescription)}></p>
          <ul className="home__about-skill-list d-flex">
            {this.state.aboutMeSkills.map((item, key) => {
                  return (
                    <li key={key} className="d-flex flex-column align-items-center">
                      <img src={item.img} height="200" width="200" alt=""/>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </li>
                  )
                }
              )
            }
          </ul>
        </section>
      </main>
    );
  }
}
