const fs = require('fs');

function generateCard(data) {
    if (data.getRole() === "Manager") {
        let card = `
            <div class="card col-lg-4" id="cardStyle"> 
                <div id=cardHead> 
                    <h2> ${data.name} </h2>
                    <h3> ${data.getRole()} </h3>
                </div>
                <hr>
                <h5> ID: ${data.id} </h5>
                <hr>
                <h5> Email: <a href='mailto:${data.email}'>${data.email}</a> </h5>
                <hr>
                <h5> Office Number: ${data.officeNum} </h5>
            </div>
            `
        appendToFile('./src/cardInfo.txt', card);
    }

    if (data.getRole() === "Engineer") {
        let card = `
            <div class="card col-lg-4" id="cardStyle"> 
                <div id=cardHead> 
                    <h2> ${data.name} </h2>
                    <h3> ${data.getRole()} </h3>
                </div>
                <hr>
                <h5> ID: ${data.id} </h5>
                <hr>
                <h5> Email: <a href='mailto:${data.email}'>${data.email}</a> </h5>
                <hr>
                <h5> GitHub: <a href="https://github.com/${data.getGitHub()}" target="blank"> ${data.getGitHub()} </a></h5>
            </div>
            `
        appendToFile('./src/cardInfo.txt', card);
    }

    if (data.getRole() === "Intern") {
        let card = `
            <div class="card col-lg-4" id="cardStyle"> 
                <div id=cardHead> 
                    <h2> ${data.name} </h2>
                    <h3> ${data.getRole()} </h3>
                </div>
                <hr>
                <h5> ID: ${data.id} </h5>
                <hr>
                <h5> Email: <a href='mailto:${data.email}'>${data.email}</a> </h5>
                <hr>
                <h5> School: ${data.gitSchool()} </h5>
            </div>
            `
        appendToFile('./src/cardInfo.txt', card);
    }
}

function appendToFile(filename, card) {
    fs.appendFileSync(filename, `${card}`, (err) => {
        if (err) throw err;
    })
}

module.exports = generateCard;