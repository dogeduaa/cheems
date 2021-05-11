import { Cheems } from "./lib.js";

Cheems({
    output: "#root",
    body: {
      p: {
        text: "hello world",
        styling: {
          fontFamily: "sans-serif",
          fontSize: "20px"
        }
      },
      div: {
        children: {
          h1: {
            text: "sus"
          },
          img: {
            attributes: {
              src: "https://images.adsttc.com/media/images/6059/b91c/f91c/81a5/e900/0b5f/newsletter/MAA_Istanbul_TVRadioTower_A_%C2%A9NAARO_00_Cover.jpg?1616492815",
              height: "400px",
              width: "400px",
              draggable: false
            }
          }
        }
      }
    }
  })
  