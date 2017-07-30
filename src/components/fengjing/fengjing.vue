<template>
  <div>
    <myheader title="迤逦风景">
      <a class="aa" slot='left' @click='goHome' href="#">返回</a>
    </myheader>
    <div id="wrap">
        <div id="part1">
            <div id="part1_l" ><img src="./part11.png"></div>
            <div id="part1_r" class="w">凤荷静静地摇摆，书声琅琅渐起。心中激荡的涟漪，伴随着我轻盈的步伐，我和你相遇了。时间在那一刻是幸运的，那一刻便是永恒。你是那么的美好，而我确是如此的充满稚气。</div></div>
        <div id="part2">
            <div id="part2_l" class="w">藤廊寄梦，寄的是青春之梦，寄的是只属于我和杭电的如花美眷。每当傍晚，拖着疲惫的身子，我都会来此，和你分享喜悦或是悲伤。回想，不论以何种心态和你畅谈，沉淀在心底的，总是我和你在一起爽朗的笑声。</div>
            <div id="part2_r"><img src="./part12.png"></div></div>
        <div id="part3">
            <div id="part3_l"><img src="./part13.png"></div>
            <div id="part3_r" class="w">多少恍惚的时候，多少次在这里刷夜，你都在这里和我相伴。深夜里的宁静让我更清晰轻抚你的脸庞。绵绵不断的细雨，宛如一道与你我相伴的风景线，握紧你手不放开到黎明。你说：“等春风吹来乌云散，你和我一起看那山花开。”</div></div>
        <div id="part4">
            <div id="part4_l" class="w">你说：“科比为了篮球梦，见过凌晨四点的洛杉矶。”为了看见精致的星轨图，我见过了凌晨四点的你。这个世界为了梦想，总有人在奔跑，而我对你的羁绊，便永不停歇。</div>
            <div id="part4_r"><img src="./part14.png"></div></div>
        <div id="part5">
            <div id="part5_l"><img src="./part15.png"></div>
            <div id="part5_r" class="w">或许月牙湖的天光云影的徘徊，是我们彼此最熟悉的风景。生平我第一次放下矜持，幻想一切关于我和你。在这儿，永恒既是我和你的每一瞬间。</div></div>
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
