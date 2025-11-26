export default class EmployeeCollection {
    constructor() {
        this.employees = [];
    }

    setEmployees(data) {
        this.employees = data;
    }

    add(employee) {
        this.employees.push(employee);
    }

    update(updatedEmployee) {
        const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
        if (index !== -1) this.employees[index] = updatedEmployee;
    }

    delete(id) {
        this.employees = this.employees.filter(emp => emp.id !== id);
    }

    search(query) {
        if (!query) return this.employees;
        return this.employees.filter(emp =>
            emp.name.toLowerCase().includes(query.toLowerCase()) ||
            emp.role.toLowerCase().includes(query.toLowerCase()) ||
            emp.department.toLowerCase().includes(query.toLowerCase())
        );
    }
}
