  // follow me on ig @tubemv
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
    }
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".ul1",
    ".ul1 .li1",
  );
  mobileNavbar.init();
  // follow me on ig @aeomv