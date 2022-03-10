const fs = require('fs');

function generateHTML(manager, engineers, interns) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    ${managerCard(manager)}
    ${engineerCard(engineers)}
    ${internCard(interns)}
</body>
</html>`;
  return html;
}

function managerCard(manager) {
  return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.id}</p>
    <p class="card-text">${manager.email}</p>
    <p class="card-text">${manager.officeNumber}</p>
  </div>
</div>`;
}

function engineerCard(engineers) {
  for (let i = 0; i < engineers.length; i++) {
    return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineers[i].name}</h5>
    <p class="card-text">${engineers[i].id}</p>
    <p class="card-text">${engineers[i].email}</p>
    <p class="card-text">${engineers[i].github}</p>
  </div>
</div>`;
  }
}

function internCard(interns) {
  for (let i = 0; i < interns.length; i++) {
    return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${interns[i].name}</h5>
    <p class="card-text">${interns[i].id}</p>
    <p class="card-text">${interns[i].email}</p>
    <p class="card-text">${interns[i].school}</p>
  </div>
</div>`;
  }
}

module.exports = generateHTML;
