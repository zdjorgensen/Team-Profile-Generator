const fs = require('fs');

function generateHTML() {
    return `
        <!doctype html>
        <html lang="en">
            <head>
                <title>Team Profile Generator</title>
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
                <!-- Bootstrap CSS -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <link rel="stylesheet" href='./style.css'/>
            </head>

            <body>
    
                <header>
                    <h1 class="display-4 text-center"> My Team </h1>
                </header>
    
    
                <!-- Generated employee card -->
                <div class="container" id="jscard"> 
                    <div class="row">
                        ${fs.readFileSync('./src/cardInfo.txt')}
                    </div>
                </div>
                <!-- Optional JavaScript -->
                <!-- jQuery first, then Bootstrap JS -->
                <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                <script src="../index.js"></script>
            </body>
        </html>`
}

module.exports = generateHTML;