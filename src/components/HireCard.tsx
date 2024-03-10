import React from "react";

type HireCardProps = {
  title: string;
  description: string[];
  date: string;
};

const HireCard: React.FC<HireCardProps> = ({ title, description, date }) => {
  return (
    <div className="p-2">
      <div className="group block max-w-m rounded-lg shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-black text-xl font-BebasNeue">
            {title}
          </div>
          <div className="text-base font-Oswald text-gray-600 italic ml-1">
            {date}
          </div>
          <ul className="list-disc">
            {description.map((desc, index) => (
              <li
                key={index}
                className="text-base font-Oswald text-gray-600 ml-2"
              >
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HireCard;
