function About() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const newH1 = document.createElement("h1");
  newH1.textContent = "Founded in 2000";

  const newH3 = document.createElement("h3");
  newH3.textContent = "Family owned. Neighborhood friendly.";

  const newP = document.createElement("p");
  newP.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut elit non turpis semper ultrices. Proin nec neque vel odio convallis sollicitudin.. Sed eu leo sit amet quam egestas malesuada. Ut eget nisl ac justo efficitur fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.";

  contentDiv.appendChild(newH1);
  contentDiv.appendChild(newH3);
  contentDiv.appendChild(newP);
}

export default About;
