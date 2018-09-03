var index;

var musicmanage=new Vue({
    el:"#musicList",
    data:{
        updatemusiclist:{"id":0,"name":"haha","descri":"","date":""},
        musiclist:{"id":0,"name":"","descri":"","date":""},
        musiclists:[]
    },
    mounted:function(){
      this.$nextTick(function () {
          this.init();
      })
    },
    methods:{
        init:function () {
            var _this=this;
            this.$http.get("http://localhost:8088/music/musiclist").then(function (res) {
                _this.musiclists=res.data;
            })

        },
        addMusiclist:function () {
            var localdate=new Date();
            var newTime = localdate.toLocaleString();     //把日期转换成2018/6/4 下午10:45:19 格式
            var arr = newTime.split(" ");             //把2018/6/4提取出来
            var arr2 = arr[0].split('/');
            var resultedate=arr2[0]+'年'+arr2[1]+'月'+arr2[2]+'日';
            this.musiclist.date=resultedate;
            // this.musiclists.push(this.musiclist);
            // this.musiclist={"id":0,"name":"","desc":"","date":""};
            var _this=this;
            this.$http.post("http://localhost:8088/music/musiclist",this.musiclist).then(function (res) {

                _this.musiclists.push(res.data);
                _this.musiclist={"id":0,"name":"","descri":"","date":""};
            })



        },
        removeMusiclist:function (data) {
            // var index=this.musiclists.indexOf(data);
            // this.musiclists.splice(index,1);
            if(confirm("确定要删除吗？")){

                var _this=this;
                this.$http.delete("http://localhost:8088/music/musiclist/"+data.id).then(function (res) {
                    if(res.data>0){
                        var index=this.musiclists.indexOf(data);
                        this.musiclists.splice(index,1);
                    }
                })

            }else {
                return;
            }
        },
        updateMusiclist:function(data){
            index=this.musiclists.indexOf(data);
            this.updatemusiclist.id=data.id;
            this.updatemusiclist.name=data.name;
            this.updatemusiclist.desc=data.desc;
            this.updatemusiclist.date=data.date;
            //this.updatemusiclist=JSON.stringify(data);

            // var index=
            // this.musiclists.splice(index,1);
        },
        update:function () {


            // this.musiclists.splice(index,1,this.updatemusiclist);
            // this.updatemusiclist={"id":0,"name":"","desc":"","date":""};
            // confirm(this.musiclists.findIndex(index));
            var _this=this;
            // this.$http.post("http://localhost:8088/music/musiclist/"+this.updatemusic.id,this.updatemusic,{emulateJSON:true}).then(function (res) {
            this.$http.post("http://localhost:8088/music/musiclist/"+this.updatemusiclist.id,this.updatemusiclist).then(function (res) {
                if(res.data>0){
                    this.musiclists.splice(index,1,this.updatemusiclist);
                    this.updatemusiclist={"id":0,"name":"","descri":"","date":""};
                }
            })


        }


    }

});