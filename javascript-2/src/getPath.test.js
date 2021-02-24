const getPath = require('./getPath');

test('test getPath functions with similar elements', () => {

    document.body.innerHTML =
        `<div class="nav">
        <div class="buttons">
            <a class="button" href="https://github.com/facebook/jest/edit/master/docs/GettingStarted1.md">Edit</a>
            <a class="button" href="https://github.com/facebook/jest/edit/master/docs/GettingStarted2.md">Copy</a>                
        </div>
        <div class="buttons">
            <a class="button" href="https://github.com/facebook/jest/edit/master/docs/GettingStarted1.md">Edit</a>
            <a class="button" href="https://github.com/facebook/jest/edit/master/docs/GettingStarted2.md">Copy</a>                
        </div>
    </div>`;

    const htmlElement = document.querySelector('a.button');

    const result = getPath(htmlElement);

    expect(document.querySelector(result))
        .toEqual(htmlElement);

    expect(document.querySelectorAll(result).length)
        .toBe(1);
});

test('test getPath functions. Element with Id', () => {

    document.body.innerHTML =
        `<div class="nav">
        <div class="buttons">
            <a id="button1" class="button" href="https://github.com/facebook/jest/edit/master/docs/GettingStarted1.md">Edit</a>
            <a id="button2" class="button" href="https://github.com/facebook/jest/edit/master/docs/GettingStarted2.md">Copy</a>
            <a id="button3" class="button" href="https://github.com/facebook/jest/edit/master/docs/GettingStarted3.md">Delete</a>
        </div>
    </div>`;

    const htmlElement = document.querySelector('a.button');

    const result = getPath(htmlElement);

    expect(document.querySelector(result))
        .toEqual(htmlElement);

    expect(document.querySelectorAll(result).length)
        .toBe(1);
});

test('test getPath functions. ParentElement with id', () => {

    document.body.innerHTML =
        `<div class="nav">
        <div id="main" class="buttons">
            <a class="button" href="https://github.com/facebook/jest/edit/master/docs/GettingStarted1.md">Edit</a>          
        </div>
    </div>`;

    const htmlElement = document.querySelector('a.button');

    const result = getPath(htmlElement);

    expect(document.querySelector(result))
        .toEqual(htmlElement);

    expect(document.querySelectorAll(result).length)
        .toBe(1);
});

