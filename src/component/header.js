class HeaderTemplate extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Movies</span>
    </div>
  </nav>
  
        `;
  }
}
customElements.define("header-template", HeaderTemplate);
