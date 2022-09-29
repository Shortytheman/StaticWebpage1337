import { addOne } from "./addOne.js"
import { editOne } from "./editOne.js"
import { findOne } from "./findOne.js"
import { showAll } from "./showAll.js"


let lastVisibleContent = document.getElementById("div-info");
document.getElementById("btns").onclick = handleButtonClick

export function handleButtonClick(evt) {
    const target = evt.target
    const isMenuBtn = target.tagName === "BUTTON" && target.id.startsWith("mbtn-")
    if (!isMenuBtn) {
      return
    }
    lastVisibleContent.style.display = "none"
    const idForNewVisibleContent = target.id.replace("mbtn", "div")
    lastVisibleContent = document.getElementById(idForNewVisibleContent);
    lastVisibleContent.style.display = "block"

    //Now handle JavaScript for the buttom clicked
    switch (target.id) {
      case "mbtn-info": break //No JavaScript for this view
      case "mbtn-show-all": showAll(); break
      case "mbtn-find-one": findOne(); break
      case "mbtn-add-one": addOne(); break
      case "mbtn-edit-one": editOne(); break
    }
  }