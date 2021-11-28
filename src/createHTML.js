const createManager = function (manager) {
    return `
    <div>
        <div>
            <h3>${manager.getName()}</h3>
            <h4>Manager</h4>
        </div>

        <div class="card-body">
            <p>ID: ${manager.getID()}</p>
            <p>Email: ${manager.getEmail()}</p>
            <p>Number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>
    `;
}

const createEngineer = function (engineer) {
    return `
    <div>
        <div>
            <h3>${engineer.getName()}</h3>
            <h4>Engineer</h4>
        </div>

        <div>
            <p>ID: ${engineer.getID()}</p>
            <p>Email: ${engineer.getEmail()}</p>
            <p>Github: ${engineer.getGitHub()}</p>
        </div>

    </div>
    `
}

const createIntern = function (intern) {
    return `
    <div>
        <div>
            <h3>${intern.getName()}</h3>
            <h4>Intern</h4>
        </div>

        <div class="card-body">
            <p>ID: ${intern.getID()}</p>
            <p>Email: ${intern.getEmail()}</p>
            <p>School: ${intern.getSchool()}</p>
        </div>
    </div>
    `
};

const organizeTeam = function(team) {
    const cardArray = []
    cardArray.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createManager(manager)));
    cardArray.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineer(engineer)).join(""));
    cardArray.push(team.filter(employee => employee.getRole() === "Intern").map(intern => createIntern(intern)).join(""));
    return cardArray;
}

const createTeamPage = function(team) {  

    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <nav>
                    <span>My Team</span>
                </nav>
            </header>
            <main>
                <div>
                    <div>
                    ${organizeTeam(team)}
                    </div>
                </div>
            </main>
        
        </body>

    </html>


`;
}

module.exports = createTeamPage; 