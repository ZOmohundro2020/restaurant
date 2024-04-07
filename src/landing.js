import heroImage from "./restaurantHero.jpg";

function Landing() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const newH1 = document.createElement("h1");
  newH1.textContent = "Cool Restaurant";

  const newH3 = document.createElement("h3");
  newH3.textContent = "The best eats this side of cool";

  const newImg = new Image();
  newImg.src = heroImage;
  newImg.alt = "Image from Unsplash: Jay Wennington";

  contentDiv.appendChild(newH1);
  contentDiv.appendChild(newH3);
  contentDiv.appendChild(newImg);
}

export default Landing;
