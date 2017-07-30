<template>
  <div>
    <myheader title="建筑蓄美">
      <a class="aa" slot='left' @click='goHome' href="#">返回</a>
    </myheader>
    <div id="wrap">
        <div id="part1">
            <div id="part1_l" ><img src="./part31.jpg"></div>
            <div id="part1_r" class="w">踏遍你的每一寸肌肤，篆刻在心底的，是这月雅湖边的木椅。微风拂面，轻倚在你的身旁，看着湖中荡起的微微涟漪，心头是前所未有的宁静悠然。只盼时光停驻，就这样陪你到地老天荒。</div>
        </div>
        <div id="part2">
            <div id="part2_l" class="w">两耳不闻窗外事，一心只读圣贤书。一脚踏入图书馆，浓厚的书卷气仿若扑面而来。不知不觉中，我已沉醉于此。醉心于书本，遨游在知识的海洋中，我已不愿离开。</div>
            <div id="part2_r"><img src="./part32.jpg"></div>
        </div>
        <div id="part3">
            <div id="part3_l"><img src="./part33.jpg"></div>
            <div id="part3_r" class="w">你的标志，如此特别。只在行走间的匆匆一瞥，你就印在了我的心里，从此难以忘记。你有独特的魅力，让所有见过你的人都难以忘怀。</div>
        </div>
        <div id="part4">
            <div id="part4_l" class="w">朝阳当空，将金色扑满人间。而此时，这里一片安详静谧。新的一天，总是从这里开始，最为亲切的，便是这里的一切。在这里，我和你朝夕相伴，惟愿此情长存。</div>
            <div id="part4_r"><img src="./part34.jpg"></div>
        </div>
        <div id="part5">
            <div id="part5_l"><img src="./part35.jpg"></div>
            <div id="part5_r" class="w">每逢盛大活动，便会亲眼见证你的蓬勃与辉煌。人来人往，无数的人因你而驻足不前，而我也不例外。你从未令我失望，因为你也是最美的风景。</div>
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