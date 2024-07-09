import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

// Sample data for work experiences
const experiences = [
  {
    title: "Code for <good> Hackathon",
    company_name: "JP Morgan Chase & co.",
    date: "June 2024",
    points: [
      "Shortlisted to the hackathon held at JP Morgan in Hyderabad",
      "Worked on NGO problem statements in real-time scenarios",
      "Gained exposure to corporate life and the software industry",
    ],
  },
  {
    title: "Research",
    company_name: "IEEE",
    date: "April 2024",
    points: [
      "Research paper accepted by IEEE Organization",
      "Worked on integration of Chat Bots and recommendation systems",
      "Learned research methodologies and innovative approaches",
    ],
  },
  {
    title: "LaunchPad 2024",
    company_name: "PwC",
    date: "February 2024",
    points: [
      "Selected for LaunchPad program by PwC",
      "Received training in Data Analytics",
      "Learned foundations of programming, databases, and Data Analytics",
    ],
  },
  {
    title: "Internship",
    company_name: "AICET",
    date: "May - July 2023",
    points: [
      "Virtual internship on AI-ML",
      "Completed courses provided by AICET",
      "Gained knowledge in machine learning",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "4px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: "#1d1836" }}
    >
      <div>
        <h3 className="text-white text-lg md:text-2xl font-bold">{experience.title}</h3>
        <p className="text-secondary text-sm md:text-base font-semibold">{experience.company_name}</p>
      </div>
      <ul className="mt-3 md:mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-sm md:text-base pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const WorkExperience = () => {
  return (
    <div className="py-10 md:py-20">
      <motion.div initial="hidden" animate="visible">
        <center><h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10">Achievements and Internships</h2></center>
      </motion.div>
      <div className="mt-8 md:mt-12 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
