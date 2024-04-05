import heroImage from "./restaurantHero.jpg";

function Landing() {
  const newDiv = document.createElement("div");
  newDiv.className = "content";

  const newH1 = document.createElement("h1");
  newH1.textContent = "Cool Restaurant";

  const newH3 = document.createElement('h3');
  newH3.textContent = "The best eats this side of cool";

  const newImg = new Image();
  newImg.src = heroImage;
  newImg.alt = "Image from Unsplash: Jay Wennington"

  newDiv.appendChild(newH1);
  newDiv.appendChild(newH3);
  newDiv.appendChild(newImg);

  return newDiv;
}

export default Landing;

{
  /* <div id="content">
<h3>Cool Restaurant</h3>
<h1>The best eats this side of cool.</h1>
<div>image here</div>
</div> */
}
