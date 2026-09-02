```javascript
// ===== Lab 4 · the Poshtik menu becomes data =====

const poshtikMenu = [
    {
        name: "Jonna Rotte Wrap",
        category: "Wrap",
        price: 80,
        isMillet: true
    },

    {
        name: "Paneer Protein Bowl",
        category: "Bowl",
        price: 120,
        isMillet: false
    },

    {
        name: "Ragi Sangati Bowl",
        category: "Bowl",
        price: 90,
        isMillet: true
    }
];

// Print every dish using a plain for loop

for (let i = 0; i < 3; i = i + 1) {
    console.log(poshtikMenu[i]);
}

console.log("dishes modelled:", 3);


// ===== Lab 4 · read the order form on click =====

// Fetch the button once
const checkBtn = document.getElementById("check-order");

// Run this code when the button is clicked
checkBtn.addEventListener("click", function () {

    // Fetch the form fields
    const nameBox = document.getElementById("cust-name");
    const qtyBox = document.getElementById("qty");

    // Read the values
    let customerName = nameBox.value;
    let howMany = qtyBox.value;

    // Print the values
    console.log("customer name:", customerName);
    console.log("quantity:", howMany);

    // First taste of validation
    if (customerName === "") {
        console.log("⚠ the name field is empty");
    }

});
```
