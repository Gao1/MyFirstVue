<template>
  <div>
    <myheader title="人文风采">
      <a class="aa" slot='left' @click='goHome' href="#">返回</a>
    </myheader>
    <div id="wrap">
        <div id="part1">
            <div id="part1_l" ><img src="./part21.jpg"></div>
            <div id="part1_r" class="w">景色，从来都是因人而美。优秀的你孕育出无数优秀的孩子。而作为你最优秀的子女，他们时常疾步穿梭于校园中，脚步踏遍了你身上的每一寸土地。“十佳”就是你赐予他们的荣誉。</div>
        </div>
        <div id="part2">
            <div id="part2_l" class="w">“春蚕到死丝方尽，蜡炬成灰泪始干。”每当我感到困惑迷茫，眼前总是能浮现老师们的谆谆教诲。兢兢业业的恩师，如暗夜里的灯塔，那一丝光明，指引我找到前进的方向。</div>
            <div id="part2_r"><img src="./part22.jpg"></div>
        </div>
        <div id="part3">
            <div id="part3_l"><img src="./part23.jpg"></div>
            <div id="part3_r" class="w">铁血军姿，威武军人。那挺直的身躯，强健的体魄，精神像铁人一般坚强。虽未入伍，却也无碍他们追求自己心中的梦想。坚毅果敢是他们的代名词，他们理当赢得所有人的尊重。</div>
        </div>
        <div id="part4">
            <div id="part4_l" class="w">他们说，奉献已成了他们生命中的一部分。无论寒冬酷暑，总有他们的身影出现在最需要他们的地方。他们穿梭于各种场合，实现自我价值的同时，也为你赢得了无上的荣耀。</div>
            <div id="part4_r"><img src="./part24.jpg"></div>
        </div>
        <div id="part5">
            <div id="part5_l"><img src="./part25.jpg"></div>
            <div id="part5_r" class="w">或许你的子女太多，难以忆起谁的名字。这些优秀的子女必将成为所有人的榜样。然而无论你的子女们如何优秀，我们都不会忘记你，我的杭电。</div>
        </div>
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