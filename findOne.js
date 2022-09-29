import { handleHttpErrors } from "./util.js"

const url = "https://cars4.azurewebsites.net/api/cars/"

export async function findOne() {
    document.getElementById("car-info").innerText = ""
    document.getElementById("btn-find-one").onclick = findCar
    async function findCar() {
      try {
        const carToFindId = document.getElementById("text-for-id").value
        const car = await fetch(url + carToFindId).then(handleHttpErrors)
        document.getElementById("car-info").innerText = JSON.stringify(car, null, 2)
      } catch (err) {
        console.error("Fetch err: " + err.message)
        if (err.apiError) {
          console.error("Full API error: ", err.apiError.message)
          document.getElementById("error").innerText = err.apiError.message
        }
      }
    }
  }