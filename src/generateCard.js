// const jscard = $('#jscard');


function generateCard(data) {
    let card = 
    $(`
        <div class="container" id="jscard">
            <div class="row">
                <div class="card col-lg-4" id="cardStyle"> 
                    <h2> ${data.managerName} </h2>
                    <h3> ${data.managerName} </h3>
                    <hr>
                    <h4> ${data.managerID} </h4>
                    <hr>
                    <h4> ${data.managerEmail} </h4>
                    <hr>
                    <h4> ${data.managerOfficeNum} </h4>
                </div>
            </div>
        </div>
    `);

    jscard.append(card);

}