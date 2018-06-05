<template>
	<div>
		<div class="footer" ref="footerBox">
			<div class="footer1">
        <div :class="animation" class="footer1-box">
          <div class="footer1-info">
            <span>维多利亚的秘密</span>
            <span><i class="el-icon-phone-outline"></i>电话：020-5451254545</span>
            <span><i class="el-icon-message"></i>邮箱：sierwwp.163.com</span>
            <span><i class="el-icon-tickets"></i>传真：020-5451254545</span>
            <span><i class="el-icon-share"></i>官网：https://www.victoriassecret.com</span>
          </div>
          <div style="text-align:center;margin-top:0.3rem;">
            <img src="../../assets/images/weburl.jpg" width="200" height="200"><br>
            <span>扫一扫打开官网</span>
          </div>
        </div>
			</div>
      <div class="footer2">
        <ul>
          <li>首页<em>|</em></li>
          <li>关于我们<em>|</em></li>
          <li>公司产品<em>|</em></li>
          <li>荣誉资质<em>|</em></li>
          <!-- <li>新闻资讯<em>|</em></li> -->
          <li>联系我们<em>|</em></li>
          <li>在线留言</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { animate } from '@/mixins/mixin'
export default {
  mixins: [animate],
	name: 'MyFooter',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight, // 页面高度
      clientBox: '', // 底部组件
      clientTop: '', // 底部组件到浏览器顶部的距离
      animation: '' // 底部组件动画效果
    }
  },
  created () {
    this.$nextTick(() => {
      this.clientBox = this.$refs.footerBox
      this.animated('top')
    })
  },
  methods: {
  }
}
</script>
<style lang="scss">
.footer {
  .footer1 {
    width: 100%;
    height: 3.5rem;
    padding: 0.5rem 25% 0 25%;
    box-sizing: border-box;
    font-size: 0.16rem;
    color: #c1c1c1;
    background: #333;
    .footer1-box {
      display: flex;
      justify-content: space-between;
      .footer1-info {
        display: flex;
        flex-direction: column;
        line-height: 0.5rem;
        span:nth-child(1) {
          margin-bottom: 0.1rem;
          font-size: 0.28rem;
          color: #fff;
        }
        i {
          margin-right: 0.2rem;
        }
      }
    }
    .aFadeInUp {
      animation: fadeInUp 1s linear;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
  }
  .footer2 {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.15rem;
    background: #222;
    ul {
      display: flex;
      justify-content: center;
      color: #666;
      em {
        margin: 0.1rem;
      }
    }
  }
}
</style>
