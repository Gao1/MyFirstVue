<template>
   <div id="home">
      <myheader title="首页" ></myheader>
   	  <div class="con1">
   	    <transition-group name="fade" mode="out-in">
            <img id="pic1" src="./focus1.jpg" v-if='show === 1' :key='1'>
            <img id="pic2" src="./focus2.jpg" v-if='show === 2' :key='2'>
            <img id="pic3" src="./focus3.jpg" v-if='show === 3' :key='3'>
    	</transition-group>
      </div>
      <div id="btn">
          <button @click='lastOne'>上一张</button>
          <button @click='nextOne'>下一张</button>
      </div>
   </div>
</template>
<script>
import myheader from '../header/header'
	export default {
		data(){
			return{
                show: 1,
                side: false
			}
		},
		methods:{
			nextOne:function(){
				if(this.show == 3){
					alert('已经是最后一张！')
					return
				}
				this.show++
			},
			lastOne:function(){
				if(this.show == 1){
					alert('当前已经是第一张！')
					return
				}
				this.show--
			}
		},
		components:{myheader}
	}
</script>
<style>
    #home{
    	text-align: center;
    }
	.con1{
		margin: 5px auto;
		height: 460px;
		position: relative;
	}
	#pic1,#pic2,#pic3{
		position: absolute;
		top: 0;
		left: 124px;
	}
	.fade-enter-active,.fade-leave-active{
		transition: opacity 1s
	}
	.fade-enter,.fade-leave-to{
		opacity: 0
	}
	button{
		height: 60px;
		width: 60px;
		background-color: #666;
		border: 2px solid #111;
		font-size: 13px;
		font-family: "KaiTi";
		font-weight: bold;
		border-radius: 60px;
		margin: 2px 30px;
		outline:0 none !important;
		blr:expression(this.onFocus=this.blur());
		color: #fff;
		transition: all .5s;
	}
	button:hover{
		background-color: #999;
	}
</style>