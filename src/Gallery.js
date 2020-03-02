import React from "react";
import "./Gallery.css";
import $ from "jquery";

export default class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    $(document).ready(function() {
      if (window.innerWidth > 500) {
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
          console.log("hello");
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
        return;
      }
    });
  }
  render() {
    return (
      <div>
        <div class="Projects" id="Projects">
          <div class="container">
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
      </div>
    );
  }
}
