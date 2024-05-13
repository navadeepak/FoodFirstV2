function menu(){
    menu_conf=document.getElementById("menu").alt;
    if(menu_conf==="0"){
        document.getElementById("menu").src="close_FILL0_wght400_GRAD0_opsz24.svg";
        document.getElementById("menu").alt="1";
        document.getElementById("lists").style="display:flex;";
        // console.log("true",document.getElementById("menu").src);
    }
    else if(menu_conf==="1"){
        document.getElementById("menu").src="menu_FILL0_wght400_GRAD0_opsz24.svg";
        document.getElementById("menu").alt="0";
        document.getElementById("lists").style="display:none;";
        // console.log("fales",document.getElementById("menu").src);
    }
}
function search_open(){
    var search_div=document.getElementById("search-div");
    var inp_fild=document.getElementById("search-fild");
    var clr=document.getElementById("clear");
    search_div.style="width:30vw;transition: all .5s;";
    inp_fild.style="display:flex;transition: all .5s;";
    clr.style="display:flex;transition: all .5s;";
    inp_fild.value="In This Version Not Work this Search! Maybe Except On Upcomming Version.";
}
function search_cls(){
    var search_div=document.getElementById("search-div");
    var inp_fild=document.getElementById("search-fild");
    var clr=document.getElementById("clear");
    search_div.style="width:5vw;transition: all .5s;";
    inp_fild.style="display:none;transition: all .5s;";
    clr.style="display:none;transition: all .5s;";
    inp_fild.value="";
}
function cart(){
    document.getElementById("cart").style="display:flex;";
    document.getElementById("popular").style="display:none;";
    document.getElementById("contact-outer").style="display:none;";
    var crt=document.getElementById("cart-but");
    if(crt.alt==="cart"){
        document.getElementById("cart").style="display:flex;";
        document.getElementById("popular").style="display:none;";
        // document.getElementById("search-div").style="display:none;";
        var search_div=document.getElementById("search-div");
        var inp_fild=document.getElementById("search-fild");
        var clr=document.getElementById("clear");
        search_div.style="display:none";
        inp_fild.style="display:none";
        clr.style="display:none";
        crt.src="home_FILL0_wght400_GRAD0_opsz24.svg"
        crt.alt="home";
    }
    else if(crt.alt==="home"){
        document.getElementById("cart").style="display:none;";
        document.getElementById("popular").style="display:flex;";
        document.getElementById("search-div").style="display:flex;"
        crt.src="shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";
        crt.alt="cart";
    }
}

function qunt(event){
    var comval=event.target.innerHTML;
    // console.log(comval);
    var cominval=event.target.value;
    // console.log(event.target.value);
    var lim=document.getElementById(`quan${cominval}`).innerHTML;
    if(comval==="+"){
        // console.log(lim);
        lim=parseInt(lim)+1
        document.getElementById(`quan${cominval}`).innerHTML=lim;
    }
    else if(comval==="-" && lim!=0){
        // console.log(lim);
        lim=parseInt(lim)-1;
        document.getElementById(`quan${cominval}`).innerHTML=lim;
    }
}
function cart_add(event){
    var dishName=event.target.value;
    // console.log(event.target.value)
    var adds=document.getElementById("lists-of-items");
    // var inornot=
    var v=event.target.value
    var price=document.getElementById(`${v}price`).innerHTML;
    // console.log(price);
    // event.target.id="0";
    var cr=document.getElementById("rem");
    cr.style="display:none;";
    if (event.target.name==="0")
    {
        // console.log(event.target.id)
        var creation=document.createElement("div");
        creation.className="items-lis";
        creation.innerHTML=`<p class="name-pf-item">${dishName}</p><div class="quantity-outter"><button class="com-but-pom" id="dec" value="${dishName}" onclick="qunt(event)">-</button><p class="quantity"><span class="quan" value=0 id="quan${dishName}">0</span></p><button class="com-but-pom" id="inc" value="${dishName}" onclick="qunt(event)">+</button></div><p class="price-of-item" id="price-of-item">Price:<span class="price-act-tot" id="price-act-tot">${price}</span></p><button onclick="ord()" class="buy">Buy</button><button class="cancel" id="cancel" onclick="remov(event)">Cancel</button>`;
        adds.append(creation)
        event.target.name="1";
        document.getElementById("custom-alert").style="display:flex;";
        document.getElementById("alert-msg").innerHTML=`successfully ${dishName} Added in Cart!`;
        document.getElementById("inner-cust-main").style="border-left: 3px solid var(--sbgcolor);border-bottom: 3px solid var(--sbgcolor);border-right: 3px solid var(--sbgcolor);";
    }
    else if (event.target.name==="1"){
        // alert("alrady exist");
        // event.target.id="0";
        document.getElementById("custom-alert").style="display:flex;";
        document.getElementById("alert-msg").innerHTML=`${dishName} Already Added in Cart!`;
        document.getElementById("inner-cust-main").style="border-left: 3px solid orange;border-bottom: 3px solid orange;border-right: 3px solid orange;"
    }
    return qunt(dishName);
}
function remov(event){
    event.target.parentElement.remove();
    var prt=event.target.parentElement;
    var crtele=prt.firstChild.innerHTML;
    document.getElementById(`${crtele}name`).name=0;
    // console.log(prt.firstChild.innerHTML);
}
function cust_alt(){
    document.getElementById("custom-alert").style="display:none;";
}
function account(){
    document.getElementById("custom-alert").style="display:flex;";
    document.getElementById("alert-msg").innerHTML=`Account future is not in this version!<br>Maybe Excepect on upcomming versions.`;
    document.getElementById("inner-cust-main").style="height:17.5vh !important;border-left: 3px solid red;border-bottom: 3px solid red;border-right: 3px solid red;"
}
function com(){
    document.getElementById("custom-alert").style="display:none;";
}
function ord(){
    document.getElementById("custom-alert").style="display:flex;";
    document.getElementById("alert-msg").innerHTML=`Buy future is not in this version!<br>Maybe Excepect on upcomming versions.`;
    document.getElementById("inner-cust-main").style="height:17.5vh !important;border-left: 3px solid red;border-bottom: 3px solid red;border-right: 3px solid red;"
}
function cont_page(){
    var c=document.getElementById("cart");
    var p=document.getElementById("popular");
    var cont=document.getElementById("contact-outer");
    c.style="display:none;";
    p.style="display:none;";
    cont.style="display:flex;";
}
function BTH(){
    var c=document.getElementById("cart");
    var p=document.getElementById("popular");
    var cont=document.getElementById("contact-outer");
    c.style="display:none;";
    p.style="display:flex;";
    cont.style="display:none;";
}