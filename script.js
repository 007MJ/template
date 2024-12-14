
class UserCard extends HTMLElement  {
    constructor () {
        super();
        this.attachShadow ({ mode: 'open'});
        this.shadowRoot.appendChild(template.conent.cloneNOde)
        this.innerHTML = `
        <h1> ${this.getAttribute('name')}</h1>
        `;
    }
}


window.customElements.define('user-card', UserCard);