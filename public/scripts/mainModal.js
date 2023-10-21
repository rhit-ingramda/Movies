document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataIndexInput = document.getElementById("dataIndexInput");
    const dataDisplay = document.getElementById("dataDisplay");

    fetchDataButton.addEventListener("click", function() {
        console.log("Bruh");
        const dataIndex = dataIndexInput.value;
        if (dataIndex) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${dataIndex}`)
                .then(response => response.json())
                .then(data => {
                    dataDisplay.innerHTML = `<strong>Title:</strong> ${data.title} <br> <strong>Completed:</strong>
                        ${data.completed}`;
                    $("#dataIndexModal").modal('hide');
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                    dataDisplay.innerHTML = "Error fetching data. Please try again.";
                })
                .finally(() => {
                    $("#dataIndexModal").modal('hide');
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                });
        };
    })

})