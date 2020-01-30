'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: "pwasampleapp",
    short_name: "pwasampleapp",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        "src": "/assets/images/icons-192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/assets/images/icons-512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
