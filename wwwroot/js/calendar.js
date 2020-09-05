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

function init() {
    //console.log("MyCalendar Page");

    fetchTasks();
}


window.onload = init;