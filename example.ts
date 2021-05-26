import { uwuJs } from "./lib.js";

const linkStyling = {
  textDecoration: "none",

}

const html = {
  output: "#root",
  body: {
    $util: {
      fontImport: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,500&display=swap",
      css: "a:hover { text-decoration: underline; }",
      title: "uwu.js demo",
      favicon: {
        type: "image/png",
        href: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1200px-Transgender_Pride_flag.svg.png"
      },
      importScript: "https://code.jquery.com/jquery-3.6.0.js"
    },
    div: {
      attributes: {
        id: "body"
      },
      styling: {
        fontFamily: "Roboto, sans-serif"
      },
      children: {
        div: {
          attributes: {
            class: "header"
          },
          styling: {
            padding: "20px 0",
            boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center"
          },
          children: {
            nav: {
              styling: {
                width: "80%",
                margin: "auto",
                display: "flex",
                alignItems: "center"
              },
              children: {
                div: {
                  styling: {
                    flex: "1.5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start"
                  },
                  children: {
                    h1: {
                      text: "Logo"
                    }
                  }
                },
                ul: {
                  styling: {
                    flex: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    listStyle: "none",
                    textTransform: "capitalize"
                  },
                  children: {
                    li: {
                      children: {
                        a: {
                          text: "bruh",
                          styling: {
                            cursor: "pointer"
                          },
                          attributes: {
                            href: "https://www.stackoverflow.com",
                            target: "_blank"
                          }
                        }
                      }
                    },
                    li2: {
                      text: "contacts"
                    },
                    li3: {
                      text: "about"
                    },
                    li4: {
                      text: "pictures"
                    },
                    li5: {
                      text: "locations"
                    }
                  }
                }
              }
            }
          }
        },
        h1: {
          text: "Test",
          styling: {
            marginTop: "30px",
            marginLeft: "10%"
          }
        },
        p: {
          text: "lorem ipsum sexum uwum",
          styling: {
            marginTop: "20px",
            marginLeft: "10%"
          }
        }
      }
    }
  }
}

uwuJs(html);