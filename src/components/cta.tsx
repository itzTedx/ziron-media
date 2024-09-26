const Cta = () => {
  return (
    <div className="c-push">
      <div
        className="c-push_surtitle u-appear is-inview"
        data-scroll=""
        data-scroll-offset="20%"
      ></div>

      <h2
        className="c-heading -h2 c-push_title is-inview"
        data-split=""
        data-split-animation="lines"
        data-scroll=""
        data-scroll-offset="20%"
      >
        <div
          className="line"
          style={{ display: "block", textAlign: "start", width: "100%" }}
        >
          <div className="word" style={{ display: "inline-block" }}>
            Do
          </div>{" "}
          <div className="word" style={{ display: "inline-block" }}>
            The
          </div>{" "}
          <div className="word" style={{ display: "inline-block" }}>
            Choice
          </div>
        </div>

        <div
          className="line"
          style={{ display: "block", textAlign: "start", width: "100%" }}
        >
          <p></p>
        </div>
      </h2>

      <div
        className="u-appear is-inview"
        data-scroll=""
        data-scroll-offset="20%"
      >
        <a
          href="https://weavenn.com/contact/"
          target="_blank"
          className="c-button"
        >
          <span className="c-button_label">Contact us</span>
        </a>
      </div>

      <div className="c-push_media -top">
        <div
          className="c-media -lottie is-inview"
          data-module-media="m8"
          data-scroll=""
          data-scroll-repeat=""
          data-scroll-call="toggleMedia"
        >
          <div
            className="c-media_lottie"
            data-lottie-src="https://weavenn.com/wp-content/themes/weavenn/assets/lotties/push-1/data.json"
            data-lottie-id="__lottie_element_2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 690"
              width="400"
              height="690"
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: "100%",
                height: "100%",
                transform: "translate3d(0px, 0px, 0px)",
                contentVisibility: "visible",
              }}
            >
              <defs>
                <clipPath id="__lottie_element_18">
                  <rect width="400" height="690" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_18)">
                <g
                  className="png"
                  transform="matrix(0.5,0,0,0.5,-1,0)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <image
                    width="684px"
                    height="1320px"
                    preserveAspectRatio="xMidYMid slice"
                    href="https://weavenn.com/wp-content/themes/weavenn/assets/lotties/push-1/images/img_1.png"
                  ></image>
                </g>
                <g
                  className="png"
                  transform="matrix(0.5,0,0,0.5,300.25,112.69114685058594)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <image
                    width="159px"
                    height="159px"
                    preserveAspectRatio="xMidYMid slice"
                    href="https://weavenn.com/wp-content/themes/weavenn/assets/lotties/push-1/images/img_0.png"
                  ></image>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="c-push_media -bottom">
        <div
          className="c-media -lottie is-inview"
          data-module-media="m9"
          data-scroll=""
          data-scroll-repeat=""
          data-scroll-call="toggleMedia"
        >
          <div
            className="c-media_lottie"
            data-lottie-src="https://weavenn.com/wp-content/themes/weavenn/assets/lotties/push-2/data.json"
            data-lottie-id="__lottie_element_3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 370"
              width="1000"
              height="370"
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: "100%",
                height: "100%",
                transform: "translate3d(0px, 0px, 0px)",
                contentVisibility: "visible",
              }}
            >
              <defs>
                <clipPath id="__lottie_element_25">
                  <rect width="1000" height="370" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_25)">
                <g
                  className="png"
                  transform="matrix(0.5,0,0,0.5,63,48)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <image
                    width="1876px"
                    height="644px"
                    preserveAspectRatio="xMidYMid slice"
                    href="https://weavenn.com/wp-content/themes/weavenn/assets/lotties/push-2/images/img_1.png"
                  ></image>
                </g>
                <g
                  className="png"
                  transform="matrix(0.5,0,0,0.5,883.0021362304688,10.004528045654297)"
                  opacity="0.21451569343078616"
                  style={{ display: "block" }}
                >
                  <image
                    width="159px"
                    height="159px"
                    preserveAspectRatio="xMidYMid slice"
                    href="https://weavenn.com/wp-content/themes/weavenn/assets/lotties/push-2/images/img_0.png"
                  ></image>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="c-push_illus -bottomLeft"></div>
      <div className="c-push_illus -topRight"></div>
    </div>
  );
};

export default Cta;
