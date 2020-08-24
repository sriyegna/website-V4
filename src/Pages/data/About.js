import React from "react";
import {
  MdSchool,
  MdWork,
  MdAccountCircle,
  MdCode,
  MdComputer,
} from "react-icons/md";
import { FaRegSmileWink, FaHamburger } from "react-icons/fa";

export const aboutData = [
  {
    vteClass: "vertical-timeline-element--work",
    iconColor: "rgb(16, 204, 82)",
    icon: <MdAccountCircle />,
    h3: "The Beginning",
    h4: "Montreal, QC (1994)",
    p: (
      <p>
        My adventure began in February 1994. Who could imagine I would end up
        where I am now."
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--work",
    iconColor: "rgb(255, 165, 0)",
    icon: <MdComputer />,
    h3: "My First Computer",
    h4: "(2004)",
    p: (
      <p>
        At age 10 my dad helped me build my first computer. By buying the parts{" "}
        <span className="boldText">(motherboard, RAM, CPU, PSU, etc)</span>, we
        assembled the computer and installed Windows! I still remember the day
        we got high-speed internet!
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--work",
    iconColor: "rgb(255, 165, 0)",
    icon: <MdCode />,
    h3: "SriScape",
    h4: "(2006)",
    p: (
      <p>
        Yes that's right. My first experience with programming (Java) was when I
        made a Old School RuneScape ripoff. At the time it was just RuneScape.
        None of that pesky RS3. Achieving over{" "}
        <span className="boldText">20,000 unique users</span> on a spare Pentium
        3 desktop my dad got from work.
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--work",
    iconColor: "rgb(255, 165, 0)",
    icon: <MdCode />,
    h3: "Script Kiddie",
    h4: "(2012)",
    p: (
      <p>
        I began to self-learn{" "}
        <span className="boldText">Python, HTML, CSS, and JavaScript</span>
        . Making various simple applications such as a name based notetaker, a
        personal website, and automating some twitter feeds. I might have done
        some tinkering with SQL injection and other exploits. Might being the
        key word <FaRegSmileWink />.
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--work",
    iconColor: "rgb(255, 165, 0)",
    icon: <MdCode />,
    h3: "Script Kiddie",
    h4: "(2012)",
    p: (
      <p>
        I began to self-learn{" "}
        <span className="boldText">Python, HTML, CSS, and JavaScript</span>
        . Making various simple applications such as a name based notetaker, a
        personal website, and automating some twitter feeds. I might have done
        some tinkering with SQL injection and other exploits. Might being the
        key word <FaRegSmileWink />.
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--work",
    iconColor: "rgb(233, 30, 99)",
    icon: <MdWork />,
    h3: "Software Test Specialist",
    h4: "BlackBerry - Waterloo, ON (2013 - 2014)",
    p: (
      <p>
        My first real work experience with Canada's largest cell phone company.
        I got real world experience with{" "}
        <span className="boldText">
          working in teams, and bug reporting and debugging real software
        </span>
        ! I developed small scripts to help my day to day duties be easier.
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--education",
    iconColor: "rgb(233, 30, 99)",
    icon: <MdWork />,
    h3: "Email Services - BB10 Test Prime",
    h4: "BlackBerry - Waterloo, ON (2014 - 2015)",
    p: (
      <p>
        I went back? Ofcourse I did. BlackBerry was doing amazing work and I
        enjoyed being part of the process. In this role I learned how to manage
        an offshore team and boy was that a challenge. I had to work early and
        late to speak with people in Hyderabad, India. This was a great
        experience learning{" "}
        <span className="boldText">team management and automation testing</span>
        !
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--education",
    iconColor: "rgb(255, 165, 0)",
    icon: <MdCode />,
    h3: "Pikaptcha",
    h4: "(2016)",
    p: (
      <p>
        What do you do when you 'gotta catch em all' but you don't know where
        they are? You use Pokemon Go Maps. What do you do when you need massive
        amounts of Pokemon Go accounts to run the map but the only program
        available is charging people $10? You create a free one. That's what I
        did. I created Pikaptcha because I know the userbase of Pokemon Go
        players can't pay the $10, or even have a credit card. Written in{" "}
        <span className="boldText">
          Python and using the Selenium framework and 2Captcha API
        </span>
        , I wrote a program to automatically create Pokemon Go accounts, bypass
        Googles reCaptcha, and verify the emails. Several projects have used my
        program as a base to continue my legacy.
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--education",
    iconColor: "rgb(33, 150, 243)",
    icon: <MdSchool />,
    h3: "Mohawk College",
    h4: "Software Development Diploma (2017)",
    p: (
      <p>
        I decided to enroll in Mohawk College and get a Diploma. With the help
        of some great professors, I learned many things about{" "}
        <span className="boldText">
          Reactive Web Development, Java, Systems Design, Software Testing,
          .NET, Object Oriented Systems, Data Structures, Database Theory,
          Server Management, and Project Management
        </span>
        .
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--work",
    iconColor: "rgb(233, 30, 99)",
    icon: <MdWork />,
    h3: "Application Developer",
    h4: "FirstOntario Credit Union - Stoney Creek, ON (2019)",
    p: (
      <p>
        My first developer work experience where I designed a new e-banking
        website using{" "}
        <span className="boldText">
          HTML, CSS, JavaScript, and a proprietary framework known as UXP
        </span>
        . I got to participate in the{" "}
        <span className="boldText">
          decision making process with consulting firms, marketing firms,
          vendors, and our directors
        </span>
        . And I can't forget to mention the biweekly barbeques <FaHamburger />!
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--education",
    iconColor: "rgb(33, 150, 243)",
    icon: <MdSchool />,
    h3: "University of Guelph",
    h4: "Bachelor of Computing (2019)",
    p: (
      <p>
        Continuing my education from College, I decided to transfer to the
        University of Guelph. Here I learned more about{" "}
        <span className="boldText">
          Microcomputers, Software Design and Development, Operating Systems,
          and Algorithms
        </span>
        .
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--work",
    iconColor: "rgb(255, 165, 0)",
    icon: <MdCode />,
    h3: "MultiPh.one",
    h4: "(2019)",
    p: (
      <p>
        I had a problem with spam calls. I realized I would enter my phone
        number without concern when signing up for various websites and
        services. After some digging, I found a service called SignalWire that
        will rent you VoIP numbers for $0.08/month. I created an application
        using{" "}
        <span className="boldText">
          Angular as the frontend, and .NET core (and MS Identity Core) as the
          backend
        </span>{" "}
        to allow me (or any user for that matter) to securely register, purchase
        a number, and allow call forwarding to a real number from the purchased
        number. This allowed users to keep their personal number private while
        still being able to receive calls! Later I added the functionality to
        allow users to send and receive texts from their purchased number. I
        also decided that since it only costs $0.08/month per number, users
        should be able to generate any number of phone numbers they please!
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--education",
    iconColor: "rgb(255, 165, 0)",
    icon: <MdCode />,
    h3: "StockTracker",
    h4: "(2019)",
    p: (
      <p>
        Who wants to get rich? I do. That's why I created StockTracker. A simple
        application to perform calculations on historical stock data for tickers
        that the user enters. The application uses{" "}
        <span className="boldText">
          Angular as a frontend, Python as the backend, and makes REST calls to
          Stock API's and populates a MySQL database.
        </span>
      </p>
    ),
  },
  {
    vteClass: "vertical-timeline-element--work",
    iconColor: "rgb(233, 30, 99)",
    icon: <MdWork />,
    h3: "Software Developer Student",
    h4: "BlackBerry - Waterloo, ON (2020)",
    p: (
      <p>
        That's right, back again! This time I'm here to develop enterprise grade
        web applications to help monitor cyber security threats using{" "}
        <span className="boldText">React</span> and their newly acquired company
        Cylance! This will be an interesting term that I am sure to enjoy!
      </p>
    ),
  },
];
