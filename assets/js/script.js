const tabs = document.querySelectorAll('.tab-btn')
const allContents = document.querySelectorAll('.content')
const tabContent = document.querySelector('.tabs-wrapper')

tabContent.addEventListener('click', (e) => {
  const id = e.target.dataset.id
  if (id) {
    tabs.forEach((tab) => {
      tab.classList.remove('active')
      e.target.classList.add('active')
    })
    allContents.forEach((content) => {
      content.classList.remove('active')
    })
    const element = document.getElementById(id)
    console.log(element)
    element.classList.add('active')
  }
})
