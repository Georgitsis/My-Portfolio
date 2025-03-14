import { Text, Title } from "@mantine/core";
import StackContainer from "../Components/StackContainer/StackContainer";
import TechStack from "../Components/ProjectTechStack/ProjectTechStack";
import ProjectHeader from "../Components/ProjectHeader/ProjectHeader";
import ProjectShell from "../Components/ProjectShell/ProjectShell";
import ProjectLinks from "../Components/ProjectLinks/ProjectLinks";

export default function MyFlixAngular() {
  const techStack = [
    {
      text: "The project's is built with Angular, a JavaScript library for creating dynamic and reusable user interfaces.",
      src: "/skills/angular.svg",
      label: "Angular",
    },
    {
      text: "SASS is used in this project to streamline styling by leveraging variables, nesting, and mixins, making the CSS more maintainable and scalable.",
      src: "/skills/sass.svg",
      label: "SASS",
    },
    {
      text: "I used Node.js and Express to build a fast and scalable back-end, handling API requests, managing routes, and integrating with the database efficiently.",
      src: "/skills/nodejs.svg",
      label: "Node.js Express",
    },
    {
      text: "An AWS Lambda function runs the Node.js code that powers the APIs, offering a serverless approach for better scalability and performance.",
      src: "/skills/Lambda.svg",
      label: "AWS Lambda",
    },
    {
      text: "I store and manage data in MongoDB, a flexible NoSQL database that enables efficient querying and scalability for my application.",
      src: "/skills/mongodb.svg",
      label: "MongoDB",
    },
    {
      text: "I leveraged Bootstrap to quickly design a responsive and modern user interface, utilizing its pre-built components and grid system for consistency and flexibility.",
      src: "/skills/bootstrap.svg",
      label: "Bootstrap",
    },
  ];

  return (
    <ProjectShell>
      <ProjectHeader
        headerText="MyFlix Angular"
        imageSrc="/my_flix/my_flix_angular_client.png"></ProjectHeader>
      <ProjectLinks
        generalInfo="The site is currently not hosted!"
        gitHubLink="https://github.com/Georgitsis/myFlix-Angular-client"></ProjectLinks>
      <StackContainer>
        <Title size={"5vw"} style={{ textAlign: "center" }}>
          About the Project
        </Title>
        <Text style={{ textAlign: "justify", fontSize: "inherit" }}>
          Meet App is a React-based event-tracking Progressive Web App (PWA)
          designed to keep users updated on upcoming CareerFoundry events. Built
          using Test-Driven Development (TDD), it integrates with the Google
          Calendar API to fetch event details securely via an OAuth2
          authentication flow.
          <br />
          The app utilizes AWS Lambda for serverless functions and an
          authorization server to handle authentication. Data is fetched
          efficiently using React Axios with async/await, ensuring a smooth user
          experience. Additionally, Meet App features an alert system
          implemented using an object-oriented programming (OOP) approach,
          providing timely notifications about events.
        </Text>
      </StackContainer>

      <StackContainer>
        <TechStack techStack={techStack} />
      </StackContainer>
    </ProjectShell>
  );
}
