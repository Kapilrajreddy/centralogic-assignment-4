import React from "react";
import ProjectsCard from "./ProjectCard";

import nxttrendz from '../../assets/portfolio-nxttrendz.PNG'
import money from '../../assets/portfolio-money.PNG'
import timer from '../../assets/portfolio-timer.PNG'
import comment from '../../assets/portfolio-comments.PNG'
import appointment from '../../assets/portfolio-appointments.png'


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-4 border-b-[1px] border-b-black"
    >
      <div className="">
        <h1 className="text-3xl md:text-4xl text-gray-300 font-bold capitalize mb-4">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          id="84aa21e6-96d5-47f6-9911-fda6e00ecc53"
          title="Nxt Trendz"
          src={nxttrendz}
          des="The Nxt Trendz online shopping application is a React-based platform similar to Amazon. Developed in a week, it allows users to log in, search, sort, filter, select products, and add them to a shopping cart. The primary focus was on creating a seamless and user-friendly frontend experience."
          git="https://github.com/Kapilrajreddy/Nxt-trendz"
          demo="https://kapinxttrendz.ccbp.tech"
        />
        <ProjectsCard
          id="84aa21e6-96d5-47f6-9911-fda6e00ecc54"
          title="Jobby App"
          src="https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-success-lg-output-v0.png"
          des="The Jobby App is a job listing platform with user login functionality, offering job title search, salary range filters, and employment type filters. It includes Login, Home, Jobs, and Job details pages designed with React components, managing props, state, and event handlers. Secure authentication is implemented using JWT tokens, and React Router ensures structured navigation and redirects unauthorized users to the login page."
          git="https://github.com/Kapilrajreddy/jobby-app"
          demo="https://kapiljobby.ccbp.tech"
        />
        <ProjectsCard
          id="84aa21e6-96d5-47f6-9911-fda6e00ecc55"
          title="Money Manager"
          src={money}
          des="The Money Manager app tracks income and expenses, displaying the balance and transaction history. It features user-friendly pages designed with React components for adding income and expenses, and viewing overall financial status. Secure authentication and structured navigation ensure a seamless user experience."
          git="https://github.com/Kapilrajreddy/moneymanager-app"
          demo="https://kapilmoneyapp.ccbp.tech"
        />
        <ProjectsCard
          id="84aa21e6-96d5-47f6-9911-fda6e00ecc56"
          title="Digi Timer"
          src={timer}
          des="The Stop Timer app allows users to start, stop, reset, and set a countdown timer. Users can increase the timer to a specific duration, such as 10 minutes, and watch it count down to zero. Designed with React components, it offers an intuitive interface for precise time management."
          git="https://github.com/Kapilrajreddy/digital-timer"
          demo="https://kapildigitimer.ccbp.tech"
        />
        <ProjectsCard
          id="84aa21e6-96d5-47f6-9911-fda6e00ecc57"
          title="Comments App"
          src={comment}
          des="The Comments App allows users to add their name and post comments, which are then displayed below the input form. Designed with React components, it provides a simple and interactive interface for submitting and viewing comments."
          git="https://github.com/Kapilrajreddy/comments-app"
          demo="https://kapilcomment.ccbp.tech"
        />
        <ProjectsCard
          id="84aa21e6-96d5-47f6-9911-fda6e00ecc58"
          title="Appointment App"
          src={appointment}
          des="The Comments App allows users to add their name and post comments, which are then displayed below the input form. Designed with React components, it provides a simple and interactive interface for submitting and viewing comments."
          git="https://github.com/Kapilrajreddy/Appointment-app"
          demo="https://kapiappointment.ccbp.tech"
        />
      </div>
    </section>
  );
};

export default Projects;
