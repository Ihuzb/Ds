(function ($) {
    $(function () {
        $(".fan").css({
            width: $(".inner").width() + 'px',
            height: $(".inner").height() + 'px',
        })
        $(".sign").css({
            width: $(".inner").width() + 'px',
            height: $(".inner").height() + 25 + 'px',
        })
        //点击登陆按钮切换到登录页面
        $(".scrolly").click(function () {

            $(".inner").toggleClass("zhuan")
            $(".fan").toggleClass("qian")
        })
        //点击x号返回主页面
        $(".head>a").click(function () {

            $(".inner").toggleClass("zhuan")
            $(".fan").toggleClass("qian")
        })
        $(".headd>a").click(function () {
            $(".user").val('')
            $(".pass").val('')
            $(".user_yan").html('*用户名不要使用特殊字符*')
            $(".padd_yan").html('*密码长度8~15位*')
            $(".inner").toggleClass("zhuan")
            $(".sign").toggleClass("qian")
        })
        //点击注册显示注册页面
        $(".special").click(function () {
            if ($(".fan").hasClass("qian")) {
                return
            } else {
                $(".user").val('')
                $(".pass").val('')
                $(".user_yan").html('*用户名不要使用特殊字符*')
                $(".padd_yan").html('*密码长度8~15位*')
                $(".inner").toggleClass("zhuan")
                $(".sign").toggleClass("qian")
            }
        })
        //输入的账号和密码校验
        var ok, ok1
        $(".user").keyup(function () {
            var keyup = $(this).val()
            if (!reg(keyup)) {
                $(".user_yan").html('X用户名含有特殊字符X')
                ok = 0
            } else if (keyup.length === 0) {
                $(".user_yan").html('*用户名不要使用特殊字符*')
                ok = 0
            } else {
                $(".user_yan").html('√用户名可以使用√')
                ok = true
            }
        })
        $(".pass").keyup(function () {
            var keyup = $(this).val()
            if (keyup.length > 10) {
                $(".padd_yan").html('X 密码长度过长 X')
                ok1 = 1
            } else if (keyup.length === 0) {
                $(".padd_yan").html('* 密码长度8~15位 *')
                ok1 = 1
            } else {
                $(".padd_yan").html('√ 密码可以使用 √')
                ok1 = true
            }
        })
        //判断是否都填写正确
        $(".zhucee").click(function () {
            if (ok === ok1) {
                $.ajax({
                    url: '/login',
                    type: 'post',
                    data: {
                        usname: $('.user').val(),
                        uspass: $('.pass').val()
                    }, success: function (data) {
                        console.log(data)
                        if (!data.zhuangtai) {
                            $(".tixing").html('* 此用户名已经被注册，请重新输入 *').slideDown().delay(2000).slideUp()
                        } else {
                            $(".tixing").html('√ 注册成功,请前往登录页面登录 √').slideDown().delay(2000).slideUp()
                        }
                    }, error: function () {
                        console.log('nononon')
                    }
                })
            } else {
                $(".tixing").html('X 用户名或密码不符合要求 X').slideDown().delay(2000).slideUp()
            }
        })
        //头像
        $(".touxiang").change(function () {
            var data = new FormData();
            data.append('upload',$('#tou')[0].files[0]);
            console.log(data);
            console.log($('#tou')[0].files[0]);
            //$.ajax({
            //    url: '/filee',
            //    type: 'post',
            //    data: {
            //        usname: $('.user').val(),
            //        uspass: $('.pass').val()
            //    }, success: function (data) {
            //        console.log(data)
            //        if (!data.zhuangtai) {
            //            $(".tixing").html('* 此用户名已经被注册，请重新输入 *').slideDown().delay(2000).slideUp()
            //        } else {
            //            $(".tixing").html('√ 注册成功,请前往登录页面登录 √').slideDown().delay(2000).slideUp()
            //        }
            //    }, error: function () {
            //        console.log('nononon')
            //    }
            //})
        })
        //登录系统
        $('.logg').click(function () {
            $.ajax({
                url: '/refe',
                type: 'post',
                data: {
                    usname: $('.userr').val()
                }, success: function (data) {

                    if (data.zhuangtai.length) {
                        console.log('此用户存在')
                        $(".userr_yann").html('&nbsp;')
                        if ($('.passs').val() != data.zhuangtai[0].f2) {
                            $(".paddd_yann").html('* 密码错误,请重新输入 *')
                            console.log('密码不匹配')
                        } else {
                            $(".tixing").html('√ 登录成功,欢迎来到都说! √').slideDown().delay(2000).slideUp()
                            $(".paddd_yann").html('&nbsp;')
                            $('.welcome').html('欢迎 ' + $('.userr').val() + ' 来到,都说!')
                        }
                    } else {
                        $(".userr_yann").html('* 此用户不存在 *')
                    }
                }, error: function () {
                    console.log('nononon')
                }
            })

        })
        //判断是否函数特殊字符
        function reg(a) {
            var regExp = "`~!@#\$%\^\&\*\(\)_\+<>\?:\"\{\},\.\\\/;'\[\]";
            for (var i = 0; i < regExp.length; i++) {
                for (var j = 0; j < a.length; j++) {
                    if (a[j] == regExp[i]) {
                        return false
                    }
                }
            }
            return true
        }
    })

})(jQuery)
