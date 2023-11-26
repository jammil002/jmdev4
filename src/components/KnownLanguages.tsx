import React from "react";
import { useState } from "react";
import type { ReactNode } from "react";
import Card from "./Card";

type TooltipProps = {
  children: ReactNode;
  text: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleHoveredEnter() {
    setIsHovered(true);
  }

  function handleHoveredLeave() {
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
          <i className="devicon-css3-plain shadow-lg text-3xl"></i>
        </Tooltip>
        <Tooltip text="HTML">
          <i className="devicon-html5-plain shadow-lg text-3xl"></i>
        </Tooltip>
        <Tooltip text="JavaScript">
          <i className="devicon-javascript-plain shadow-lg text-3xl"></i>
        </Tooltip>
        <Tooltip text="Python">
          <i className="devicon-python-plain shadow-lg text-3xl"></i>
        </Tooltip>
        <Tooltip text="Java">
          <i className="devicon-java-plain shadow-lg text-3xl"></i>
        </Tooltip>
      </div>
      <h4 className="font-BebasNeue text-right">
        Known Frameworks & Technologies
      </h4>
      <div className="flex justify-between pb-2 pt-2">
        <Tooltip text="React">
          <i className="devicon-react-plain shadow-lg text-3xl"></i>
        </Tooltip>
        <Tooltip text="Git">
          <i className="devicon-git-plain shadow-lg text-3xl"></i>
        </Tooltip>
        <Tooltip text="Github">
          <i className="devicon-github-plain shadow-lg text-3xl"></i>
        </Tooltip>
      </div>
      <h4 className="font-BebasNeue">Certificates</h4>
      <div className="flex justify-end pb-2 pt-2 font-Oswald underline ">
        <a href="http://ude.my/UC-b33e2233-b622-4a36-8e47-04c0c8b7ba62">
          The Complete 2023 Web Development Bootcamp
        </a>
      </div>
      <h4 className="font-BebasNeue">Projects</h4>
      <div className="flex justify-end space-x-2">
        <Card
          link="https://jammil002.github.io/whattodoinphx/"
          title="What To Do In Phoenix"
          description="A collection of my favorite places across the valley."
        />
        <Card
          link="https://jammil002.github.io/useMovies/"
          title="useMovies"
          description="View, Select, and Rate your own favorite movies."
        />
      </div>
    </div>
  );
};

export default KnownLanguages;
