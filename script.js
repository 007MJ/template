class GreetingMessage extends HTMLElement {

    constructor () {
        super();

        // console.log('constructed', this);

        this.innerHTML = 
            `<p>
                <button> Hi there!</button>
            <p>
            <div classe="message" aria-live="polite"></div>`;
        
    }

    connectedCallback() {
        console.log('connected!', this);
    }

    disconnectedCallback(){
        console.log('disconnected', this);
    }

}

if ('customElements' in window) {
    customElements.define('greeting-message', GreetingMessage);
}

// let greeting = document.querySelector('greeting-message');


// document.body.append(greeting);


// greeting.remove();