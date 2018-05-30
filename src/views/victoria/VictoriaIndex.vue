<template>
  <div>
		<div class="newfood">
      <div class="newfood-left">
        <span class="left-dec"></span>
        <div class="title">
          <span class="left-title1">超模秀</span><br>
          <span class="left-title2">Supermodel Show</span>
        </div>
        <div class="new-left-box">
          <div class="box-top">
            <span>维多利亚的秘密</span><br>
            <span>Show Time</span>
            <span class="top-dec"></span>
          </div>
          <div>
            <img src="../../assets/images/img5.jpg" width="100%">
          </div>
        </div>
      </div>
      <div class="newfood-right">
        <!-- <img src="../../assets/images/img31.jpg" class="float-img1"> -->
        <div class="right-title">
          <span style="font-size: 0.3rem; font-weight: bolder">自然与人性的和谐</span><br>
          <span>THE HARMONY OF NATURE AND HUMAN NATURE</span>
        </div>
        <!-- <img src="../../assets/images/img28.jpg" class="float-img"> -->
        <div class="right-bottom"></div>
      </div>
    </div>
    <div class="about">
      <div class="about-left">
        <span class="left-dec"></span>
        <div class="title">
          <span class="left-title1">关于我们</span><br>
          <span class="left-title2">About Us</span>
        </div>
        <div>
          <span class="about-content">
            维多利亚的秘密时尚秀（英语：Victoria's Secret Fashion Show）是由美国女性内衣与睡衣品牌维多利亚的秘密主办的年度时装表演。它主打维多利亚的秘密品牌的女性内衣，与艺人歌手合作、结合音乐演出，依据当年主题而推出不同的舞台设计，并邀请许多全球知名的时尚模特担当走秀。在美国，维多利亚的秘密时尚秀不只是一场盛大表演，它同时也在电视台黄金时段进行转播。维多利亚的秘密时尚秀自1990年代起定期举行，初期举办时间为刺激买气而订在情人节前夕；除了2001年与美国广播公司合作之外，其余年份皆由哥伦比亚广播公司负责播出。时尚秀曾移师各大城市举行，足迹遍布迈阿密、洛杉矶及戛纳等。
          </span>
        </div>
      </div>
      <img src="../../assets/images/img12.jpg" class="about-img">
      <div class="about-more">
        <span>MORE</span>
      </div>
      <div class="about-bottom">
        <img src="../../assets/images/img2.jpg">
        <img src="../../assets/images/img6.jpg">
        <img src="../../assets/images/img21.jpg">
        <img src="../../assets/images/img22.jpg">
        <img src="../../assets/images/img17.jpg">
        <img src="../../assets/images/img8.jpg">
      </div>
    </div>
	</div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.newfood {
  width: 90%;
  padding-left: 10%;
  box-sizing: border-box;
  display: flex;
  .newfood-left {
    width: 50%;
    font-size: 0.3rem;
    .left-dec {
      display: inline-block;
      width: 1px;
      height: 0.7rem;
      vertical-align: top;
      margin-right: 0.2rem;
      background: #999;
    }
    .title {
      display: inline-block;
      line-height: 0.35rem;
      margin-bottom: 1rem;
      .left-title1 {
        color: #000;
        font-weight: bolder;
      }
      .left-title2 {
        color: #c1c1c1;
        font-weight: bolder;
      }
    }
    .new-left-box {
      .box-top {
        padding-left: 1rem;
        padding-top: 0.3rem;
        box-sizing: border-box;
        height: 1.5rem;
        color: #fff;
        font-size: 0.25rem;
        line-height: 0.4rem;
        background: #8094ae;
        .top-dec {
          display: block;
          width: 2rem;
          height: 1px;
          margin-top: 0.1rem;
          background: #fff;
        }
      }
    }
  }
  .newfood-right {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 50%;
    font-size: 0.15rem;
    color: #999;
    .float-img1 {
      position: absolute;
      top: 0.4rem;
      left: -2rem;
      width: 90%;
      // height: 40%;
    }
    .right-title {
      display: flex;
      flex-direction: column;
      width: 2.5rem;
      margin-top: 0.5rem;
    }
    .float-img {
      position: absolute;
      left: 3rem;
      bottom: 0.7rem;
      width: 50%;
    }
    .right-bottom {
      width: 90%;
      height: 2rem;
      margin-bottom: 0.4rem;
      background: #f1e6d8;
    }
  }
}
.about {
  position: relative;
  width: 100%;
  // bottom: 0;
  // left: 0;
  // height: 5rem;
  background-attachment:fixed;
  background-image:url(../../assets/images/img33.jpg);
  background-repeat: no-repeat;
  background-position: bottom left;
  margin-top: 1.5rem;
  font-size: 0.3rem;
  z-index: -2;
  .about-left {
    width: 40%;
    height: 4.8rem;
    margin-left: 12%;
    padding: 3% 3% 0 3%;
    box-sizing: border-box;
    background: rgba(18, 42, 76, 0.4);
    .left-dec {
      display: inline-block;
      width: 1px;
      height: 0.7rem;
      vertical-align: top;
      margin-right: 0.2rem;
      background: #fff;
    }
    .title {
      display: inline-block;
      line-height: 0.37rem;
      margin-bottom: 0.4rem;
      .left-title1 {
        color: #000;
        font-weight: bolder;
      }
      .left-title2 {
        color: #fff;
        font-weight: bolder;
      }
    }
    .about-content {
      font-size: 0.16rem;
      color: #fff;
    }
  }
  .about-img {
    position: absolute;
    top: 0.4rem;
    right: 1.8rem;
    width: 42%;
    z-index: -1;
  }
  .about-more {
    position: absolute;
    top: 1.8rem;
    right: 4.5rem;
    width: 1.2rem;
    height: 1.2rem;
    font-size: 0.2rem;
    text-align: center;
    line-height: 1.2rem;
    border-radius: 50%;
    color: #fff;
    background: rgba(18, 42, 76, 0.7);
  }
    .about-bottom {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 100%;
      height: 7rem;
      padding: 5% 12% 0 12%;
      box-sizing: border-box;
      background-image:url(../../assets/images/img35.jpg);
      background-repeat: no-repeat;
      background-size: 100%;
      img {
        width: 3rem;
        height: 2.5rem;
        padding: 0 0.2rem 0.2rem 0;
      }
    }
}
</style>
