module.exports = {
  /*
  ----------------------------------------------------------
  | configure csrf protection
  ----------------------------------------------------------
  |
    choose the csrf module use cookies or in req.session
    the defualt is true
    when se to true req.session is no longer used. 
    this meens no longer need for use session.
    --------------------------------------------------------
    you can set this to object too.
    When set to an object, cookie storage of the secret is enabled and the object contains options for this functionality
    (when set to true the default obtions are used)
    more information can be found in documentions
  |
  |
  |
  */
  cookie: true,

  // choose which methods to ignore using csrf protection
  ignoreMethods: ["get"],

  // choose the session name in req. the default is req.session
  sessionKey: "session",

  // function handler
  value: null,
};
