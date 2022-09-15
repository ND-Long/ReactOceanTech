function hienForm(){
    document.getElementById('formDN').style.display = 'block';
    document.getElementById("inputName").value = '';
    document.getElementById("inputPass").value = '';
    document.getElementById("loiUser").innerHTML = '';
    document.getElementById("loiPass").innerHTML = '';
}

function dangNhap(){

    let check = true;
    let username = document.getElementById("inputName").value;
    let pass = document.getElementById("inputPass").value;
    
    // báo lỗi khi để trống
    if(username == 0){
        document.getElementById("loiUser").innerHTML = 'Tài khoản không được để trống';
        check = false;
    } 
    if(pass == 0){
        document.getElementById("loiPass").innerHTML = 'Mật khẩu không được để trống';
        check = false;
    }

    //báo lỗi khi sai tk mk
    if ((pass != 'admin' && pass != 0) || (username != 'admin' && username != 0)){
        document.getElementById("loiPass").innerHTML = 'Tài khoản hoặc mật khẩu sai!';
        document.getElementById("loiUser").innerHTML = '';
        check = false;
    }

    //khi nhập đúng tk mk
    if(username == 'admin' && pass == 'admin'){
        document.getElementById("formDN").style.display = 'none';
        check = false;
        document.getElementById("loiUser").innerHTML = '';
        document.getElementById("loiPass").innerHTML = '';
        document.getElementById("thanhCong").style.display = 'block';
        document.getElementById("btnNgoai").style.display = 'none';
    }
    return check;
}