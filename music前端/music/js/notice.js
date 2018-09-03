var builletin=new Vue({
    el:'#notice',
    data:{
        updatenotice:{"id":0,"content":"","date":""},
        notice:{"id":0,"content":"","date":""},
        newnotice:{"id":1,"content":"hhhh","date":""},
        notices:[]

    },
    mounted:function(){
        this.$nextTick(function () {
            this.init();
        })
    },
    methods:{
        init:function () {
            var _this=this;
            this.$http.get("http://localhost:8088/music/notice").then(function (res) {
                _this.notices=res.data;
            })

        },
        addNotice:function () {

            if(this.notice.content==""){

                this.notice={"id":0,"content":"","date":""};
            }else {
                var localdate=new Date();
                var newTime = localdate.toLocaleString();     //把日期转换成2018/6/4 下午10:45:19 格式
                var arr = newTime.split(" ");             //把2018/6/4提取出来
                var arr2 = arr[0].split('/');
                var resultedate=arr2[0]+'年'+arr2[1]+'月'+arr2[2]+'日';
                this.notice.date=resultedate;
                // this.notices.push(this.notice);
                // this.notice={"id":0,"name":"","desc":"","date":""};
                var _this=this;
                this.$http.post("http://localhost:8088/music/notice",this.notice).then(function (res) {

                    _this.notices.push(this.notice);
                    _this.notice={"id":0,"name":"","desc":"","date":""};

                })
            }




        },
        removeNotice:function (data) {
            // var index=this.notices.indexOf(data);
            // this.notices.splice(index,1);
            if(confirm("确定要删除吗？")){
                // var index=this.users.indexOf(data);
                // this.users.splice(index,1);
                var _this=this;
                this.$http.delete("http://localhost:8088/music/notice/"+data.id).then(function (res) {
                    if(res.data>0){
                        var index=_this.notices.indexOf(data);
                        _this.notices.splice(index,1);
                    }
                })
            }else{
                return;
            }
        },
        updateNotice:function(data){
            index=this.notices.indexOf(data);
            this.updatenotice.id=data.id;
            this.updatenotice.content=data.content;
            this.updatenotice.date=data.date;
            //this.updatemusiclist=JSON.stringify(data);

            // var index=
            // this.musiclists.splice(index,1);
        },
        update:function () {


            // this.notices.splice(index,1,this.updatenotice);
            // this.updatenotice={"id":0,"content":"","date":""};
            // confirm(this.musiclists.findIndex(index));
            var _this=this;
            // this.$http.post("http://localhost:8088/music/musiclist/"+this.updatemusic.id,this.updatemusic,{emulateJSON:true}).then(function (res) {
            this.$http.post("http://localhost:8088/music/notice/"+this.updatenotice.id,this.updatenotice).then(function (res) {
                if(res.data>0){
                    _this.notices.splice(index,1,this.updatenotice);
                    _this.updatenotice={"id":0,"content":"","date":""};
                }
            })


        }

    }

});