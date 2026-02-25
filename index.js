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
    start += n;
}

function sort1(n) {
    if (start > 0) {
        start -= 1;
        if (n % 2 === 0) {
            sortEvens += 1;
        }
        if (n % 2 !== 0) {
            sortOdds += 1;
        }
    }
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
        <button>Add number</button>
        <button>Sort 1</button>
        <button>Sort All</button>
        `;

/* Event Listener for submit */
$form.addEventListener("submit", function (event) {
event.preventDefault();

    const formData = new FormData($form);
    const add = Number(formData.get("add"));

    if (add > 0) {
        addToBank(add);
        render();
    }
    })
    return $form;
}



function bankForm() {
    const $bank = document.createElement("form");
    $bank.classList.add('bankform');

    $bank.innerHTML = `
    <label>
    <input name="bank" type="number" />
    </label>
`;
return $bank;
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
        <sortOdds></sortOdds>
        <h3>Evens</h3>
        <sortEvens></sortEvens>
    </main>
`;
$app.querySelector("addForm").replaceWith(addForm());
$app.querySelector("bankForm").replaceWith(bankForm());
//$app.querySelector("sortOdds").replaceWith(sortOdds());
//$app.querySelector("sortEvens").replaceWith(sortEvens());
console.log(start);
}
render();