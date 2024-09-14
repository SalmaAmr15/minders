let cartCount = 0;

function addToCart() {
    cartCount++;  
    document.getElementById("cart-counter").textContent = cartCount;
}

function switchLists() {
    var list1 = document.getElementById("ulproduct");
    var list2 = document.getElementById("ulhair");
    var list3=document.getElementById("ulnails");
    var list4=document.getElementById("ulcream");
    var list5=document.getElementById("ulserum");

    list1.style.display = "none";
    list2.style.display = "flex";
    list3.style.display = "none";
    list4.style.display = "none";
    list5.style.display="none";
}

function switchListsn() {
    var list1 = document.getElementById("ulproduct");
    var list2 = document.getElementById("ulhair");
    var list3=document.getElementById("ulnails");
    var list4=document.getElementById("ulcream");
    var list5=document.getElementById("ulserum");

    list1.style.display = "none";
    list2.style.display = "none";
    list3.style.display = "flex";
    list4.style.display = "none";
    list5.style.display="none";
}

function switchListsc() {
    var list1 = document.getElementById("ulproduct");
    var list2 = document.getElementById("ulhair");
    var list3=document.getElementById("ulnails");
    var list4=document.getElementById("ulcream");
    var list5=document.getElementById("ulserum");

    list1.style.display = "none";
    list2.style.display = "none";
    list3.style.display = "none";
    list4.style.display = "flex";
    list5.style.display="none";
}


function switchListsa() {
    var list1 = document.getElementById("ulproduct");
    var list2 = document.getElementById("ulhair");
    var list3=document.getElementById("ulnails");
    var list4=document.getElementById("ulcream");
    var list5=document.getElementById("ulserum");

    list1.style.display = "flex";
    list2.style.display = "flex";
    list3.style.display = "flex";
    list4.style.display = "flex";
    list5.style.display="flex";
}


function switchListss() {
    var list1 = document.getElementById("ulproduct");
    var list2 = document.getElementById("ulhair");
    var list3=document.getElementById("ulnails");
    var list4=document.getElementById("ulcream");
    var list5=document.getElementById("ulserum");

    list1.style.display = "none";
    list2.style.display = "none";
    list3.style.display = "none";
    list4.style.display = "none";
    list5.style.display="flex";
}
const icon=document.getElementsByClassName('checkbox')[0];
const nav=document.getElementsByClassName('ulnav2')[0];
icon.addEventListener("click", e =>{
    if(nav.style.display=='none'){
        nav.style.display='block';
    }
    else{
        nav.style,display='none';
    }
})
  