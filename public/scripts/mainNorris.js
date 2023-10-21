document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const queryInput = document.getElementById("queryInput");
    const dataTableHead = document.querySelector("#dataTable thead tr");
    const dataTableBody = document.querySelector("#dataTable tbody");

    fetchDataButton.addEventListener("click", function() {
        const query = queryInput.value;
        if(query){
            fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    dataTableHead.innerHTML = '';
                    dataTableBody.innerHTML = '';

                    dataTableHead.insertAdjacentHTML('beforeend', `<th>Category</th>`);
                    dataTableHead.insertAdjacentHTML('beforeend', `<th>Joke</th>`);

                    for (let i = 0; i < data.result.length; i++){
                        console.log(data.result[i]);
                        
                        dataTableBody.insertAdjacentHTML('beforeend', `<tr>
                                                                        <td>${data.result[i].categories}</td>
                                                                        <td>${data.result[i].value}</td>
                                                                        </tr>`);
                    }
                    $("#dataIndexModal").modal('hide');
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                    dataTableBody.innerHTML = `<td colspan="2">Error fetching data. Please try again.</td>`;
                })
                .finally(() => {
                    $("#dataIndexModal").modal('hide');
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                });
        };
    });
});