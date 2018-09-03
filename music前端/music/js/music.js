var index;

var music=new Vue({
    el:"#music",
    data:{
        updatemusic:{"id":0,"pid":0,"name":"","singer":"","date":""},
        music:{"id":0,"pid":0,"name":"","singer":"","date":""},
        musics:[],
        standbymusics:[],
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
            this.$http.get("http://localhost:8088/music/music").then(function (res) {
                _this.musics=res.data;
                _this.standbymusics=res.data;
            })
            this.$http.get("http://localhost:8088/music/musiclist").then(function (res) {
                _this.musiclists=res.data;
            })

        },
        addMusic:function () {

            if(music.name==""||music.singer==""){
                confirm("sssss");
                this.music={"id":0,"pid":0,"name":"","singer":"","date":""};
            }else {
                //confirm(music.name);
                var localdate=new Date();
                var newTime = localdate.toLocaleString();     //把日期转换成2018/6/4 下午10:45:19 格式
                var arr = newTime.split(" ");             //把2018/6/4提取出来
                var arr2 = arr[0].split('/');
                var resultedate=arr2[0]+'年'+arr2[1]+'月'+arr2[2]+'日';
                this.music.date=resultedate;
                //this.musics.push(this.music);
                //this.music={"id":0,"name":"","desc":"","date":""};
                var _this=this;
                this.$http.post("http://localhost:8088/music/music",this.music).then(function (res) {

                    this.musics.push(res.data);
                    this.music={"id":0,"pid":0,"name":"","singer":"","date":""};
                })
            }




        },
        removeMusic:function (data) {
            // var index=this.musics.indexOf(data);
            // this.musics.splice(index,1);
            if(confirm("确定要删除吗？")){

                var _this=this;
                this.$http.delete("http://localhost:8088/music/music/"+data.id).then(function (res) {
                    if(res.data>0){
                        var index=this.musics.indexOf(data);
                        this.musics.splice(index,1);
                    }
                })

            }else {
                return;
            }
        },
        updateMusic:function(data){
            index=this.musics.indexOf(data);
            this.updatemusic.id=data.id;
            this.updatemusic.name=data.name;
            this.updatemusic.singer=data.singer;
            this.updatemusic.date=data.date;
            //this.updatemusiclist=JSON.stringify(data);

            // var index=
            // this.musiclists.splice(index,1);
        },
        update:function () {


            // this.musics.splice(index,1,this.updatemusic);
            // this.updatemusic={"id":0,"name":"","desc":"","date":""};
            // confirm(this.musiclists.findIndex(index));
            var _this=this;
            // this.$http.post("http://localhost:8088/music/musiclist/"+this.updatemusic.id,this.updatemusic,{emulateJSON:true}).then(function (res) {
            this.$http.post("http://localhost:8088/music/music/"+this.updatemusic.id,this.updatemusic).then(function (res) {
                if(res.data>0){
                    this.musics.splice(index,1,this.updatemusic);
                    this.updatemusic={"id":0,"pid":0,"name":"","singer":"","date":""};
                }
            })


        },
        addMusiclist:function (data) {
            index=this.musics.indexOf(data);
            this.updatemusic.id=data.id;
            this.updatemusic.name=data.name;
            this.updatemusic.singer=data.singer;
            this.updatemusic.date=data.date;

        },
        add:function () {

            //confirm($("#songListSelect").val());
            this.updatemusic.pid=$("#songListSelect").val();


            // this.musics.splice(index,1,this.updatemusic);
            // this.updatemusic={"id":0,"pid":0,"name":"","singer":"","date":""};

            var _this=this;
            // this.$http.post("http://localhost:8088/music/musiclist/"+this.updatemusic.id,this.updatemusic,{emulateJSON:true}).then(function (res) {
            this.$http.post("http://localhost:8088/music/music/"+this.updatemusic.id,this.updatemusic).then(function (res) {
                if(res.data>0){
                    this.musics.splice(index,1,this.updatemusic);
                    this.updatemusic={"id":0,"pid":0,"name":"","singer":"","date":""};
                }
            })
        },
        setMusics(arr){

             this.musics=JSON.parse(JSON.stringify(arr));
             //confirm(JSON.stringify(this.musics));

        },
        search(e){
            var key=e.target.value;
            var _this=this;
            //每次给的都是整套数据
            var tab=this.standbymusics;
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
                    if(tab[i].singer.indexOf(key)>-1){

                        ss.push(tab[i]);
                    }
                }
                //confirm("sssss"+JSON.stringify(ss));
                this.setMusics(ss);
            }else{
                //输入框为空时把备用数据发送过去
                this.setMusics(this.standbymusics);
            }


        }
    }

});
