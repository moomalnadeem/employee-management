export default class SearchComponent {
    constructor(containerId, onSearch) {
        this.container = document.getElementById(containerId);
        this.onSearch = onSearch;
    }

    render() {
        this.container.innerHTML = `
            <input type="text" class="form-control" placeholder="Search by name or role" id="searchInput">
        `;
        document.getElementById("searchInput").addEventListener("input", e => {
            this.onSearch(e.target.value);
        });
    }
}
