import { uwuJs } from "./lib.js";

const html = {
  output: "#root",
  body: {
    $: {
      fontImport: "https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,700"
    },
    div: {
      attributes: {
        class: "header"
      },
      styling: {
        padding: "20px 0",
        boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        fontFamily: "Open Sans"
      },
      children: {
        nav: {
          styling: {
            width: "90%",
            margin: "auto",
            display: "flex",
            alignItems: "center"
          },
          children: {
            div: {
              styling: {
                flex: "2",
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
                listStyle: "none"
              },
              children: {
                li: {
                  text: "home"
                },
                li2: {
                  text: "contacts"
                },
                li3: {
                  text: "about"
                }
              }
            }
          }
        }
      }
    }
  }
}

uwuJs(html);