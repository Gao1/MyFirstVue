<template>
    <div>
    <header class="header">
		<div class="item left">
			<slot name="left"></slot>
		</div>
		<div class="title">{{title}}</div>
		<div class="ic"></div><a @click='showSidebar' class="ica"></a>
	</header>
    <sidebar :show='side'></sidebar>
    </div>
</template>
<script>
import sidebar from '../sidebar/sidebar'
	 export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        data:function(){
        	return{
        		side:false
        	}
        },
        components:{sidebar},
        methods:{
        	showSidebar:function(){
        		this.side = !this.side
        	}
        }
    }
</script>
<style>
		.header {
		position: relative;
		line-height: 38px;
		color: #fff;
		text-align: center;
		background: #555;
	    }
	    .item {
			position: absolute;
			top: 0;
			bottom: 0;
			z-index: 1;
			a {
				color: #fff;
			}
		}
		.ic,.ic:before,.ic:after{
                position: absolute;
                right: 10px;
                width:30px;
                height:4px;
                content: '';
                background: #fff;
        }
        .ic{
        	top:15px;
        }
        .ic:before{
        	top:0;
        	transform: translate(10px,-7px);
            transition: all .3s;
        }
        .ic:after{
            transform: translate(10px,7px);
            transition: all .3s;
        }
        .ica{
        	position: absolute;
            right:10px;
            top:8px;
        	width:30px;
            height:20px;
            cursor: pointer;
        }
		.left {
			left: 10px;
			float: left;
		}
</style>