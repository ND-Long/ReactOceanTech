    const useradmin = 'admin';
    let passadmin = 'admin';
function anForm(){
    document.getElementById("btnNgoai").style.display = 'block';
    document.getElementById("formDN").style.display = 'none';
    document.getElementById("formForgot").style.display = 'none';
}

function hienForm(){
    document.getElementById("btnNgoai").style.display = 'none';
    document.getElementById('formDN').style.display = 'block';
    document.getElementById("inputName").value = '';
    document.getElementById("inputPass").value = '';
    document.getElementById("loiUser").innerHTML = '';
    document.getElementById("loiPass").innerHTML = '';
    document.getElementById("passThanhCong").innerHTML = '';
}

function loading(){
    let check=true;
    document.getElementById("login").innerHTML = 'Loading...';
    setTimeout(function (){
    dangNhap();
    document.getElementById("login").innerHTML = 'Login'; 
    },300);
}

function dangNhap(){
    
    let check = true;
    let username = document.getElementById("inputName").value;
    let pass = document.getElementById("inputPass").value;
    
    // báo lỗi khi để trống
    if(username.length == 0){
        if(pass!=0){
            document.getElementById("loiPass").innerHTML = '';
        }
        document.getElementById("loiUser").innerHTML = 'Tài khoản không được để trống';
        check = false;
    } 
    if(pass.length == 0){
        if(username!=0){
            document.getElementById("loiUser").innerHTML = '';
        }
        document.getElementById("loiPass").innerHTML = 'Mật khẩu không được để trống';
        check = false;
    }

    //báo lỗi khi sai tk mk
    if ((pass != passadmin && pass.length != 0 && username.length !=0) || (username != useradmin && username != 0 && pass != 0)){
        document.getElementById("loiPass").innerHTML = 'Tài khoản hoặc mật khẩu sai!';
        document.getElementById("loiUser").innerHTML = '';
        check = false;
    }

    //khi nhập đúng tk mk
    if(username == useradmin && pass == passadmin){
        document.getElementById("formDN").style.display = 'none';
       
        document.getElementById("loiUser").innerHTML = '';
        document.getElementById("loiPass").innerHTML = '';
        document.getElementById("thanhCong").style.display = 'block';
        // document.getElementById("btnNgoai").style.display = 'none';
        check = false;
    }
    document.getElementById("passThanhCong").innerHTML = '';
    return check;
}


function forgotPass(){
    document.getElementById("formForgot").style.display = 'block';
    document.getElementById("formDN").style.display = 'none';
    document.getElementById("save").style.display = 'block';
    document.getElementById("inputPassOld").value = '';
    document.getElementById("inputPassNew").value = '';
    document.getElementById("loiPassOld").innerHTML = '';
    document.getElementById("loiPassNew").innerHTML = '';

}

function save(){
    let check = true;
    let passOld = document.getElementById("inputPassOld").value;
    let passNew = document.getElementById("inputPassNew").value;

    

    if(passNew.length == 0){
        if(passNew!=0){
            document.getElementById("loiPassNew").innerHTML = '';        }
        document.getElementById("loiPassNew").innerHTML = 'Bắt buộc nhập';
        check = false;
    } 

    if(passOld != passadmin ){
     document.getElementById("loiPassOld").innerHTML = 'Password không đúng';
     if(passOld.length == 0){
        document.getElementById("loiPassOld").innerHTML = 'Bắt buộc nhập';
        check = false;
        if(passNew.length != 0){
            document.getElementById("loiPassNew").innerHTML = '';
        }
    } 
    } else {
        if(passNew.length !=0){
            passadmin = passNew;
            document.getElementById("formForgot").style.display = 'none';
            document.getElementById("formDN").style.display = 'block';
            document.getElementById("passThanhCong").innerHTML = 'Bạn đã đổi mật khẩu thành công!';
            document.getElementById("loiUser").innerHTML = '';
            document.getElementById("loiPass").innerHTML = '';
        } else {
            document.getElementById("loiPassNew").innerHTML = 'Bắt buộc nhập';
        }
        
    }
    
    
    return check;
}

function loading2(){
    let check=true;
    document.getElementById("save").innerHTML = 'Loading...';
    setTimeout(function (){
    save();
    document.getElementById("save").innerHTML = 'Save'; 
    },300);
}