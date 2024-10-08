export type Skills = {
  title: string
  imgSrc: string
  description: string
}

export type Contact = {
  type: string
  href: string
  imgSrc: string
}

export type Gallery = {
  src: string
  thumbnailSrc: string
  caption: string
}

export type Card = {
  cardId: number
  title: string
  website?: string
  description: string
  position: string
  role: string
  skills: string
  imgSrc: string
  imageDescription: string
  mainMedia: string
  gallery: Gallery[]
}

export type Collection = {
  title: string
  description: string
  cards: Card[]
}

export type Model = {
  intro: {
    title: string
    description: string
  }
  profile: {
    fullName: string,
    occupation: string
    imgSrc: string
    description: string
  }
  skills: Skills[]
  workExp: Collection
  projects: Collection
  contactInfo: Contact[]
}

export const data: Model = {
  intro: {
    title: 'Web Developer and Designer',
    description: 'Hello, I am a web developer and designer currently living in the San Fransisco Bay Area. I have a keen interest in user interface and user experience design as well as programming and web development. This site is built on <a href="https://reactjs.org/" target="_blank" class="no-highlight"><strong>React.js</strong></a> + <a href="http://getbootstrap.com/" target="_blank" class="no-highlight"><strong>Bootstrap</strong></a> and is hosted in the cloud on <a href="https://azure.microsoft.com/en-us/overview/" target="_blank" class="no-highlight"><strong>Azure</strong></a>. All of the graphics you see on this site were created and designed by me. Scroll down to see more.',
  },

  profile: {
    fullName: 'Bach Vo',
    occupation: 'Software Engineer',
    imgSrc: '/images/bach_small.jpg',
    description: 'I graduated from <a href="http://www.sfu.ca" class="no-highlight" target="_blank"><strong>Simon Fraser University</strong></a> where I received a Bachelors of Science with Co-operative Education at the <a href="http://www.sfu.ca/siat.html" class="no-highlight" target="_blank"><strong>School of Interactive Arts and Technology</strong></a> with a concentration in Informatics. I am passionate about the art of design and the science of programming, where I balance this unique skillset to become a more creative designer and more intelligent programmer.<br><br> I am a creative individual who loves to design aesthetic user interfaces and always thinking about how we can better improve the user experience and design of an application. This helps me think outside the box and come up with creative solutions to complex problems that nobody else has thought of. Along side my creative skills are my technical programming skills that allow me to build my ideas into reality, giving me the tools to design, engineer, and develop.',
  },

  skills: [
    {
      title: 'User Interface Designer',
      imgSrc: '/images/UI.png',
      description: 'Being a user interface designer means that my creativity will directly impact the way users interact with my application and how information is presented to the user. I must consider the workflow of a user and keep the user interface clean and usable following the principle of form follows function. I use wireframe techniques such as sketching and balsamiq to create low fidelity prototypes and later use Adobe Illustrator, InDesign, and Photoshop to create high fidelity user interface mock-ups.',
    },
    {
      title: 'User Experience Designer',
      imgSrc: '/images/UX.png',
      description: 'As a user experience designer, I study how to improve the usability and ease of use of an application by implementing design methods and heuristics. I use methodologies such as Think-Aloud, Co-discovery, and Wizard of Oz to observe any anomalies that occur in the application. During the post analysis, I use methods such as the System Usability Scale to measure the user effectiveness and satisfaction as well as an Affinity Diagram to look for patterns of in-efficiency that occur in the application.',
    },
    {
      title: 'Web Developer',
      imgSrc: '/images/Dev.png',
      description: 'After the design phase comes the implementation phase, which excites me the most. Here is where my creativity and ideas come to life, using modern web technologies such as AngularJS, Ember.js, and JavaScript to engineer the web framework and using HTML, CSS and Bootstrap to design the aesthetic user interface of my application. It is also imperative to use modules such as Node.js, Bower, JQuery, Sass, and Gulp.js to help improve the code quality of the application as well as the efficiency in developing it.',
    }
  ],

  workExp: {
    title: 'Work Experience',
    description: 'My work experience includes several different types of organizations ranging from non-profit organizations to large global corporations. The variety of small and large companies in my past experience has allowed me to be very agile with my skillset, where I am able to quickly adapt to different teams and develop my soft skills.',
    cards: [
      {
        cardId: 1,
        title: 'LinkedIn',
        website: 'https://www.linkedin.com',
        description: 'Founded in 2003, LinkedIn connects the world\'s professionals to make them more productive and successful. With more than 675+ million members worldwide, including executives from every Fortune 500 company, LinkedIn is the world\'s largest professional network. The company has a diversified business model with revenue coming from Talent Solutions, Marketing Solutions, and Premium Subscriptions products. Headquartered in Silicon Valley, LinkedIn has offices across the globe.',
        position: 'Senior Software Engineer',
        role: 'Building tools to help job seekers find their next opportunity',
        imgSrc: '/images/workexp_linkedin.png',
        imageDescription: 'LinkedIn',
        gallery: [],
        skills: 'JavaScript, HTML, CSS, Ember.js',
        mainMedia: '/images/workexp_linkedin.png',
      },
      {
        cardId: 2,
        title: 'CopperTree Analytics',
        website: 'https://www.coppertreeanalytics.com',
        description: 'CopperTree Analytics is a software as a service company that solves energy management issues through technology that automatically checks the integrity of a clients Building Automation System (BAS) while pinpointing system inefficiencies. It compares the data gathered from a clients system to a defined baseline and highlights any changes. The CopperTree technology is achieved through the three step process of: Acquire, Analyze, and Advise.',
        position: 'Web Designer Intern',
        role: 'At CopperTree Analytics, I was a web designer who specialized in user interface design and developement. Because of my diverse set of design and programming skills, I am tasked with various roles to create low to high fidelity mock-ups and later implementing my designs using modern web technologies. When creating low and high fidelity mock-ups, I use tools such as Balsamiq, Illustrator, and Photoshop to create the interface of a system, focusing on a user-centered design. With these tools, I can iterate through mock-ups at a rapid pace in order to identify any issues that might occur later in the development cycle. I also test the low and high fidelity mock-ups by conducting user testing to examine the usability of the feature. In the development phase, I use Node.js as the application foundation and AngularJS to build controllers and API’s to serve data to the client side, from databases such as MongoDB and PostgreSQL. Once the data is retrieved from the server I can build all necessary components that help complete the user interface with the correct data being served to the view.',
        imgSrc: '/images/workexp_coppertree.png',
        imageDescription: 'CopperTree',
        gallery: [
          {
            src: '/gallery/coppertree/cta1.jpg',
            thumbnailSrc: '/gallery/coppertree/thumbnail/cta1.jpg',
            caption: 'I designed and developed the enteprise sass application',
          },
          {
            src: '/gallery/coppertree/cta2.jpg',
            thumbnailSrc: '/gallery/coppertree/thumbnail/cta2.jpg',
            caption: 'I curated print material for our marketing department',
          }
        ],
        skills: 'JavaScript, HTML, CSS, Balsamiq, Illustrator, Photoshop, Node.js, Angular.js, MongoDB',
        mainMedia: '/images/workexp_coppertree.png',
      },
      {
        cardId: 3,
        title: 'BlackBerry',
        website: 'https://www.blackberry.com',
        description: 'An award winning fortune 500 company, Blackberry is a Canadian telecommunication and wireless equipment manufacturer, based in Waterloo, Ontario. It is best known as the developer of the BlackBerry brand of smartphones and tablets but also well known worldwide as a provider of secure & high reliability software for industrial applications and Mobile Device Management (MDM).',
        position: 'Graphic Designer Intern',
        role: 'At BlackBerry, I was hired on the team as a graphic designer who specialized in print and web design for our team and marketing department. I was tasked with various roles to create print and web material such as posters, flyers, brochures, websites, and HTML emails. When creating print material, I worked closely with my brand manager to design high quality and beautiful print material that was used in BlackBerry’s marketing campaign. I used tools such as Illustrator, Photoshop, and InDesign for the majority of my designs. I also used JavaScript and HTML + CSS to build internal websites for corporate teams and built HTML emails that were used for internal and external marketing campaigns.',
        imgSrc: '/images/workexp_blackberry.png',
        imageDescription: 'BlackBerry',
        gallery: [
          {
            src: '/gallery/blackberry/bb1.jpg',
            thumbnailSrc: '/gallery/blackberry/thumbnail/bb1.jpg',
            caption: 'I designed the BlackBerry business cards',
          },
          {
            src: '/gallery/blackberry/bb2.jpg',
            thumbnailSrc: '/gallery/blackberry/thumbnail/bb2.jpg',
            caption: 'I designed the print material for our comms department',
          }
        ],
        skills: 'JavaScript, HTML, CSS, Illustrator, Photoshop, InDesign',
        mainMedia: '/images/workexp_blackberry.png',
      },
      {
        cardId: 4,
        title: 'Downtown Surrey BIA',
        website: 'http://downtownsurreybia.com/',
        description: 'The Downtown Surrey Business Improvement Association was formed in 2003 to facilitate; business improvement, community economic development, business revitalization and enhancement to the North Surrey area. Their goal is to assist businesses and commercial property owners in Metro Surrey to build a vibrant, safe and liveable downtown.',
        position: 'Marketing Intern',
        role: 'At the Downtown Surrey BIA, I was a marketing intern who designed marketing material for the organization. The marketing material included flyers, brochures, business cards, posters, and promotional videos. I was also in charge with the organizations website, keeping the content up to date and later re-designing the entire website. When creating the marketing material, I used Illustrator, InDesign, and Photoshop for the majority of my designs. I was asked to also re-design the organizations website using wordpress and creating a custom template using PHP, HTML + CSS, and JavaScript. Furthermore I used Final Cut Pro and After Effects to create promotional videos for the organization when they held events all around the City of Surrey.',
        imgSrc: '/images/workexp_dsbia.jpg',
        imageDescription: 'Downtown Surrey Business Improvement Association',
        gallery: [
          {
            src: '/gallery/dsbia/dtbia1.jpg',
            thumbnailSrc: '/gallery/dsbia/thumbnail/dtbia1.jpg',
            caption: 'I designed and developed the corporate website',
          },
        ],
        skills: 'JavaScript, HTML, CSS, PHP, Illustrator, Photoshop, Final Cut Pro, After Effects',
        mainMedia: '/images/workexp_dsbia.jpg',
      }
    ],
  },

  projects: {
    title: 'Projects',
    description: 'My projects include a variety of school projects that I have completed during my undergrad at Simon Fraser University and non-profit organizations that help the community.',
    cards: [
      {
        cardId: 1,
        title: 'Ventus',
        description: 'Ventus is an ambient heating device drawn from inspirations of past precedents of early 1950\'s design and heating/cooling devices. Ventus is primarily made of acrylic because the material is durable, light weight and strong enough to be hung from the ceiling. The rods that extend down from the platform are made of wood and the blades that are attached to the rods are hand made from MDF wood and paper. Arduino was implemented to power the rods and fans and from there, mobile devices were explored to create interactivity with the user. A Bluetooth chip Arduino microcontroller is used to calculate the accelerometer of the users phone to activate and de-activate the fan as the user interacts with his/her phone. The rods rotate from 4 servo motors that are attached to gears to be able to spin 13 rods. Users can control which direction the fan rotates as well as the speed of the rotation by simply moving the phone in the same direction and the degree in which the phone is tilted.',
        position: 'Programmer',
        role: 'I was the lead engineer for the team. I was responsible for the Arduino and SolidWorks portion of the project',
        skills: 'Arduino, Circuit boards, C++, SolidWorks, CNC Machine, PHP, 3D Printing',
        imgSrc: '/gallery/ventus/v1.jpg',
        gallery: [
          {
            src: '/gallery/ventus/v1.jpg',
            thumbnailSrc: '/gallery/ventus/thumbnail/v1.jpg',
            caption: 'Bottom view',
          },
          {
            src: '/gallery/ventus/v2.jpg',
            thumbnailSrc: '/gallery/ventus/thumbnail/v2.jpg',
            caption: 'Arduino',
          },
          {
            src: '/gallery/ventus/v4.jpg',
            thumbnailSrc: '/gallery/ventus/thumbnail/v4.jpg',
            caption: 'Arduino',
          },
          {
            src: '/gallery/ventus/v6.jpg',
            thumbnailSrc: '/gallery/ventus/thumbnail/v6.jpg',
            caption: 'Arduino and lazer cut acrylic',
          },
          {
            src: '/gallery/ventus/v7.jpg',
            thumbnailSrc: '/gallery/ventus/thumbnail/v7.jpg',
            caption: 'Gears that are lazer cut from MDF wood',
          },
          {
            src: '/gallery/ventus/v8.jpg',
            thumbnailSrc: '/gallery/ventus/thumbnail/v8.jpg',
            caption: 'Gears that are lazer cut from MDF wood',
          },
          {
            src: '/gallery/ventus/v9.jpg',
            thumbnailSrc: '/gallery/ventus/thumbnail/v9.jpg',
            caption: 'Fan arms that are 3D printed',
          }
        ],
        imageDescription: 'Ventus',
        mainMedia: '/video/ventus/ventus.mp4'
     },
     {
        cardId: 2,
        title: 'Musiq Sleeve',
        website: 'https://www.vimeo.com/64613691',
        description: 'The concept of this project is to create a "mobile DJ" that simulates the use of a DJ Mix Table using a series of physical actions performed by the DJ and a pair of gloves. Being wirelessly connected his wearable hands-on device, this provides the DJ with the ability and freedom to walk around and control the sound, urgency and volume of his tracks through simple hand gestures. The inclusion of the Mobile DJ, will not only give DJ\'s the freedom of not having to be around his mix table for the entire night, but also allow the user to have deeper interactions with the crowd and his audience through dance and movement.',
        position: 'Programmer',
        role: 'I was the lead Arduino developer for our team.',
        skills: 'Arduino, Circuit boards, C++',
        imgSrc: '/gallery/musiq/ms6.jpg',
        gallery: [
          {
            src: '/gallery/musiq/ms1.png',
            thumbnailSrc: '/gallery/musiq/thumbnail/ms1.jpg',
            caption: 'Full sleeve',
          },
          {
            src: '/gallery/musiq/ms2.png',
            thumbnailSrc: '/gallery/musiq/thumbnail/ms2.jpg',
            caption: 'User wearing the sleeve',
          },
          {
            src: '/gallery/musiq/ms3.png',
            thumbnailSrc: '/gallery/musiq/thumbnail/ms3.jpg',
            caption: 'Glove',
          },
          {
            src: '/gallery/musiq/ms4.png',
            thumbnailSrc: '/gallery/musiq/thumbnail/ms4.jpg',
            caption: 'Accelerometer and force sensor',
          },
          {
            src: '/gallery/musiq/ms5.png',
            thumbnailSrc: '/gallery/musiq/thumbnail/ms5.jpg',
            caption: 'All of the equipment',
          },
        ],
        imageDescription: 'Musiq Sleeve',
        mainMedia: '/video/musiq/musiq.mp4'
     },
     {
        cardId: 3,
        title: 'Manifesto',
        website: 'https://github.com/bachvo/Android',
        description: 'Manifesto is a smartphone application that designed for individual or social groups to plan meetings. It allows user to offset a position on the map using GPS function. User can choose a specific point on the map as his/her target location. After that user will be able to share the location to his/her contacts. Any web browser can read the position information, so that users who received the information can view the location on their own device. Not only that, location information can be saved in the app as “favorites” so that user will be able to access their favorite location easily. Furthermore, the app will have a real-time tracking system to allow users in the group to view all group members’ current location. Overall, Manifesto will enhance communication between friends and improve the event organization between social groups.',
        position: 'Programmer',
        role: 'I was the lead Android Developer for the team.',
        skills: 'Android, Java',
        imgSrc: '/gallery/manifesto/manifesto-mockup-1.jpg',
        gallery: [
          {
            src: '/gallery/manifesto/manifesto-mockup-2.jpg',
            thumbnailSrc: '/gallery/manifesto/thumbnail/manifesto-mockup-2.jpg',
            caption: 'Manifesto app on multiple devices',
          },
          {
            src: '/gallery/manifesto/manifesto-mockup-3.jpg',
            thumbnailSrc: '/gallery/manifesto/thumbnail/manifesto-mockup-3.jpg',
            caption: 'Manifesto app on phone in portrait',
          },
          {
            src: '/gallery/manifesto/manifesto-mockup-4.jpg',
            thumbnailSrc: '/gallery/manifesto/thumbnail/manifesto-mockup-4.jpg',
            caption: 'Manifesto app on phone in landscape',
          },
          {
            src: '/gallery/manifesto/manifesto-mockup-1.jpg',
            thumbnailSrc: '/gallery/manifesto/thumbnail/manifesto-mockup-1.jpg',
            caption: 'Manifesto app on multiple devices',
          },
          {
            src: '/gallery/manifesto/manifesto-mockup-5.jpg',
            thumbnailSrc: '/gallery/manifesto/thumbnail/manifesto-mockup-5.jpg',
            caption: 'Manifesto app on tablet',
          },
        ],
        imageDescription: 'Manifesto',
        mainMedia: '/gallery/manifesto/manifesto-mockup-1.jpg',
     },
     {
        cardId: 4,
        title: 'FoodiesUnited',
        website: 'https://www.foodiesunited.org/',
        description: 'We believe being a foodie is simply showing compassion for food. Let\'s support the 15 million Americans in the restaurant industry facing the dark period of COVID-19 by uniting together and spreading positivity. Support a local restaurant by purchasing a gift card, ordering food, and giving words of encouragement. Let\'s do what food is supposed to do - bring us together.',
        position: 'Software Engineer',
        role: 'Full stack engineer',
        skills: 'Javascript, React, GraphQL, Heroku, Express',
        imgSrc: '/gallery/foodiesunited/marketinglogo.jpg',
        gallery: [
          {
            src: '/gallery/foodiesunited/marketinglogo.jpg',
            thumbnailSrc: '/gallery/foodiesunited/thumbnail/marketinglogo.jpg',
            caption: 'Foodies United graphic',
          },
          {
            src: '/gallery/foodiesunited/webpage.png',
            thumbnailSrc: '/gallery/foodiesunited/thumbnail/webpage.png',
            caption: 'Foodies United web page',
          }
        ],
        imageDescription: 'Foodies United',
        mainMedia: '/gallery/foodiesunited/foodieslogo48.png'
      }
    ],
  },

  contactInfo: [
    {
      type: 'Email',
      href: 'mailto:bach.vo604@gmail.com',
      imgSrc: '/images/email.png'
    },
    {
      type: 'Phone',
      href: 'tel:+1.650.224.5152',
      imgSrc: '/images/cell.png'
    },
    {
      type: 'Linkedin',
      href: 'https://www.linkedin.com/in/bachvo',
      imgSrc: '/images/linkedin.png'
    },
    {
      type: 'Github',
      href: 'https://github.com/bachvo',
      imgSrc: '/images/github.png'
    }
  ],
};