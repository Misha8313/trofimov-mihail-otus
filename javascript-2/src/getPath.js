const getPath = (element) => {

    let result = '';
    let currentElement = element;
    let elementsSelector = '';
    let childrenRoot = '';

    while (currentElement != undefined && currentElement.localName != 'html') {

        childrenRoot = (result != '') ? ' > ' + result : '';

        // Если у текущего элемента дерева определен ID - то можно заканчивать строить уникальный селектор
        if (currentElement.id != null && currentElement.id != '') {
            return '#' + currentElement.id + childrenRoot;
        }

        // Если у текущего элемента дерева определен класс/классы - добавляем к селектору     
        elementsSelector = currentElement.localName;
        if (currentElement.classList.length > 0) {
            currentElement.classList.forEach(classItem => {
                elementsSelector = elementsSelector + "." + classItem;
            });
        }

        // Проверяем , если похожие элементы на этом же уровне вложенности , если есть - дописываем к селектору директиву :first-child
        if (currentElement.parentElement.querySelectorAll(elementsSelector + childrenRoot) != null &&
            currentElement.parentElement.querySelectorAll(elementsSelector + childrenRoot).length > 1) {
            elementsSelector = elementsSelector + ":first-child";

        }
        result = elementsSelector + childrenRoot;

        currentElement = currentElement.parentElement;
    }

    return result;
}

module.exports = getPath 