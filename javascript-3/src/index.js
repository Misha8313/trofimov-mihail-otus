const tree = document.querySelector('#DOMTree');
const style = document.createElement('style');
const dataTree = tree.getAttribute('dateTree');

customElements.define('my-tree',
    class extends HTMLElement {
        constructor() {
            super();
        }
    });

customElements.define('my-leaf',
    class extends HTMLElement {
        constructor() {
            super();
        }
    });

tree.attachShadow({
    mode: 'open'
});

const createTreeElem = (data, parent) => {
    const ul = document.createElement('my-tree');
    const li = document.createElement('my-leaf');
    li.appendChild(document.createTextNode(data.id));
    ul.appendChild(li);
    parent.appendChild(ul);

    if (data.items) {
        li.classList.add('parent');
        for (let i = 0; i < data.items.length; i++) {
            createTreeElem(data.items[i], li);
        }
    }
    li.classList.add('element');
    return parent;
};

const createTree = (dataTree) => createTreeElem(JSON.parse(dataTree), new DocumentFragment);

style.innerHTML = 'my-tree {    display: block;    margin-left: 16px;  }  .parent,  .element{     display: list-item;  }'
tree.shadowRoot.appendChild(style)
tree.shadowRoot.appendChild(createTree(dataTree));

