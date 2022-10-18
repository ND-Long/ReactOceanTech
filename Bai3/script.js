const useradmin = 'admin';
let passadmin = 'admin';
function hideForm() {
    document.getElementById("btnHome").style.display = 'block';
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("formForgot").style.display = 'none';
}

function showForm() {
    document.getElementById("btnHome").style.display = 'none';
    document.getElementById('formLogin').style.display = 'block';
    document.getElementById("inputName").value = '';
    document.getElementById("inputPass").value = '';
    document.getElementById("errorUser").innerHTML = '';
    document.getElementById("errorPass").innerHTML = '';
    document.getElementById("passnotificationSuccess").innerHTML = '';
}

function loading() {
    let check = true;
    document.getElementById("login").innerHTML = 'Loading...';
    setTimeout(function () {
        dangNhap();
        document.getElementById("login").innerHTML = 'Login';
    }, 300);
}

function dangNhap() {

    let check = true;
    let username = document.getElementById("inputName").value;
    let pass = document.getElementById("inputPass").value;

    // báo lỗi khi để trống
    if (username.length == 0) {
        if (pass != 0) {
            document.getElementById("errorPass").innerHTML = '';
        }
        document.getElementById("errorUser").innerHTML = 'Tài khoản không được để trống';
        check = false;
    }
    if (pass.length == 0) {
        if (username != 0) {
            document.getElementById("errorUser").innerHTML = '';
        }
        document.getElementById("errorPass").innerHTML = 'Mật khẩu không được để trống';
        check = false;
    }

    //báo lỗi khi sai tk mk
    if ((pass != passadmin && pass.length != 0 && username.length != 0) || (username != useradmin && username != 0 && pass != 0)) {
        document.getElementById("errorPass").innerHTML = 'Tài khoản hoặc mật khẩu sai!';
        document.getElementById("errorUser").innerHTML = '';
        check = false;
    }

    //khi nhập đúng tk mk
    if (username == useradmin && pass == passadmin) {
        document.getElementById("formLogin").style.display = 'none';

        document.getElementById("errorUser").innerHTML = '';
        document.getElementById("errorPass").innerHTML = '';
        document.getElementById("notificationSuccess").style.display = 'block';
        // document.getElementById("btnHome").style.display = 'none';
        check = false;
    }
    document.getElementById("passnotificationSuccess").innerHTML = '';
    return check;
}


function forgotPass() {
    document.getElementById("formForgot").style.display = 'block';
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("save").style.display = 'block';
    document.getElementById("inputPassOld").value = '';
    document.getElementById("inputPassNew").value = '';

}

function save() {
    let check = true;
    let passOld = document.getElementById("inputPassOld").value;
    let passNew = document.getElementById("inputPassNew").value;



    if (passNew.length == 0) {
        if (passNew != 0) {
            document.getElementById("errorPassNew").innerHTML = '';
        }
        document.getElementById("errorPassNew").innerHTML = 'Bắt buộc nhập';
        check = false;
    }

    if (passOld != passadmin) {
        document.getElementById("errorPassOld").innerHTML = 'Password không đúng';
        document.getElementById("errorPassNew").innerHTML = '';
        if (passOld.length == 0) {
            document.getElementById("errorPassOld").innerHTML = 'Bắt buộc nhập';
            check = false;
            if (passNew.length != 0) {
                document.getElementById("errorPassNew").innerHTML = '';
            }
        }
    } else {
        if (passNew.length != 0) {
            if (passNew != passadmin) {
                passadmin = passNew;
                document.getElementById("formForgot").style.display = 'none';
                document.getElementById("formLogin").style.display = 'block';
                document.getElementById("passnotificationSuccess").innerHTML = 'Bạn đã đổi mật khẩu thành công!';
                document.getElementById("errorUser").innerHTML = '';
                document.getElementById("errorPass").innerHTML = '';
            } else {
                document.getElementById("errorPassNew").innerHTML = 'Mật khẩu mới phải khác mật khẩu cũ';
            }

        } else {
            document.getElementById("errorPassNew").innerHTML = 'Bắt buộc nhập';
        }

    }


    return check;
}

function loading2() {
    let check = true;
    document.getElementById("save").innerHTML = 'Loading...';
    setTimeout(function () {
        save();
        document.getElementById("save").innerHTML = 'Save';
    }, 300);
}