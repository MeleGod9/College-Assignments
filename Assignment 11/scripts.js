document.addEventListener("DOMContentLoaded", () => {
    loadEmployeeData();
});

function loadEmployeeData() {
    fetch('employees.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const employees = xml.getElementsByTagName("employee");
            const employeeTable = document.getElementById("employeeTable");

            let table = `<table>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Department</th>
                                <th>Salary</th>
                            </tr>`;

            for (let i = 0; i < employees.length; i++) {
                const id = employees[i].getElementsByTagName("id")[0].textContent;
                const name = employees[i].getElementsByTagName("name")[0].textContent;
                const age = employees[i].getElementsByTagName("age")[0].textContent;
                const department = employees[i].getElementsByTagName("department")[0].textContent;
                const salary = employees[i].getElementsByTagName("salary")[0].textContent;

                table += `<tr>
                            <td>${id}</td>
                            <td>${name}</td>
                            <td>${age}</td>
                            <td>${department}</td>
                            <td>${salary}</td>
                          </tr>`;
            }

            table += `</table>`;
            employeeTable.innerHTML = table;
        })
        .catch(error => console.log('Error loading employee data:', error));
}
