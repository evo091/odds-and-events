// === State ===
/* Amount numbers starting in the bank */
let bank = [];

/* Amount of numbers starting in odds */
let odds = [];

/* Amount of numbers starting in evens */
let evens = [];

/** Adds number to bank
 * @param {number} n
 */

function addToBank(n) {
    bank.push(n);
}

function sort1() {
    if (bank.length > 0) {
        n = bank.shift();
        console.log(n);
        if (n % 2 === 0) {
            evens.push(n);
        }
        if (n % 2 !== 0) {
            odds.push(n);
        }
    }
}

function sortAll() {
    for (i = 0; i < bank.length; ++i) {
        n = bank[i];
        console.log(n);
        if (n % 2 === 0) {
            evens.push(n);
        }
        if (n % 2 !== 0) {
            odds.push(n);
        }
        
    }
    bank = [];
}

// === Components ===
/* allows user to add numbers to the bank and sort 1 or sort all*/
function addForm() {
    const $form = document.createElement("form");
    $form.classList.add('addform');

    $form.innerHTML = `
        <label>
            Add a number to the bank
            <input name="add" type="number" />
        </label>
        <button id="bankAdd">Add number</button>
        <button id="sort1">Sort 1</button>
        <button id="sortAll">Sort All</button>
        `;

/* Event Listener for submit */
    $form.addEventListener("submit", function (event) {
        
        event.preventDefault();

       const formData = new FormData($form);
       const add = Number(formData.get("add"));

        if (event.submitter.id == "bankAdd") {
            if (add !== 0) {
                addToBank(add);
               
            }
            console.log(event.submitter.id)
        } else if (event.submitter.id == "sort1") {
            sort1();
        } else if (event.submitter.id == "sortAll") {
            sortAll();
        }
        render();    
    })
    return $form;
}

function bankForm() {
    const $bank = document.createElement("div");
    $bank.classList.add('bankform');

    $bank.innerHTML = `
        <div>${bank.join(" ")}</div>
`;
return $bank;
}

function oddForm() {
    const $odd = document.createElement("div");
    $odd.classList.add("oddform");

    $odd.innerHTML = `
        <div>${odds.join(" ")}</div>
`;
return $odd
}

function evenForm() {
    const $even = document.createElement("div");
    $even.classList.add("evenform");

    $even.innerHTML = `
        <div>${evens.join(" ")}</div>
`;
return $even
}
    

// === Render ===
function render() {
    const $app = document.querySelector('#app');
    $app.innerHTML = `
    <h1>Odds and Events</h1>
    <addForm></addForm>
    <main>
        <h3>Bank</h3>
        <bankForm></bankForm>
        <h3>Odds</h3>
        <oddForm></oddForm>
        <h3>Evens</h3>
        <evenForm></evenForm>
    </main>
`;
$app.querySelector("addForm").replaceWith(addForm());
$app.querySelector("bankForm").replaceWith(bankForm());
$app.querySelector("oddForm").replaceWith(oddForm());
$app.querySelector("evenForm").replaceWith(evenForm());
console.log(bank);
}
render();