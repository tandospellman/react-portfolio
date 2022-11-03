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
          
        </p>
      </div>
    </div>
  );
};

export default About;