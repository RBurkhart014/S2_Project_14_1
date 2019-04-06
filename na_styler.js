"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Ryan Burkhart
   Date: 4/2/19  

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

window.onload = setStyles;

function setStyles() {
      var styleNum = randInt(5);

//randomizes the pictures every time the page refreshes

      var fancySheet = document.createElement("link");
      fancySheet.setAttribute("rel", "styleSheet");
      fancySheet.setAttribute("id", "fancySheet");
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(fancySheet);

      //link created an html element named link & gave it an id and source

      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

//creates a figure inside the div element

      for (var i = 0; i <= 4; i++) { 
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png")
            sheetImg.setAttribute("alt", "na_style_" + i + ".css")
            sheetImg.onclick = function (e) {
                  fancySheet.setAttribute("href", e.target.alt);
            }
            figBox.appendChild(sheetImg);
      }

      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

//loops through the page styles

      document.styleSheets[document.styleSheets.length - 1 ].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  button: 0px; \
                  margin-top: 500px \
            }", 0);
      
      document.styleSheets[document.styleSheets.length - 1 ].insertRule(
            "figure#styleThumbs img { \
                  outline: 1px solid black; \
                  cursor: pointer; \
                  opacity: 0.75; \
            }", 1);

      document.styleSheets[document.styleSheets.length - 1 ].insertRule(
            "figure#styleThumbs img:hover { \
                  outline: 1px solid red; \
                  opacity: 1; \
            }", 2);

}

//the three long yellow styles just make it so no matter what photo youre on you can still choose which one you wish to view


function randInt(size) {
      return Math.floor(size*Math.random());
   }