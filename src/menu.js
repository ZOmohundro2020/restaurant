function Menu() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const newH1 = document.createElement("h1");
  newH1.textContent = "Our Menu";

  const newH3 = document.createElement("h3");
  newH3.textContent = "Something for everyone";

  contentDiv.appendChild(newH1);
  contentDiv.appendChild(newH3);

  // Generate restaurant menu HTML
  function generateMenuHTML() {
    const menuItems = [
      { name: "Item 1", price: "$10" },
      { name: "Item 2", price: "$12" },
      { name: "Item 3", price: "$8" },
      { name: "Item 4", price: "$15" },
      { name: "Item 5", price: "$9" },
      { name: "Item 6", price: "$11" },
      { name: "Item 7", price: "$13" },
      { name: "Item 8", price: "$14" },
      { name: "Item 9", price: "$10" },
      { name: "Item 10", price: "$16" },
    ];

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const column1 = document.createElement("div");
    column1.classList.add("column");
    const column2 = document.createElement("div");
    column2.classList.add("column");

    for (let i = 0; i < 5; i++) {
      const menuItemDiv = document.createElement("div");
      menuItemDiv.classList.add("menu-item");
      menuItemDiv.textContent = `${menuItems[i].name} - ${menuItems[i].price}`;
      column1.appendChild(menuItemDiv);
    }

    for (let i = 5; i < 10; i++) {
      const menuItemDiv = document.createElement("div");
      menuItemDiv.classList.add("menu-item");
      menuItemDiv.textContent = `${menuItems[i].name} - ${menuItems[i].price}`;
      column2.appendChild(menuItemDiv);
    }

    menuDiv.appendChild(column1);
    menuDiv.appendChild(column2);

    return menuDiv;
  }

  contentDiv.appendChild(generateMenuHTML());
}

export default Menu;
