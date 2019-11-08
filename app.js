

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





console.log(table)
