/*
  File: landing.js
  Date: February 20, 2022
  Stephen Kymn, IS 322 Section 102
 */

var currentPos = 0;

function removeActive()
{
    document.getElementById("imgCase").classList.remove("oldClass");
    document.getElementById("imgCase").classList.add("newClass");
}