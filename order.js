function calculatePrice() {
    var drink = document.getElementById("drink").value;
    var small = document.getElementsById("small");
    var medium = document.getElementsById("medium");
    var large = document.getElementsById("large");
    var price = document.getElementById("price");
    if(drink == "1"){
        if(small.checked){
            price.innerHTML = "18";
        }   
        if(medium.checked){
            price.innerHTML = "24";
        }
        if(large.checked){
            price.innerHTML = "28";
        } 
    }
    if(drink == "2"){
        if(small.checked){
            price.innerHTML = "13";
        }   
        if(medium.checked){
            price.innerHTML = "18";
        }
        if(large.checked){
            price.innerHTML = "22";
        } 
    }
    if(drink == "3"){
        if(small.checked){
            price.innerHTML = "15";
        }   
        if(medium.checked){
            price.innerHTML = "20";
        }
        if(large.checked){
            price.innerHTML = "24";
        } 
    }
}

function validateForm(){
    var name = document.getElementById("name").value;
    var drink = document.getElementById("drink").value;
    var size = document.getElementsByName("size").value;
    var ice = document.getElementsByName("ice").value;
    var sweetness = document.getElementsByName("").value;

    name = trim(name);
    if(name = null){
        alert("Please enter your name!");
        return false;
    }
    if(drink = "default"){
        alert("Please select a drink first!");
        return false;
    }
    else{
        return true;
    }
}

function placeOrder(event){
    var name = document.getElementById("name").value;
    var drink = document.getElementById("drink").value;
    var size = document.getElementsByName("size").value;
    var ice = document.getElementsByName("ice").value;
    var sweetness = document.getElementsByName("sweetness").value;
    var orderData = new Array[5]; 

    event.preventDefault();
    if(event.validateForm() == true){
        orderData[0] = name;
        orderData[1] = drink;
        orderData[2] = size;
        orderData[3] = ice;
        orderData[4] = sweetness;
        localStorage.setItem("orders", orderData)
        alert("Order placed successfully! Thank you for your order.")
    }
}