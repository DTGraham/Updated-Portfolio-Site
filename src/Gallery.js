import React from "react";
import "./Gallery.css";
import $ from "jquery";

export default class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    $(document).ready(function() {
      // This function loads project images only when scrolled into view
      $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".Projects-Image-Flex");

        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i];

          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
          } else {
            $(tag).removeClass("visible");
          }
        }
      });

      // Modal Display function
      const modal = document.getElementById("myModal");

      // Project 1: MER Construction
      $("input.Image-One ").on("click", function() {
        $("div.modal").css({
          // Set background image to relevant project
          "background-image": "url(/Project-1-Detail.jpg)"
        });

        // Display the modal window
        $("div.modal").css({ display: "block" });
        $("div.Modal-Flex-Row").css({ color: "white" });
        $("a.Project-Link").css({ color: "darkgrey" });
        $("a.Tech-Image.One").css({ color: "white" });

        // Fill in all of the headings with text relevant to selected project and proper link
        $("h1.Project-Title").text("MER Construction");
        $("a.Project-Link.One").text("A modern construction site");
        $("a.Project-Link.One").attr(
          "href",
          "https://mer-construction.herokuapp.com/"
        );
        $("p.Project-Info.Two").text(
          "This freelance project was developed for a local construction company in need of a new website."
        );
        $("p.Project-Info.Three").text(
          "This website features numerous pages that were linked together using react router. It makes use of react components for both the project selection page as well as each individual project gallery page. "
        );
        $("p.Project-Info.Four").text(
          "I designed the UI/UX through discussion and consultation with the client using several design mockups created using figma. I made extensive use of affinity designer to edit and compress all of the project photos for the purpose of increasing site performance. "
        );
        $("a.Project-Link.Two").text("Source Code");
        $("a.Project-Link.Two").attr(
          "href",
          "https://github.com/DTGraham/Mike-Construction"
        );
        $("a.Project-Link.Three").text(" ");
        $("img.Tech-Image.Two").attr("src", "/React-Router-Logo.svg");

        // Display scroll bar if necessary
        $("body").css("overflow", "hidden");
      });

      // Project 2: Cirrus Weather
      $("input.Image-Two ").on("click", function() {
        $("div.modal").css({
          "background-image": "url(/Project-2-Detail.jpg)"
        });

        $("div.modal").css({ display: "block" });
        $("div.Modal-Flex-Row").css({ color: "black" });
        $("a.Project-Link").css({ color: "navy" });
        $("a.Tech-Image.One").css({ color: "black" });

        $("h1.Project-Title").text("Cirrus Weather");
        $("a.Project-Link.One").text(
          "A minimalistic weather site designed to be concise and efficient"
        );
        $("a.Project-Link.One").attr(
          "href",
          "https://master.dpsatdhkjg1re.amplifyapp.com/"
        );

        $("p.Project-Info.Two").text(
          "This site provides current weather conditions and a five-day forecast for most cities across the world. Weather can be found by searching for your city and optionally your country."
        );
        $("p.Project-Info.Three").text(
          "It functions by fetching temperature and condition data from Weather Bit API using the user inputted location in the API call"
        );
        $("p.Project-Info.Four").text(
          "It also fetches weather condition codes from Weather Bit API, which are used to dynamically display weather icons for the five-day forecast "
        );

        $("a.Project-Link.Two").text("Source code");
        $("a.Project-Link.Two").attr(
          "href",
          "https://github.com/DTGraham/Cirrus-Weather/"
        );
        $("a.Project-Link.Three").text("Weather Bit API");
        $("a.Project-Link.Three").attr("href", "https://www.weatherbit.io/api");
        $("img.Tech-Image.Two").attr("src", "");

        $("body").css("overflow", "hidden");
      });

      // Project 3: Portfolio Site
      $("input.Image-Three ").on("click", function() {
        $("div.modal").css({
          "background-image": "url(/Project-3-Detail.jpg)"
        });

        $("div.modal").css({ display: "block" });
        $("div.Modal-Flex-Row").css({ color: "white" });
        $("a.Project-Link").css({ color: "navy" });
        $("a.Tech-Image.One").css({ color: "white" });
        $("h1.Project-Title").text("Portfolio Site");
        $("a.Project-Link.One").text(
          "A brief showcase of my projects and skillset"
        );
        $("a.Project-Link.One").attr(
          "href",
          "https://danielgportfolio.herokuapp.com/"
        );

        $("p.Project-Info.Two").text(
          " This site was designed to showcase my projects and skillset in a more unique format than a traditional resume."
        );

        $("p.Project-Info.Three").text(
          "I created numerous designs for this page using figma. I ultimately chose the current design due to its simple and accessible layout. "
        );

        $("p.Project-Info.Four").text(
          " I made use of react to develop this page, with components being used for the project gallery and modal display."
        );

        $("a.Project-Link.Two").text("Source Code");
        $("a.Project-Link.Two").attr(
          "href",
          "https://github.com/DTGraham/Updated-Portfolio-Site"
        );
        $("a.Project-Link.Three").text(" ");
        $("img.Tech-Image.Two").attr("src", "");

        $("body").css("overflow", "hidden");
      });

      // Close the modal display when X is clicked

      $("img.close").on("click", function() {
        $("div.modal").css({ display: "none" });
        $("body").css("overflow", "visible");
      });

      // Close the modal display when a navbar link is clicked

      $("a.Nav-About").on("click", function() {
        $("div.modal").css({ display: "none" });
        $("body").css("overflow", "visible");
      });

      $("a.Nav-Projects").on("click", function() {
        $("div.modal").css({ display: "none" });
        $("body").css("overflow", "visible");
      });

      $("a.Nav-Contact").on("click", function() {
        $("div.modal").css({ display: "none" });
        $("body").css("overflow", "visible");
      });

      // When the user clicks anywhere outside of the modal, close it

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          $("body").css("overflow", "visible");
        }
      };
      // Exit modal display when user hits escape key
      $(document).keyup(function(e) {
        if (e.key === "Escape") {
          modal.style.display = "none";
          $("body").css("overflow", "visible");
        }
      });

      // No highlight function on mobile
      if (window.innerWidth > 500) {
        // Highlight Project on hover
        $("div.Image-One").on("mouseover", function() {
          $("div.Image-One").css(
            "background-image",
            "url(/Project-1-Dark.png)"
          );
          $("h1.Image-One").css("opacity", "1");
          $("input.Image-One").css("opacity", "1");
        });
        $("div.Image-One").on("mouseout", function() {
          $("div.Image-One").css("background-image", "url(/Project-1.png)");

          $("h1.Image-One").css("opacity", "0");
          $("input.Image-One").css("opacity", "0");
        });
        $("div.Image-Two").on("mouseover", function() {
          $("div.Image-Two").css(
            "background-image",
            "url(/Project-2-Dark.png)"
          );
          $("h1.Image-Two").css("opacity", "1");
          $("input.Image-Two").css("opacity", "1");
        });
        $("div.Image-Two").on("mouseout", function() {
          $("div.Image-Two").css("background-image", "url(/Project-2.png)");
          $("h1.Image-Two").css("opacity", "0");
          $("input.Image-Two").css("opacity", "0");
        });
        $("div.Image-Three").on("mouseover", function() {
          $("div.Image-Three").css(
            "background-image",
            "url(/Project-3-Dark.png)"
          );
          $("h1.Image-Three").css("opacity", "1");
          $("input.Image-Three").css("opacity", "1");
        });
        $("div.Image-Three").on("mouseout", function() {
          $("div.Image-Three").css("background-image", "url(/Project-3.png)");
          $("h1.Image-Three").css("opacity", "0");
          $("input.Image-Three").css("opacity", "0");
        });
      } else {
        $("div.Project-Container").removeClass("container");
      }
    });
  }
  render() {
    return (
      <div>
        <div class="Projects" id="Projects">
          <div class="Project-Container container">
            <h1>Projects</h1>
            <div class="Projects-Flex">
              <div class="Projects-Image-Flex">
                <div class="Projects-Image Image-One">
                  <h1 class="Projects-Image-Contents Image-One ">
                    MER Construction
                  </h1>
                  <input
                    class="Projects-Image-Contents Image-One btn btn-warning"
                    type="submit"
                    name=""
                    value="Learn More"
                  />
                </div>
              </div>
              <div class="Projects-Image-Flex">
                <div class="Projects-Image Image-Two">
                  <h1 class="Projects-Image-Contents Image-Two">
                    Cirrus Weather
                  </h1>
                  <input
                    class="Projects-Image-Contents Image-Two btn btn-warning"
                    type="submit"
                    name=""
                    value="Learn More"
                  />
                </div>
              </div>
              <div class="Projects-Image-Flex">
                <div class="Projects-Image Image-Three">
                  <h1 class="Projects-Image-Contents Image-Three">
                    Portfolio Site
                  </h1>
                  <input
                    class="Projects-Image-Contents Image-Three btn btn-warning"
                    type="submit"
                    name=""
                    value="Learn More"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Display Code */}
        <div id="myModal" class="modal">
          <div class="container">
            <div class="modal-content">
              <div class="Modal-Flex-Row Arrow">
                {" "}
                <img class=" close Close-Arrow" src="/White-Arrow.svg"></img>
              </div>
              <div class="Modal-Flex-Row">
                <div class="Modal-Flex-Column">
                  <h1 class="Project-Title"></h1>
                  <h3 class="Project-Info One">
                    <a target="_blank" class="Project-Link One"></a>
                  </h3>
                  <h6 class="tech-desc">Technologies Used:</h6>
                  <div class="tech-flex">
                    <a
                      class="Tech-Image One"
                      href="https://reactjs.org/"
                      target="_blank"
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 600 600"
                        class="Tech-Image One"
                      >
                        <title>React</title>
                        <circle
                          fill="currentColor"
                          class="st0"
                          cx="300"
                          cy="300"
                          r="50"
                        ></circle>
                        <path
                          fill="currentColor"
                          class="st0"
                          d="M300 415c-71 0-133-9-179-24-30-11-55-24-73-40-19-16-29-34-29-51 0-34 36-66 97-87 50-18 115-27 183-27 67 0 132 9 181 26 29 10 54 23 71 38 19 15 29 33 29 50 0 34-40 69-106 91-46 15-108 24-174 24zm0-205c-65 0-129 9-176 25-56 20-81 47-81 65s27 47 86 68c44 15 103 23 171 23 63 0 122-8 167-23 61-21 89-50 89-68 0-10-7-21-20-32-15-13-37-24-63-33-48-16-109-25-173-25z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="st0"
                          d="M186 550c-11 0-20-2-27-7-29-16-39-64-27-128 10-52 34-113 68-172 34-58 74-109 114-144 23-20 46-35 68-42 23-9 43-9 57-1 30 18 40 70 26 138-10 48-33 106-66 163-36 61-74 110-110 143-24 20-49 36-71 43-12 5-23 7-32 7zm25-301l10 6c-32 56-56 116-65 165-11 58-1 93 15 102 3 3 8 4 15 4 19 0 51-13 87-44 35-31 71-78 105-137 32-55 54-110 64-156 13-63 1-102-15-112-8-4-21-4-37 2-19 7-40 20-61 39-37 32-76 81-108 137l-10-6z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="st0"
                          d="M413 550c-27 0-61-16-97-47-41-35-81-86-116-145-33-58-57-119-67-170-6-31-7-58-4-81 5-24 15-41 29-50 30-17 81 1 132 47 37 32 75 82 108 139 36 61 60 118 69 166 6 31 7 60 3 83-5 25-15 43-30 52-8 4-17 6-27 6zM221 346c33 56 73 106 110 139 45 38 81 47 97 38 16-10 28-48 15-109-9-45-31-100-65-159-32-55-69-103-104-133-48-44-87-53-104-44-8 5-14 17-17 33-3 20-2 45 3 72 10 49 33 107 65 163z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://reacttraining.com/react-router/web/guides/quick-start"
                      target="_blank"
                    >
                      <img class="Tech-Image Two"></img>
                    </a>
                  </div>
                </div>
                <div class="Modal-Flex-Column">
                  <p class="Project-Info Two"></p>
                  <p class="Project-Info Three"></p>
                  <p class="Project-Info Four"></p>
                  <a target="_blank" class="Project-Link Two"></a>
                  <a target="_blank" class="Project-Link Three"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
