<template>
  <div>
    <myheader title="恬静生活">
      <a class="aa" slot='left' @click='goHome' href="#">返回</a>
    </myheader>
    <div id="wrap">
        <div id="part1">
            <div id="part1_l" ><img src="./part41.png"></div>
            <div id="part1_r" class="w">外面下着雨，模糊了视线。雨滴沿着玻璃滑下，留下一条条印记，像极了年轮和日历。每当我望向窗外，季节转换，只有你依然在那里，还像当初温暖，哪管窗外风寒。细雨冲刷的记忆总是透着新，每一次的新鲜感仿佛又回到了原点。</div></div>
        <div id="part2">
            <div id="part2_l" class="w">农历三月间，最是难熬倒春寒。绵延的细雨总是那么刺骨而又深邃。一个个撑开的雨伞像夏花般绽放，追求梦想的路上，总是不顾风雨，也总是风雨兼行。低头的斑马线，遥望的确实依旧的你。</div>
            <div id="part2_r"><img src="./part42.png"></div></div>
        <div id="part3">
            <div id="part3_l"><img src="./part43.png"></div>
            <div id="part3_r" class="w">华灯初上，车水马龙；繁华夜市，静谧如一。高处遥望，不只眼前的苟且，还有诗和远方。落日的余晖月街灯相应，是你我共同凝视的目光。想比此刻他乡的温暖，春风拂面，这里的景致独好。只因为有你，伴左右。</div></div>
        <div id="part4">
            <div id="part4_l" class="w">蓝天白云、绿树碧水，映着你的美。层次错落、渊渟岳峙，是你坚毅的内在。很幸运，能在你的怀里，翘首以盼，时光流逝。只有你，才让我醉于生活，沉于此。</div>
            <div id="part4_r"><img src="./part44.png"></div></div>
        <div id="part5">
            <div id="part5_l"><img src="./part45.png"></div>
            <div id="part5_r" class="w">天上云卷云舒，挥洒的汗水滴落在橡胶跑道上。变幻的云烟，迎面的煦风，伴着脚步，我们，奔跑在路上。有一天，回想起绿茵场上的一幕幕，都是关于青春，关于我们的故事。</div></div>
    </div>
  </div>
</template>

<script>
import myheader from '../header/header' 
export default {
  components:{myheader},
  methods:{
    goHome:function(){
      this.$router.push('/home')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0;
  padding: 0;
}
.aa{
  text-decoration: none;
  color: #fff;
}
#wrap{
  width: 1000px;
  margin: 0 auto;
  height: 1000px;
  border-radius: 10px;
  background-color: #888;
  font-family: "KaiTi";
  font-weight: bold;
  font-size: 18px;
}
.w{
  width: 500px;
  height: 70px;
  padding: 40px 50px;
}
#wrap div{
  margin: 10px 0px 10px 20px;
  float: left;
}
img{
  width: 300px;
  height: 150px;
  border-radius:  10px;
  box-shadow: 1px 1px 10px black;
}
</style>