window.onload = function(){

    var quantity_amount = 0;

    var items = document.getElementsByTagName("span");

    for(let x = 0; x < items.length; x++){

        items[x].onclick = function(){
            if(x == 0){
                document.getElementById("colorName").innerHTML = "Electric Red";
            }
            else if(x == 1){
                document.getElementById("colorName").innerHTML = "Light Purple";
            }
            else if(x == 2){
                document.getElementById("colorName").innerHTML = "Black Black";
            }
            else if(x == 3){
                document.getElementById("colorName").innerHTML = "White white";
            }
            else if(x == 4){
                document.getElementById("colorName").innerHTML = "Te Best Peach";
            }
            else if(x == 5){
                document.getElementById("colorName").innerHTML = "Yellow yellow";
            }
            else if(x == 6){
                document.getElementById("colorName").innerHTML = "Sky Blue";
            }
            else if(x == 7){
                document.getElementById("colorName").innerHTML = "Devil Grey";
            }
            else if(x == 8){
                document.getElementById("colorName").innerHTML = "Mhhmm Peach";
            }
            else if(x == 9){
                document.getElementById("colorName").innerHTML = "Sky Blue!!!";
            }
            else if(x == 10){
                document.getElementById("colorName").innerHTML = "Bish Sliiiiiime";
            }
            else if(x == 11){
                document.getElementById("colorName").innerHTML = "Other Purple";
            }
            else if(x == 12){
                document.getElementById("colorName").innerHTML = "Lite Purp";
            }
            else if(x == 13){
                document.getElementById("colorName").innerHTML = "Tha Grey";
            }
            else if(x == 14){
                document.getElementById("colorName").innerHTML = "Dark Brown";
            }
            else if(x == 15){
                document.getElementById("colorName").innerHTML = "Very Light Blue";
            }
            else{
                document.getElementById("colorName").innerHTML = "Light Grey";
            }

        }

    }

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addToCart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("the_color").innerHTML = document.getElementById("colorName").innerText;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var btnplus = document.getElementById("plus");
var btnminus = document.getElementById("minus");

btnplus.onclick = function(){
    quantity_amount += 1;
    document.getElementById("amount").innerHTML = quantity_amount;
}

btnminus.onclick = function(){
    if(quantity_amount>0){quantity_amount -= 1;}
    document.getElementById("amount").innerHTML = quantity_amount;
}

btnagree = document.getElementById("agree-button");
btncancel = document.getElementById("cancel-button");
modal = document.getElementById("myModal");

btnagree.onclick = function(){
    modal.style.display = "none";
    document.getElementById("itemsInCart").innerHTML = quantity_amount;
    document.getElementById("addToCart").innerHTML = "(" + quantity_amount + ") Check out now."
}
btncancel.onclick = function(){
    modal.style.display = "none";
}


}