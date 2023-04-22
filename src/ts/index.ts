import AppComponent from "./components/AppComponent/AppComponent.js";

const appContainer = document.querySelector(".app");

if (appContainer) {
  new AppComponent(appContainer);
}
