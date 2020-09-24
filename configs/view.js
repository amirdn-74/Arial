module.exports = {
  /* 
    choose your templating engine
    you can use "pug(jade)", "ejs" or "hbs(handlebars)" natively
  */
  viewEngine: "ejs",

  // specify the views directory path
  viewsDir: "app/views",

  // handlebars configuration settings
  hbsDefaultLayout: "master",
  hbsLayoutsDir: "app/views/layouts",
  hbsPartialsDir: "app/views/partials",
};
