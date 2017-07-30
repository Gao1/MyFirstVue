<template>
	<div id="con2" :class="show? 'is-show':'not-show'">
      	<a class="a" @click="goFengjing"><img src="./fengjinglogo.jpg"><span><strong>迤逦风景</strong></span></a>
    	<a class="a" @click="goRenwen"><img src="./renwulogo.jpg"><span><strong>人文风采</strong></span></a>
    	<a class="a" @click="goJianzhu"><img src="./jianzhulogo.jpg"><span><strong>建筑蓄美</strong></span></a>
    	<a class="a" @click="goZhoubian"><img src="./zhoubianlogo.jpg"><span><strong>恬静生活</strong></span></a>
    </div>
</template>
<script>
	export default {
        props:['show'],
		methods:{
			goFengjing:function(){
				this.$router.push('/fengjing')
			},
			goRenwen:function(){
				this.$router.push('/renwen')
			},
			goJianzhu:function(){
				this.$router.push('/jianzhu')
			},
			goZhoubian:function(){
				this.$router.push('/zhoubian')
			}
		}
	}
</script>
<style>
	#con2{
        position: absolute;
        width: 200px;
        height: 80%;
        top: 50px;
        transition: transform 1s ease-in-out;
        background-color: #666;
        color: #fff;
        z-index: 2;
    }
    .is-show{
        transform: translateX(0);
    }
    .not-show{
        transform: translateX(-110%);
    }
    .a{
        display: inline-block;
        width: 100%;
        height: 25%;
        text-align: center;
        border: solid 1px #fff;
        cursor: pointer;
        vertical-align: middle;
        transition: all .5s;
    }
    .a img{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        display: block;
        float: left;
        margin: 35px;
        margin-right: 10px;
    }
    span{
        display: block;
        float: left;
        margin: 50px auto;
    }
    .a:hover{
        background-color: #999;
    }
</style>