const baseDomain = "http://localhost:5000"
const baseUrl = `${baseDomain}/api/v1`

const authUser = (mail, password) => {
  fetch(`${baseUrl}/users/login`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: mail,
      password: password,
    }),
  })
    .then(async (response) => {
      if (response.status !== 200) {
        throw new Error(await response.json())
      } else {
        return response.json()
      }
    })
    .then((data) => {
      console.log("data:")
      console.log(data)
    })
    .catch((err) => {
      console.error("Error:")
      console.log(err)
    })
}

$(document).ready(function () {
  console.log("document is ready")

  $("#btn").click(function () {
    const mail = $("#mail").val()
    const password = $("#password").val()

    // console.log(`mail: ${mail}`)
    // console.log(`password: ${password}`)
    authUser(mail, password)
  })
})
