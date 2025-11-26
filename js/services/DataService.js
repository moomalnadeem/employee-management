export default class DataService {
    constructor() {
        this.api = "https://6926b10d26e7e41498fb2e0e.mockapi.io/api/employee";
        this.collection = { employees: [] };
    }

    async loadEmployees() {
        const res = await fetch(this.api);
        this.collection.employees = await res.json();
        return this.collection.employees;
    }

    async addEmployee(emp) {
        const res = await fetch(this.api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emp)
        });
        const newEmp = await res.json();
        this.collection.employees.push(newEmp);
        return newEmp;
    }

    async updateEmployee(id, emp) {
        const res = await fetch(`${this.api}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emp)
        });
        const updated = await res.json();
        const index = this.collection.employees.findIndex(e => e.id == id);
        if (index >= 0) this.collection.employees[index] = updated;
        return updated;
    }

    async deleteEmployee(id) {
        await fetch(`${this.api}/${id}`, { method: "DELETE" });
        this.collection.employees = this.collection.employees.filter(e => e.id != id);
    }

    search(query) {
        return this.collection.employees.filter(emp => {
            return emp.name.toLowerCase().includes(query.toLowerCase()) ||
                emp.role.toLowerCase().includes(query.toLowerCase());
        });
    }
}
