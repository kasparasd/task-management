export class Todo { 
    constructor(selector, columns) {
        this.selector = selector;
        this.columns = columns;
        this.DOM = null;

        this.init();
    }

    init() {
        this.updateDOMelement();
        this.render();
    }

    updateDOMelement() {
        if(typeof this.selector!== 'string' || this.selector === '') {
            throw new Error('Netinkamas selektorius');
        }
        this.DOM = document.querySelector(this.selector)
    }

    render() {
        let HTML = '';

        for (const column of this.columns){
            HTML += `
                <div>
                    <h4>${column}</h4>
                    <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                </div>
            `
        }
        this.DOM.classList.add('todo');
        this.DOM.innerHTML = HTML;
        this.DOM.style.gridTemplateColumns = `repeat(${this.columns.length}, 1fr)`
    }
 }
