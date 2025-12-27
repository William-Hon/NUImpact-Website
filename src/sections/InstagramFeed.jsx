import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const init = () => {
      if (window.SociableKit && window.SociableKit.load) {
        window.SociableKit.load();
      }
    };

    if (!document.querySelector('script[src*="sociablekit.com/instagram-feed"]')) {
      const script = document.createElement("script");
      script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
      script.async = true;
      script.onload = init;
      document.body.appendChild(script);
    } else {
      init();
    }
  }, []);

  return (
    <div
      className="sk-instagram-feed"
      data-embed-id="25636077"
    />
  );
};

export default InstagramFeed;
