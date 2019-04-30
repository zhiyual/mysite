<template>
  <div>
    <p class="h11">Welcome to My Site!</p>
    <p class="h12" :title="'选择你的身份！'">Places select Your Identity!</p>
    <!-- <hr style="margin: 0;"> -->
    <el-row>
      <el-col :span="5"><p>&nbsp;</p></el-col>
      <el-col :span="5">
        <div @click="onSelectFocus('cus')">
          <div :style="simg" class="select-item">
            <span class="select-item-bg"></span>
            <p class="select-item-img select-cus"></p>
          </div>
          <p>访客</p>
        </div>
      </el-col>
      <el-col :span="4"><p>&nbsp;</p></el-col>
      <el-col :span="5">
        <div @click="onSelectFocus('me')">
          <div :style="simg" class="select-item">
            <span class="select-item-bg"></span>
            <p class="select-item-img select-me"></p>
          </div>
          <p>本人</p>
        </div>
      </el-col>
      <el-col :span="5"><span></span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      s_hover: '',
      simg: {
        width: '480px',
        height: '640px'
      }
    }
  },
  computed: {
    s_ide_name () {
      switch (this.s_hover) {
        case 'me':
          return '本\n人'
        case 'cus':
          return '访\n客'
        default :
          return '  '
      }
    }
  },
  methods: {
    onSelectFocus (e) {
      this.s_hover = e
      if (e === 'me') {
        this.$router.push({name: 'Login'})
      }
      if (e === 'cus') {
        window.location.href = 'http://www.baidu.com'
      }
    },
    setSelectImgSize () {
      let iw = window.innerWidth / 24 * 5
      let ih = iw * 640 / 480
      console.log(iw, ih)
      this.simg = {
        width: iw + 'px',
        height: ih + 'px'
      }
    }
  },
  mounted () {
    this.setSelectImgSize()
  }
}
</script>
<style>
.h11 {
  font: bold 60px/70px Arial;
  color: green;
  /*padding-top: 100px;*/
}
.h12 {
  font: bold 40px/60px Arial;
  color: green;
}
.select-item {
  position: relative;
}
.select-item-img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-size: cover;
  transition: background-image 0.5s;
}
.select-item+p {
  font: bold 24px/24px arial;
}
.select-item:hover+p {
  color: red;
}
.select-cus {
  background-image: url("../assets/icon_cus.png");
}
.select-me {
  background-image: url('../assets/icon_me.png');
}
.select-item:hover .select-cus{
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  background-image: url("../assets/icon_cus_s.png");
}
.select-item:hover .select-me{
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  background-image: url('../assets/icon_me_s.png');
}
.select-item-bg {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #ccc;
  width: 100%;
  height: 0;
  transition: height 0.5s;
  z-index: -1000;
}
.select-item:hover .select-item-bg {
  height: 100%;
}
</style>
