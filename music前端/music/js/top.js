var hottop=new Vue({
    el:'#hottop',
    data:{
        song:{"id":0,"songName":"","singerName":""},
        songs:[{"id":1,"songName":"海阔天空","singerName":"杰少"},{"id":2,"songName":"浮夸","singerName":"阳光少年"}]
    },
    mounted:function(){
        this.$nextTick(function () {
            this.init();
        })
    },
    methods: {
        init: function () {
            var _this = this;
            this.$http.get("http://localhost:8088/music/top/hot").then(function (res) {
                _this.songs = res.data;
            })
        }
    }
});
var newtop=new Vue({
    el:'#newtop',
    data:{
        song:{"id":0,"songName":"","singerName":""},
        songs:[{"id":1,"songName":"海阔天空","singerName":"杰少"},{"id":2,"songName":"浮夸","singerName":"阳光少年"}]
    },
    mounted:function(){
        this.$nextTick(function () {
            this.init();
        })
    },
    methods: {
        init: function () {
            var _this = this;
            this.$http.get("http://localhost:8088/music/top/new").then(function (res) {
                _this.songs = res.data;
            })
        }
    }

});
var fashiontop=new Vue({
    el:'#fashiontop',
    data:{
        song:{"id":0,"songName":"","singerName":""},
        songs:[{"id":1,"songName":"海阔天空","singerName":"杰少"},{"id":2,"songName":"浮夸","singerName":"阳光少年"}]
    },
    mounted:function(){
        this.$nextTick(function () {
            this.init();
        })
    },
    methods: {
        init: function () {
            var _this = this;
            this.$http.get("http://localhost:8088/music/top/fashion").then(function (res) {
                _this.songs = res.data;
            })
        }
    }

});
var oldtop=new Vue({
    el:'#oldtop',
    data:{
        song:{"id":0,"songName":"","singerName":""},
        songs:[{"id":1,"songName":"海阔天空","singerName":"杰少"},{"id":2,"songName":"浮夸","singerName":"阳光少年"}]
    },
    mounted:function(){
        this.$nextTick(function () {
            this.init();
        })
    },
    methods: {
        init: function () {
            var _this = this;
            this.$http.get("http://localhost:8088/music/top/old").then(function (res) {
                _this.songs = res.data;
            })
        }
    }

});
var nettop=new Vue({
    el:'#nettop',
    data:{
        song:{"id":0,"songName":"","singerName":""},
        songs:[{"id":1,"songName":"海阔天空","singerName":"杰少"},{"id":2,"songName":"浮夸","singerName":"阳光少年"}]
    },
    mounted:function(){
        this.$nextTick(function () {
            this.init();
        })
    },
    methods: {
        init: function () {
            var _this = this;
            this.$http.get("http://localhost:8088/music/top/net").then(function (res) {
                _this.songs = res.data;
            })
        }
    }

});
var origintop=new Vue({
    el:'#origintop',
    data:{
        song:{"id":0,"songName":"","singerName":""},
        songs:[{"id":1,"songName":"海阔天空","singerName":"杰少"},{"id":2,"songName":"浮夸","singerName":"阳光少年"}]
    },
    mounted:function(){
        this.$nextTick(function () {
            this.init();
        })
    },
    methods: {
        init: function () {
            var _this = this;
            this.$http.get("http://localhost:8088/music/top/origin").then(function (res) {
                _this.songs = res.data;
            })
        }
    }

});




