class HeaderMenu {
  constructor(element) {
    this.listElement = element;
  }

  mainMenu = [
    {
      label: "meteor",
      url: "/",
      type: "title",
      submenu: [],
    },
    {
      label: "developers",
      url: "/",
      type: "dropdown",
      submenu: [
        {
          label: "install",
          url: "",
          isSelected: true,
        },
        {
          label: "tutorial",
          url: "",
          isSelected: false,
        },
        {
          label: "docs",
          url: "",
          isSelected: false,
        },
      ],
    },
    {
      label: "hosting",
      url: "/",
      type: "dropdown",
      submenu: [
        {
          label: "hosting",
          url: "",
          isSelected: false,
        },
      ],
    },
    {
      label: "company",
      url: "/",
      type: "dropdown",
      submenu: [
        {
          label: "culture",
          url: "",
          isSelected: false,
        },
        {
          label: "careers",
          url: "",
          isSelected: false,
        },
      ],
    },
    {
      label: "sign up",
      url: "/",
      type: "call-to-action",
      submenu: [],
    },
  ];

  static createElement(elementToCreate, label, attibuteName, attributeValue) {
    const element = `<${elementToCreate}>${label}</${elementToCreate}>`;
    element.setAttribute(attibuteName, attributeValue);
    return element;
  }

  static createElem(elementToCreate, label) {
    const element = `<${elementToCreate}>${label}</${elementToCreate}>`;
    return element;
  }

  setAttribute(elementToAddAttributeTo, attributeName, attributeValue) {
    elementToAddAttributeTo.setAttribute(attributeName, attributeValue);
  }

  static getSubMenu(data) {
    for (let elem of data) {
      console.log(elem.submenu);
    }
  }

  static getType(data, element) {
    let type = "";
    for (let elem of data) {
      switch (elem.type) {
        case "title":
          type = elem.type;
          console.log(type);
          break;
        case "dropdown":
          type = elem.type;
          console.log(type);
          element.addEventListener("mouseover", addDisplayClass);
          break;
        case "call-to-action":
          element.addEventListener("click");
          break;
      }
    }

    return type;
  }

  getUrl() {
    let url = "";
    for (let type of this.mainMenu) {
      url += `${type.url}${type.label}` + "\n ";
    }
    console.log(url);
    return url;
  }

  createHeaderMenu() {
    for (let elem of this.mainMenu) {
      this.listElement.innerHTML += HeaderMenu.createElem("li", elem.label);
    }
  }

  addDisplayClass(element) {
    element.classList.add("active");
  }

  removeDisplayClass(element) {
    element.classList.remove("active");
  }

  getSubmenuLabel() {
    for (let elem of this.mainMenu) {
      //   console.log(elem.url);
      for (const ele of elem.submenu) {
        console.log(ele.url);
      }
    }
  }
  // Test Method do add the dropdown sub-menu in order to test how the view on the page renders
  addTestMethod() {
    const div = document.createElement("div");
    div.innerHTML =
      '<a href="#">1</a href="#"> <a href="#">2</a href="#"> <a href="#">3</a href="#">';
    div.setAttribute("class", "testClass");
    const firstChild = this.listElement.firstElementChild;
    firstChild.insertAdjacentElement("beforeend", div);
  }
}

const headerNavBar = document.getElementById("dropdownMenu");
const menu = new HeaderMenu(headerNavBar);
menu.createHeaderMenu();
// menu.getUrl()
// menu.getMainMenuDataType()
menu.getSubmenuLabel();
// menu.getSubmenuSelectedType()
// menu.addTestMethod()
