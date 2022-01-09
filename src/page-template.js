function render(teamMembersArr) { 
    let team = ''

    for (i = 0; i < teamMembersArr.length; i++) {        
        let role = teamMembersArr[i].getRole()
        let info
        if (role === 'Manager') {
            info = `Office Number: ${teamMembersArr[i].officeNumber}`
        } else if (role === 'Engineer') {
            info = `Github Link: <a href='https://github.com/${teamMembersArr[i].github}'>${teamMembersArr[i].github}</a>`
        } else if (role === 'Intern') {
            info = `School Name: ${teamMembersArr[i].school}`
        } else {
            console.log('This role is not defined');
        };

        team = team + `
        <div class='card container d-inline-flex' style='width:18rem;'>
            <div class='card-body'>
                <h5 class='card-title'>${teamMembersArr[i].name}</h5>
                <h6 class='card-subtitle mb-2 text-muted'>${role}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${teamMembersArr[i].id}</li>
                    <li class="list-group-item"> Email: 
                        <a href='mailto:${teamMembersArr[i].email}'>${teamMembersArr[i].email}</a>
                    </li>
                    <li class="list-group-item">${info}</li>
                </ul>
            </div>
        </div>
    `}

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Work Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1 class='bg-primary text-center p-5'>My Team</h1>
        </header>
            <section>
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                        ${team}
                    </div>
                </div>
            </div>
            </section>
    </body>
    </html>`
}

module.exports = render