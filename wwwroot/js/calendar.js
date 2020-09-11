function displayTask(task){
    //console.log("Server Success - Display Tasks");
    var container = $('#tasks');

    var syntax =`
        <div class="task">
            <i class="far fa-circle check"></i>
            <div class="task-content">
                <h5 class="task-title">${task.title}</h5>
                <label class="task-notes">${task.notes}</label>
            </div>
            <i class='fas fa-star important'></i>


        </div>
    `;

    container.append(syntax);

}

function fetchTasks() {
    // create a get ajax request to /api/tasks
    // console log response from server
    $.ajax({
        url: '/Api/Tasks',
        type: 'GET',
        success: response => {
            //console.log(response);
            for(let i=0; i<response.length; i++){
                //console.log(response[i]);
                displayTask(response[i]);
            }
        },
        error: details => {
            console.log('Error getting data', details);
        }
    });
}

function register() {
    // get values from form
    let title = $('#txtTitle').val();
    let notes = $('#txtNotes').val();
    let imp = $('#chkImportant').is(":checked");

    // validation
    if(title.length < 5) {
        alert("Please verify the Title");
        return;
    }

    // create an object

    let task = {
        title: title,
        notes: notes,
        important: imp
    };
    console.log(task);

    //send object to BE
    $.ajax({
        type: 'POST',
        url: '/api/createTask',
        data: JSON.stringify(task),
        contentType: 'application/json',
        success: res => {
            console.log("Server says ", res);

            // here
            // opc 1 = get all thet tasks and render them again
        },
        error: details => {
            console.log("Error", details);
        }
    });

    // clear form
    $('#txtTitle').val("");
    $('#txtNotes').val("");
    $('#chkImportant').prop( "checked", false );

}

function init() {
    //console.log("MyCalendar Page");

    // setup events 
    $("#btnSave").click(register);

    fetchTasks();
}


window.onload = init;