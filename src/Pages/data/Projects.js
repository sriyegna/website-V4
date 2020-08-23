import React from "react";
import StockTracker from "../../Assets/stocktracker.png";
import MultiPhone from "../../Assets/multiphone.png";
import Pikaptcha from "../../Assets/pikaptcha.png";
import EmergencyServicesLocator from "../../Assets/esl.png";
import WebsiteV2 from "../../Assets/websitev2.png";
import TasksToday from "../../Assets/taskstoday.png";
import WebsiteV3 from "../../Assets/websitev3.png";
import links from "../../Navigation/Links";

const projectData = [
  {
    name: "TasksToday",
    description: (
      <>
        An application I created to keep track of my daily tasks at my job. The
        application was intended to keep track for the next daily standup
        meeting and if I ever needed to go back and look at when I started or
        finished a certain task.
      </>
    ),
    skills: [
      "ReactJS",
      "Firebase",
      "FullCalendar.io",
      "Material-UI",
      "Material-UI Rich Text Editor",
      "REST",
    ],
    image: TasksToday,
    githubLink: links.Projects.TasksToday,
  },
  {
    name: "Website V3",
    description: (
      <>
        A personal website to showcase projects, my resume, and contact
        information. It was very similar to this website in terms of content,
        however some frameworks used were different.
      </>
    ),
    skills: ["ReactJS", "react-mdl", "react-vertical-timeline"],
    image: WebsiteV3,
    githubLink: links.Projects.WebsiteV3,
  },
  {
    name: "StockTracker",
    description: (
      <>
        An application to perform calculations on historic stock data and
        present the data to the user using easy to read charts. StockTracker
        will gather data such as Discount Cash Flow, Open and Close data, and
        perform Mean Revision calculations over n-days. Using this data, users
        can plot whether the stock is increasing or decreasing over an n-day
        period. StockTracker can also track profits or losses in purchased
        stocks.
      </>
    ),
    skills: [
      "Angular 8",
      "Python",
      "Flask",
      "MySQL",
      "AlphaVantage API",
      "Bootstrap",
      "REST",
    ],
    image: StockTracker,
    githubLink: links.Projects.StockTracker,
  },
  {
    name: "MultiPh.one",
    description: (
      <>
        <span className="boldUnderline">
          Discontinued due to server costs and costs of purchasing numbers
        </span>
        <br />
        <br />
        An application that allows users to generate Canadian or US VoIP
        numbers. Users can start a conversation to send and receive texts. Users
        can also set any of their purchased numbers to forward to any number.
        Users can add or delete contacts.
      </>
    ),
    skills: [
      "Angular 7",
      ".NET Core",
      "Identity Core",
      "MSSQL",
      "SignalWire API",
      "Bootstrap",
      "REST",
      "IIS",
    ],
    image: MultiPhone,
    githubLink: links.Projects.MultiPhone,
  },
  {
    name: "Pikaptcha",
    description: (
      <>
        An application created during the Pokemon Go craze. The application can
        be used to generate Pokemon Go accounts and allows the user to bypass
        Google reCaptcha if the user pays for 2Captcha services.
      </>
    ),
    skills: ["Python", "Selenium", "2Captcha API", "REST"],
    image: Pikaptcha,
    githubLink: links.Projects.Pikaptcha,
  },
  {
    name: "Emergency Services Locator",
    description: (
      <>
        'ESL' is a web application that allows users to locate nearby emergency
        services such as Police Stations, Fire Stations, and Hospitals. The web
        application can use HTML5 geolocation to locate the user and determine
        which is the closest facility to their location. Additionally, users can
        limit which service they want to locate, and add new facilities to the
        list.
      </>
    ),
    skills: [
      "HTML 5",
      "CSS",
      "PHP",
      "JavaScript",
      "JQuery",
      "Geolocation",
      "Bootstrap",
      "Bing Maps",
      "OpenData API",
    ],
    image: EmergencyServicesLocator,
    githubLink: links.Projects.EmergencyServicesLocator,
  },
  {
    name: "Website V2",
    description: (
      <>This is the second attempt at creating my personal website.</>
    ),
    skills: ["HTML 5", "CSS", "JavaScript", "Bootstrap"],
    image: WebsiteV2,
    githubLink: links.Projects.WebsiteV2,
  },
];

export default projectData;
