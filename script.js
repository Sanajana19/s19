const btn = document.querySelector('button')
const inputs = document.querySelector('form')


btn.addEventListener('click', () => {
  // console.log('const cars = ["Saab", "Volvo", "BMW"];'
  // ,'console.log = (cars)');
    Email.send({
        Host:"smtp.mailtrap.io",
        Username:"0d496eb2463111",
        Password:"6e73e3089f0fbd",
        To:"xyz@gm.com",
        From:inputs.elements["userEmail"].value,
        Subject:inputs.elements["subject"].value,
        Body:inputs.elements["content"].value + "<br>" + inputs.elements["userName"].value
    }).then(msg => Swal.fire({
        position: 'middle',
        icon: 'success',
        title: 'The email has been sent successfully',
        allowOutsideClick: () => {
            const popup = Swal.getPopup()
            popup.classList.remove('swal2-show')
            setTimeout(() => {
              popup.classList.add('animate__animated', 'animate__wobble')
            })
            setTimeout(() => {
              popup.classList.remove('animate__animated', 'animate__wobble')
            }, 1500)
            return false
          }
      }))
})

