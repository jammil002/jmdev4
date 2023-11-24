import React from "react";
import { useState } from "react";
import type { ReactNode } from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiPython,
  DiReact,
  DiGit,
  DiGithubBadge,
  DiJava,
} from "react-icons/di";
import Card from "./Card";

type TooltipProps = {
  children: ReactNode;
  text: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleHoveredEnter() {
    console.log("Entered icon");
    setIsHovered(true);
  }

  function handleHoveredLeave() {
    console.log("Left icon");
    setIsHovered(false);
  }

  return (
    <div className="relative flex items-center">
      <div onMouseEnter={handleHoveredEnter} onMouseLeave={handleHoveredLeave}>
        {children}
        {isHovered && (
          <div className="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-700 text-white rounded-md shadow-lg">
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

const KnownLanguages = () => {
  return (
    <div className="pb-2 pt-2">
      <h4 className="font-BebasNeue">Known Languages</h4>
      <div className="flex justify-between pb-2 pt-2">
        <Tooltip text="CSS">
          <DiCss3 size={40} className="shadow-lg" />
        </Tooltip>
        <Tooltip text="HTML">
          <DiHtml5 size={40} className="shadow-lg" />
        </Tooltip>
        <Tooltip text="JavaScript">
          <DiJavascript1 size={40} className="shadow-lg" />
        </Tooltip>
        <Tooltip text="Python">
          <DiPython size={40} className="shadow-lg" />
        </Tooltip>
        <Tooltip text="Java">
          <DiJava size={40} className="shadow-lg" />
        </Tooltip>
      </div>
      <h4 className="font-BebasNeue text-right">
        Known Frameworks & Technologies
      </h4>
      <div className="flex justify-between pb-2 pt-2">
        <Tooltip text="React">
          <DiReact size={40} className="shadow-lg cursor-grab" />
        </Tooltip>
        <Tooltip text="Git">
          <DiGit size={40} className="shadow-lg cursor-grab" />
        </Tooltip>
        <Tooltip text="Github">
          <DiGithubBadge size={40} className="shadow-lg cursor-grab" />
        </Tooltip>
      </div>
      <h4 className="font-BebasNeue">Certificates</h4>
      <div className="flex justify-end pb-2 pt-2 font-Oswald underline ">
        <a href="http://ude.my/UC-b33e2233-b622-4a36-8e47-04c0c8b7ba62">
          The Complete 2023 Web Development Bootcamp
        </a>
      </div>
      <h4 className="font-BebasNeue">Projects</h4>
      <div className="flex justify-end">
        <Card
          link="https://jammil002.github.io/whattodoinphx/"
          title="What To Do In Phoenix"
          description="A collection of my favorite places across the valley."
        />
      </div>
    </div>
  );
};

export default KnownLanguages;
