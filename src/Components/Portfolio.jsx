/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "A nice Developer setup with a desktop.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Shopper-Dash",
    description:
      "An eCommerce Website which let users buy and sell Products.",
    url: "https://github.com/tanmayysain/Shopper-Dash",
  },
  {
    title: "Expense_Tracker",
    description:
      "An Expense tracker app can help you keep track of the major expenses you have made in a year month-wise.",
    url: "https://github.com/tanmayysain/expenses-tracker",
  },
  {
    title: "Catalogue App",
    description:
      "A Catalogue App created by flutter which have a catalogue of different Mobile Devices.",
    url: "https://github.com/tanmayysain/flutter_catalog_1",
  },
  {
    title: "Real-Time-Bus-Tracking-System",
    description:
      "By this website you can locate the distance between two points source and destination.",
    url: "https://github.com/tanmayysain/Real-Time-Tracking-System",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
