
export default class TableComponent {
    constructor(containerId, onEdit, onDelete) {
        this.container = document.getElementById(containerId);
        this.onEdit = onEdit;
        this.onDelete = onDelete;

        if (!this.container) {
            console.error(`TableComponent: container "${containerId}" not found in DOM`);
            return;
        }
    }

    // Rrender the table with all employees --------------------------------
    render(employees) {
        this.data = employees;

        //  table HTML -----------------------------------------------------
        this.container.innerHTML = `
            <table class="table table-bordered table-striped">
                <thead class="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="employee-tbody">
                    ${employees.map(emp => `
                        <tr>
                            <td>${emp.name}</td>
                            <td>${emp.role}</td>
                            <td>${emp.department}</td>
                            <td>${emp.pno}</td>
                            <td>${emp.age}</td>
                            <td>${emp.salary}</td>
                            <td>
                                <button class="btn btn-warning btn-sm editBtn" data-id="${emp.id}">Edit</button>
                                <button class="btn btn-danger btn-sm deleteBtn" data-id="${emp.id}">Delete</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;

        this.tbody = this.container.querySelector("#employee-tbody");

        //  button events ------------------------------------
        this.attachEvents();
    }


    attachEvents() {
        if (!this.tbody) return;

        // edit buttonn ----------------------------
        this.tbody.querySelectorAll(".editBtn").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.dataset.id;
                this.onEdit(id);
            });
        });

        // delete button ------------------------------
        this.tbody.querySelectorAll(".deleteBtn").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.dataset.id;
                this.onDelete(id);
            });
        });
    }
}
