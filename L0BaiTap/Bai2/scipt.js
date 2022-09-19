function load(){
    const check = true;
    const so = document.getElementById("so").value;
    const chieuDai = document.getElementById("chieuDai").value;
    const chieuRong = document.getElementById("chieuRong").value;
    var margin = document.getElementById("margin").value;
    // document.write(so+chieuDai+chieuRong+margin);
    


    if (isNaN(so) || so<0 && so != null){
        document.getElementById("loiso").innerHTML = 'Hãy nhập số </br> và lớn hơn 0';
        check = false
    } else {
        document.getElementById("loiso").innerHTML = '';
    }

    if (isNaN(chieuDai) ||chieuDai<0 && chieuDai != null){
        document.getElementById("loiChieuDai").innerHTML = 'Hãy nhập số </br> và lớn hơn 0';
        check = false
    } else {
        document.getElementById("loiChieuDai").innerHTML = '';
    }

    if (isNaN(chieuRong) || chieuRong<0 && chieuRong != null){
        document.getElementById("loiChieuRong").innerHTML = 'Hãy nhập số </br> và lớn hơn 0';
        check = false
    } else {
        document.getElementById("loiChieuRong").innerHTML = '';
    }

    if (isNaN(margin) || margin <0 && margin != null){
        document.getElementById("loiMargin").innerHTML = 'Hãy nhập số </br> và lớn hơn 0';
        check = false
    } else {
        document.getElementById("loiMargin").innerHTML = '';
    }

    // if (isNaN(padding) || padding<0 && padding != null){
    //     document.getElementById("loiPadding").innerHTML = 'Hãy nhập số </br> và lớn hơn 0 ';
    //     check = false
    // } else {
    //     document.getElementById("loiPadding").innerHTML = '';
    // }

    if (check){
        if(so!=null){
            var html = '';
            let htmlspan = '';
            for(let i=1; i<= so; i++){
                html+= '<li></li>';
                htmlspan += '<span></span>'
            }
            document.getElementById("chanle").innerHTML = html;
            document.getElementById('span').innerHTML = htmlspan;
        }

        if(chieuDai!=null){
            const li = document.getElementsByTagName('li');
            const span = document.getElementsByTagName('span');
            for(let i = 0 ; i < li.length; i++){
                li[i].style.width = chieuDai + "px";
            }

            for(let i = 0 ; i < span.length; i++){
                span[i].style.width = chieuDai + "px";
            }
        }

        if(chieuRong!=null){
            const li = document.getElementsByTagName('li');
            const span = document.getElementsByTagName('span');
            for(let i = 0 ; i < li.length; i++){
                li[i].style.height = chieuRong + "px";
            }

            for(let i = 0 ; i < span.length; i++){
                span[i].style.height = chieuRong + "px";
            }
        }

        if(margin!=null){
            const li = document.getElementsByTagName('li');
            const span = document.getElementsByTagName('span');
            for(let i = 0 ; i < li.length; i++){
                li[i].style.margin = margin + "px";
            }

            for(let i = 0 ; i < span.length; i++){
                span[i].style.margin = margin + "px";
            }
        }



        
    }


}