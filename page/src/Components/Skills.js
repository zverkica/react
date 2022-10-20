import React from "react";
import { skills } from "../data";
import { softSkills } from "../data";
import { hobbies } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Over the past year and a half I have been working on developing my skills. I used Codecademy, Udemy and, of course, Youtube for doing so. I have completed various courses on JS and React, and I scratched the surface of some additional technologies like SQL and NoSQL databases, PHP and Typescript.
          </p>
        </div>

        <h3 className="text-center sm:text-xl text-3xl font-medium title-font text-white mb-4">
            Web development skills
          </h3>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-center sm:text-xl text-3xl font-medium title-font text-white mb-4">
            Soft skills
          </h3>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {softSkills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}