const fs = require('fs');

const readAndPrintPersons = () => {
    try {
        let text = fs.readFileSync('person.txt', 'utf8');
        let arr = JSON.parse(text);

        arr.forEach((person, index) => {
            console.log(`${index + 1}. ${person.name} ${person.surname} ${person.birthday} ${person.email}`);
        });

        console.log();
    } catch (error) {
        console.error('Error reading or parsing the file:', error.message);
    }
};

readAndPrintPersons();
