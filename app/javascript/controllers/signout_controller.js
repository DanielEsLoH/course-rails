import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  signout() {
    console.log("Hello world Sing out")
    const itemSingOut = document.getElementById("sign_out_li");
    itemSingOut.classList.toggle("hidden");
  }
}
