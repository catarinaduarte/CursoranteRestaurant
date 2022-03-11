import Cursor from "./cursor";
import {
  gsap
} from "gsap";

const body = document.querySelector("body")

window.onload = () => {
  body.classList.remove("loading");
  gsap.from(body, {
    opacity: 0,
    duration: 1.2,
    ease: "Power3.easeInOut",
  });
  const cursor = new Cursor(document.querySelector(".cursor"));
};