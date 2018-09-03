var member=new Vue({
    el:"#member",
    data:{
        updateuser:{"id":0,"username":"","name":"","pwd":"","email":"","tel":"","date":""},
        user:{"id":0,"username":"","name":"","pwd":"","email":"","tel":"","date":""},
        users:[],
        standbyusers:[]
    },
    mounted:function(){
      this.$nextTick(function () {
          this.init();
      })
    },
    methods:{
        init:function () {
            var _this=this;
            this.$http.get("http://localhost:8088/music/member").then(function (res) {
                _this.users=res.data;
                _this.standbyusers=res.data;
            })

        },
        addUser:function () {

            //$("#li_signup").attr("style", "display:none");
            //var username = $("#signup_username").val();
            var password = $("#signup_password").val();
            var password2 = $("#signup_password2").val();
            // if(password!=password2){
            //     confirm("密码输入不一致");
            // }
            //$("#li_span_signin").text(username).off('click', '**');
            //$("#li_signout").attr("style", "display:inline");
            //confirm("11111111111");
            if(this.user.username==""||this.user.name==""||this.user.pwd==""||this.user.tel==""||this.user.email==""||this.user.pwd==""){
                confirm("输入内容不能为空！");
               // this.user={"id":0,"username":"","name":"","pwd":"","email":"","tel":"","date":""};
            }else if(password!=password2){
                confirm("密码输入不一致");
            }else
            {
                var localdate=new Date();
                var newTime = localdate.toLocaleString();     //把日期转换成2018/6/4 下午10:45:19 格式
                var arr = newTime.split(" ");             //把2018/6/4提取出来
                var arr2 = arr[0].split('/');
                var resultedate=arr2[0]+'年'+arr2[1]+'月'+arr2[2]+'日';
                this.user.date=resultedate;
                // this.users.push(this.user);
                // this.user={"id":0,"username":"","name":"","pwd":"","email":"","tel":"","date":""};
                // $("#signup").fadeOut();
                // $("div.modal-backdrop.fade.in").fadeOut();
                var _this=this;
                this.$http.post("http://localhost:8088/music/member",this.user).then(function (res) {

                    _this.users.push(_this.user);
                    _this.user={"id":0,"username":"","name":"","pwd":"","email":"","tel":"","date":""};
                    $("#signup").fadeOut();
                    $("div.modal-backdrop.fade.in").fadeOut();
                })
            }

        },
        login:function(){
            var username = $("#signin_username").val();
            var password = $("#signin_password").val();
            var tab=this.users;
            var name=0;
            var pwd=0;
            for(i in tab){
                if(tab[i].username==username){
                    name=1;
                    if(tab[i].pwd==password){
                        pwd=1;
                    }
                }
            }
            if(name==0){
                confirm("对不起...暂无用户信息");
                $("#signin").fadeOut();
                $("div.modal-backdrop.fade.in").fadeOut();
            }else if(pwd==0){
                confirm("密码错误！");
                $("#signin").fadeOut();
                $("div.modal-backdrop.fade.in").fadeOut();
            }else {
                sessionStorage.setItem("lastname",username);
                $("#li_signup").attr("style", "display:none");
                $("#signin").fadeOut();
                $("div.modal-backdrop.fade.in").fadeOut();
                $("#li_span_signin").text(username).off('click', '**');
                $("#li_signout").attr("style", "display:inline");
            }


        },
        removeUser:function (data) {
            if(confirm("确定要删除吗？")){
                // var index=this.users.indexOf(data);
                // this.users.splice(index,1);
                var _this=this;
                this.$http.delete("http://localhost:8088/music/member/"+data.id).then(function (res) {
                    if(res.data>0){
                        var index=_this.users.indexOf(data);
                        _this.users.splice(index,1);
                    }
                })
            }else{
                return;
            }


        },
        updateUser:function (data){
            index=this.users.indexOf(data);
            this.updateuser.id=data.id;
            this.updateuser.username=data.username;
            this.updateuser.name=data.name;
            this.updateuser.pwd=data.pwd;
            this.updateuser.email=data.email;
            this.updateuser.tel=data.tel;
            this.updateuser.date=data.date;

            //this.updatemusiclist=JSON.stringify(data);

            // var index=
            // this.musiclists.splice(index,1);
        },
        update:function () {


            // this.users.splice(index,1,this.updateuser);
            // this.updateuser={"id":0,"username":"","name":"","pwd":"","email":"","tel":"","date":""};
            // confirm(this.musiclists.findIndex(index));
            var _this=this;
            // this.$http.post("http://localhost:8088/music/musiclist/"+this.updatemusic.id,this.updatemusic,{emulateJSON:true}).then(function (res) {
            this.$http.post("http://localhost:8088/music/member/"+this.updateuser.id,this.updateuser).then(function (res) {
                if(res.data>0){
                    _this.users.splice(index,1,this.updateuser);
                    _this.updateuser={"id":0,"username":"","name":"","pwd":"","email":"","tel":"","date":""};
                }
            })


        },
        setMusics(arr){

            this.users=JSON.parse(JSON.stringify(arr));
            //confirm(JSON.stringify(this.musics));

        },
        search(e){
            var key=e.target.value;
            var _this=this;
            //每次给的都是整套数据
            var tab=this.standbyusers;
            //confirm(v+"11");
            if(key){
                //将筛选后的数据放到ss中
                var ss=[];
                //遍历歌曲列表
                for (i in tab){
                    //判断歌曲名是否含有输入值
                    if(tab[i].name.indexOf(key)>-1){

                        ss.push(tab[i]);
                    }
                    //判断歌手名是否含有输入值
                    if(tab[i].tel.indexOf(key)>-1){

                        ss.push(tab[i]);
                    }
                }
                //confirm("sssss"+JSON.stringify(ss));
                this.setMusics(ss);
            }else{
                //输入框为空时把备用数据发送过去
                this.setMusics(this.standbyusers);
            }


        }

    }

})