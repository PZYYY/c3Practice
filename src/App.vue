<template>
  <div id="app">
    <div class="common">
      <span class="common-title">VICTORIA'S SECRET SHOW</span>
      <ul class="common-li">
        <li>首页</li>
        <li>关于我们</li>
        <li>公司产品</li>
        <li>荣誉资质</li>
        <li>新闻资讯</li>
        <li>联系我们</li>
        <li>在线资讯</li>
      </ul>
    </div>
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="400px" :autoplay='false' indicator-position="none">
        <el-carousel-item v-for="(item, index) in carouselImg" :key="index">
          <!-- <h3>{{ item }}</h3> -->
          <img :src="item.url" width="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      carouselImg: [
        {url: require('./assets/images/img13.jpg')}, // 绑定图片需用这种方法，否则:src的路径会被解析成一个普通字符串
        {url: require('./assets/images/img15.jpg')},
        {url: require('./assets/images/img1.jpg')},
        {url: require('./assets/images/img3.jpg')},
        {url: require('./assets/images/img27.jpg')}
      ]
    }
  }
} 
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #333;
  margin-top: 60px;
  .common {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 0.5rem 5% 0.3rem 12% ;
    box-sizing: border-box;
    z-index: 999;
    background: rgba(255, 255, 255, 0.8);
    .common-title {
      width: 40%;
      font-size: 0.35rem;
      font-weight: bolder;
      color: #2c3e50;
      text-shadow: 5px 5px 10px #777;
    }
    .common-li {
      width: 50%;
      display: flex;
      justify-content: space-around;
      padding-top: 0.18rem;
      list-style: none;
      color: #666;
      font-size: 0.16rem;
    }
  }
  .carousel {
    padding-top: 0.6rem;
    padding-bottom: 1.5rem;
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
}
</style>
