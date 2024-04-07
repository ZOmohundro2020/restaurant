import "./style.css";
import Landing from "./landing";
import Menu from "./menu";
import About from "./about";

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => Landing());

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => Menu());

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => About());

Landing();