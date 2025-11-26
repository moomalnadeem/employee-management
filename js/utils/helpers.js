export function exportCSV(data) {
    const csv = [
        Object.keys(data[0]).join(","), // headers
        ...data.map(emp => Object.values(emp).join(","))
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "employees.csv";
    link.click();
}

export function exportJSON(data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "employees.json";
    link.click();
}
