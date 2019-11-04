console.log('hi')

const input = document.querySelector('#input')
console.log(input)

let keyword = null

const names = document.querySelectorAll('.name')
console.log(names[0].textContent)

input.addEventListener('keyup', ()=>{
  keyword = event.target.value
  console.log(keyword)
  

  
  for(let name of names) {
    // console.log(name.textContent)
    name.parentNode.classList.remove('hidden')
    
    if(!name.textContent.includes(keyword)) {
      console.log(name.parentNode)
      name.parentNode.classList.add('hidden')
    }
    
    if(keyword === "") {
      name.parentNode.classList.remove('hidden')
    }
    
  }
})






