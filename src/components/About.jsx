import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        An avid Software Developer dedicated to improving skills
        through hands-on learning and development work.
        Throughout my Student-Internship at Woodlands Dairy (IT
        Department), I gained hands-on experience coding under
        the direction of a team (English and Afrikaans), one of
        my responsibilities was to develop creative solutions
        across a multitude of software platforms and technologies.

        </p>

        <br />

        <p className="text-xl">
          As a developer, joining SovTech would be a dream, 
          the main draw for me is the company culture, well-defined by the SovTech Specs. 
          The Adapt Spec resonates with me mostly due to the fact that 
          I've grown so much as a developer by having to adapt constantly and be adjustible.
          I find it inspiring to work with others who challenge you and as a result, 
          adaptation is a core value of mine- it's how I've thrived under pressure in my coding career.
          
        </p>
      </div>
    </div>
  );
};

export default About;