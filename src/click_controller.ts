import { Controller } from "@hotwired/stimulus"

export class ClickController extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element)
  }
}