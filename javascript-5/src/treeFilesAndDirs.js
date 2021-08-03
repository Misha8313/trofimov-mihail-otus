const path = require('path');
const fs = require('fs');
/// пример запуска скрипта  'node src\treeFilesAndDirs.js C:\otus\trofimov-mihail-otus\backup'
const dirPath = process.argv[2]

let completed = 0;
const RESULT = { 'files': [], 'dirs': [] };

const getDirectoryContent = (dirPath) => {

    if (Boolean(dirPath) === false) {
        return RESULT;
    }

    fs.readdir(dirPath, (err, dirItems) => {
        if (err) {
            console.error(err);
            return;
        }

        completed = completed + dirItems.length - 1

        dirItems.forEach(item => {
            const pathItem = path.join(dirPath, item);
            fs.stat(pathItem, (err, stats) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (Boolean(stats.isDirectory())) {
                    RESULT.dirs.push(pathItem);
                    completed++;
                    // РЕКУРСИЯ
                    getDirectoryContent(pathItem);
                }
                else {
                    RESULT.files.push(pathItem);
                }
                completed--;
                if (completed === 0) {
                    finished();
                }
            });
        });

        return RESULT;
    })

    return RESULT;
}

// СТАРТ СБОРА ФАЙЛОВ
getDirectoryContent(dirPath)

const finished = () => {
    console.log(RESULT);
}
