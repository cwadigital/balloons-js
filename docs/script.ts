import { balloons } from "../src/index";

document.addEventListener("DOMContentLoaded", () => {
  balloons(undefined, [
    // red
    ["#f89640ee", "#eb002bff"],
    // Black
    ["#384f5cee", "#1b1b26ff"],
    // Slate
    ["#668393EE", "#384f5cee"],
]);
  const button = document.getElementById("releastBalloonsButton");

  button?.addEventListener("click", () => {
    balloons(undefined, [
    // red
    ["#f89640ee", "#eb002bff"],
    // Black
    ["#384f5cee", "#1b1b26ff"],
    // Slate
    ["#668393EE", "#384f5cee"],
]);
  });
});
