function makeChange() {
    var fixed_box = document.getElementById('fixed_box');
    var product_total = document.getElementById('product_total');
    var all_cart = document.getElementById('all_cart');
    var inner_text = document.getElementById('click').innerText;
    var main = document.getElementById('main');
    var click = document.getElementById('click');
    if (inner_text == "+"){
        main.classList.remove('col-12');
        main.classList.add('col-9');
        fixed_box.classList.remove('fixe_cart');
        all_cart.classList.remove('all_cart');
        fixed_box.classList.add('fixe_cart_show');
        product_total.classList.add('d-none');
        click.classList.add('click');
        click.innerHTML = "Close";
    }else {
        main.classList.remove('col-9');
        fixed_box.classList.add('fixe_cart');
        fixed_box.classList.remove('fixe_cart_show');
        all_cart.classList.add('all_cart');
        product_total.classList.remove('d-none');
        main.classList.add('col-12');
        click.innerHTML = "+";
        click.classList.remove('click');
    }
}

var product_array = [];
product_array[0] = ['T-shirt', 200,0];
product_array[1] = ['Pant', 300,0];
product_array[2] = ['Shari', 1300,0];
product_array[3] = ['Lungi', 450,0];
product_array[4] = ['Shirt', 650,0];
product_array[5] = ['Watch - 01', 2000,0];
product_array[6] = ['Watch - 02', 1500,0];
product_array[7] = ['Watch - 03', 1700,0];
product_array[8] = ['Watch - 04', 3400,0];
product_array[9] = ['Watch - 05', 2750,0];
product_array[10] = ['Watch - 06', 1690,0];
product_array[11] = ['Watch - 07', 1290,0];
product_array[12] = ['Watch - 08', 5600,0];
product_array[13] = ['Hijab', 1200,0];
product_array[14] = ['Orna', 180,0];
product_array[15] = ['Three Piece', 780,0];
product_array[16] = ['Women Jacket', 4780,0];
product_array[17] = ['Panjabi', 1800,0];

function product_add(product_id){
    product_array[product_id][2] += 1;
    var remove_button_id = "r_" + product_id;
    var total_added = 0;
    var cart_list = "";
    var total_cost = 0;
    for (i = 0; i<product_array.length; i++){
        if (product_array[i][2] != 0 ){
            total_added += 1;
            cart_list += '<div class="mb-2 card" id="single_cart_' + i +'"><div class="card-body"><table width="100%"><tr><td>'+ product_array[i][0] +'</td><td id="order_'+ i +'" style="text-align: right; white-space: nowrap">'+product_array[i][1]+'x'+ product_array[i][2] +'='+ product_array[i][2]*product_array[i][1] +'</td><td style="text-align: right"><button onclick="close_single_cart(this.id)" id="cart_' + i +'">x</button></td></tr></table></div></div>';
            total_cost += product_array[i][2]*product_array[i][1];
        }
    }
    cart_list += '<div class="mb-2 card"><div class="card-body"><table width="100%"><tr><td><b>Total Amount</b></td><td id="total_cost" style="text-align: right; white-space: nowrap">'+ total_cost +'/=</td></tr></table></div></div>';
    document.getElementById('product_total').innerHTML = total_added;
    document.getElementById('all_cart').innerHTML = cart_list;
    document.getElementById(remove_button_id).classList.remove('d-none');
}

function product_remove(product_id) {
    var calculate_id = "order_" + product_id;
    var calculation_td = document.getElementById(calculate_id);
    if (product_array[product_id][2] > 1 ){
        product_array[product_id][2] -= 1;
    }else if(product_array[product_id][2] == 1){
        var make_click_id = "cart_" + product_id;
        close_single_cart(make_click_id);
    }else if(product_array[product_id][2] == 0){
        alert("This product is not added");
    }
    var total_cost = 0;
    for (i = 0; i<product_array.length; i++){
        if (product_array[i][2] != 0 ){
            total_cost += product_array[i][2]*product_array[i][1];
        }
    }
    document.getElementById("total_cost").innerHTML = total_cost + "/=";
    calculation_td.innerHTML = product_array[product_id][1]+'x'+ product_array[product_id][2] +'='+ product_array[product_id][2]*product_array[product_id][1];
}

function close_single_cart(clicked_id) {
    var make_main_id = "single_" + clicked_id;
    var original_id = clicked_id.substr(5);
    var remove_button_id = "r_" + original_id;
    product_array[original_id][2] = 0;
    var total_cost = 0;
    var total_added = 0;
    for (i = 0; i<product_array.length; i++){
        if (product_array[i][2] != 0 ){
            total_added += 1;
            total_cost += product_array[i][2]*product_array[i][1];
        }
    }
    document.getElementById('product_total').innerHTML = total_added;
    document.getElementById(make_main_id).classList.add('d-none');
    document.getElementById("total_cost").innerHTML = total_cost + "/=";
    document.getElementById(remove_button_id).classList.add('d-none');
}






















