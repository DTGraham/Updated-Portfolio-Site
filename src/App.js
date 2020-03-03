import React from "react";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              Daniel Graham
            </a>

            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav ml-auto">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link Nav-About" href="#About-Link">
                      About<span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link Nav-Projects" href="#Projects">
                      Projects <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link Nav-Contact" href="#Contact">
                      Contact <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item active ">
                    <a
                      target="_blank"
                      class="nav-link"
                      href="https://github.com/DTGraham"
                    >
                      <img
                        class="gh-img"
                        src="/Github-logo.png"
                        width="25"
                        height="25"
                        class="d-inline-block align-top"
                        alt="Image
              not found"
                      />
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a
                      target="_blank"
                      class="nav-link "
                      href="https://www.linkedin.com/in/daniel-graham-596a0a141"
                    >
                      <img
                        class="li-img"
                        src="/Linkedin-logo.png"
                        width="25"
                        height="25"
                        class="d-inline-block align-top"
                        alt="Image
              not found"
                      />
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </nav>

        {/* Home Section */}
        <div class="Home">
          <div class="Home-Flex">
            <h1 class="Home-Col One">Hi! My name is Daniel</h1>
            <h5 class="Home-Col Two">
              I'm a full stack developer based in Ottawa
            </h5>
            <button
              class=" Home-Col btn btn-warning"
              type="button"
              name="button"
            >
              <a class="Home-Col Three" href="#About-Link">
                Learn More
              </a>
            </button>
          </div>
        </div>

        {/* About Section */}
        <div id="About-Link"></div>
        <div class="About" id="About">
          <div class="container">
            <div class="About-Flex">
              <h1 class="About-Col One">About</h1>
              <h5 class="About-Col Two">
                My name is Daniel Graham, I recently graduated from Carleton
                University with a B.Eng in biomedical & electrical engineering.
                Since graduating I have discovered my passion for web
                development. I enjoy the entire process of taking an idea from
                initial conception to reality.
              </h5>
              <h5 class="About-Col Two">
                When working on a project, I employ a variety of tools including
                HTML, CSS, Javascript, Jquery, React, Node.js, python, and
                django. When building sites I make heavy use of repsonsive web
                design and cross browser compatibility design concepts. In
                addition to these tools, I also have knowledge of REST APIs,
                JSON, Adobe XD/Figma, git, and AWS.
              </h5>

              <h5 class="About-Col Two">
                I also have two years of experience developing software in both
                academic settings and professional settings. My projects range
                from a hospital inventory systems built using python and SQlite,
                to a smart phone application capable of measuring one's heart
                rate using only a front facing camera built using Java, C++ ,
                and OpenCV.
              </h5>
              <h5 class="About-Col Three">
                I am currently seeking employment opportunities in the realm of
                web development that will allow me to utilize as well as build
                upon my current skill set.
              </h5>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projectGallery"></div>

        {/* Contact Section */}
        <div class="Contact" id="Contact">
          <div class="container">
            <div class="Contact-Flex">
              <h1 class="Contact-Col One">Contact</h1>
              <form
                class=""
                action="https://formspree.io/mjvrvyek"
                method="POST"
              >
                <label for="">Name</label>
                <div class="Contact-Col Two">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Phone Name"
                  />
                </div>
                <label for="">Email</label>
                <div class="Contact-Col Two">
                  <input type="text" placeholder="Your Email" name="_replyto" />
                </div>
                <label for="">Phone</label>
                <div class="Contact-Col Two">
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Your Phone Number"
                  />
                </div>
                <label for="">Message</label>
                <div class="Contact-Col Two">
                  <input
                    type="textarea"
                    name="message"
                    placeholder="Your Message"
                  />
                </div>
                <div class="Contact-Col Button">
                  <input
                    class="btn btn-warning"
                    type="submit"
                    name=""
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
