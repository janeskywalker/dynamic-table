

let data = [
  {
    name:"jeff",
    age:15,
    location:"sf"
  }, 
  {
    name:"emmett",
    age:69,
    location:"africa"
  },
  {
    name:"jeff",
    age:15,
    location:"sf"
  }
];

let schema = ['name','age','location'];
const table = document.querySelector('.table')
const tr = document.createElement('tr')

const createHeader = (schema) => {
  for(header of schema) {
    const th = document.createElement('th')
    th.innerText = header
    tr.append(th)
  }
}

createHeader(schema)
table.append(tr)

const insertTable = (filter)=>{
  for(item of data) {
    const tr = document.createElement('tr')
    console.log(item)
      for(let i=0; i<schema.length; i++) {

        console.log(item[schema[i]])

        if(filter) {
          if(item.name.includes(filter)) {
            const td = document.createElement('td')
            td.innerText = item[schema[i]]
            tr.append(td)
          }
        } else {

        const td = document.createElement('td')
        td.innerText = item[schema[i]]
        tr.append(td)
      }
      }
      table.append(tr)
  }
}

insertTable()

const input = document.querySelector('#input')

input.addEventListener('keyup', (evt)=>{
  for(var i = 1;i<table.rows.length;){
    table.deleteRow(i);
}
  console.log(evt.target.value)
  insertTable(evt.target.value)
})
console.log(input)

console.log(table)
