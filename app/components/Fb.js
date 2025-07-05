import { useEffect } from "react";

export default function Fbpage() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v17.0",
        });
      };

      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }, []);

  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/TripleSCM/?locale=th_TH"
      data-tabs="timeline"
      data-width="700"
      data-height="500"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/TripleSCM"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/TripleSCM">Triple-S Media</a>
      </blockquote>
    </div>
  );
}
