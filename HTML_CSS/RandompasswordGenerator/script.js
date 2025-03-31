let passwordOne = document.getElementById('passwordOne');

let passwordTwo = document.getElementById('passwordTwo');

const characters =   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

function GenerateRandomPassword() {
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;


    let filteredChars = characters.filter(char => {
        if (!includeSymbols && "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/".includes(char)) {
            return false;
        }
        if (!includeNumbers && "0123456789".includes(char)) {
            return false;
        }
        return true;
    })

    let passwordLength = parseInt(prompt('write down you preferred password length'))
    let firstPassword = '';
    let secondPassword = '';

    for (let i = 0; i < passwordLength; i++) {
        firstPassword += filteredChars[Math.floor(Math.random() * filteredChars.length)]
        secondPassword += filteredChars[Math.floor(Math.random() * filteredChars.length)]
    }

    passwordOne.textContent = firstPassword;
    passwordTwo.textContent = secondPassword;

    passwordOne.addEventListener("click", () => {
        navigator.clipboard.writeText(passwordOne.textContent);
        alert("Password copied!");
    });

    passwordTwo.addEventListener("click", () => {
        navigator.clipboard.writeText(passwordTwo.textContent);
        alert("Password copied!");
    });
}