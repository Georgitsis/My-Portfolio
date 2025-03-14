import { Text, Title } from "@mantine/core";
import StackContainer from "../Components/StackContainer/StackContainer";
import TechStack from "../Components/ProjectTechStack/ProjectTechStack";
import ProjectHeader from "../Components/ProjectHeader/ProjectHeader";
import ProjectShell from "../Components/ProjectShell/ProjectShell";
import ProjectLinks from "../Components/ProjectLinks/ProjectLinks";

export default function MyFlixReact() {
  const techStack = [
    {
      text: "This project is built with React, a JavaScript library for creating dynamic and reusable user interfaces.",
      src: "/skills/react.svg",
      label: "React",
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
        headerText="MyFlix React"
        imageSrc="/my_flix/my_flix_react_client.png"></ProjectHeader>
      <ProjectLinks
        //webSiteLink="-"
        generalInfo="The site is currently not hosted!"
        gitHubLink="https://github.com/Georgitsis/myFlix-client"></ProjectLinks>
      <StackContainer>
        <Title size={"5vw"} style={{ textAlign: "center" }}>
          About the Project
        </Title>
        <Text style={{ textAlign: "justify", fontSize: "inherit" }}>
          MyFlix is a full-stack movie library app built with the MERN (MongoDB,
          Express, React, Node.js) stack. It allows users to register, search
          for movies, view detailed information, and curate a list of their
          favorite films. The front-end is powered by React and styled with
          SASS, enabling dynamic and maintainable user interfaces. The back-end
          uses Node.js and Express to handle API requests and manage routing
          efficiently. MongoDB is used for flexible, scalable data storage,
          while Bootstrap ensures a responsive, modern design.
        </Text>
      </StackContainer>

      <StackContainer>
        <TechStack techStack={techStack} />
      </StackContainer>
    </ProjectShell>
  );
}
