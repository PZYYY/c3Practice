<template>
	<div id="about">
		<span class="title">维多利亚的秘密</span>
		<div class="about-intr">
			<p>
				维多利亚的秘密时尚秀（英语：Victoria's Secret Fashion Show）是由美国女性内衣与睡衣品牌维多利亚的秘密主办的年度时装表演。它主打维多利亚的秘密品牌的女性内衣，与艺人歌手合作、结合音乐演出，依据当年主题而推出不同的舞台设计，并邀请许多全球知名的时尚模特担当走秀。在美国，维多利亚的秘密时尚秀不只是一场盛大表演，它同时也在电视台黄金时段进行转播。维多利亚的秘密时尚秀自1990年代起定期举行，初期举办时间为刺激买气而订在情人节前夕；除了2001年与美国广播公司合作之外，其余年份皆由哥伦比亚广播公司负责播出。时尚秀曾移师各大城市举行，足迹遍布迈阿密、洛杉矶及戛纳等。
			</p>
			<p>
				最早的四次时尚秀在纽约市广场饭店举办，但自从节目开始于电视同步转播后，地点便较常选定于纽约市的莱辛顿大道兵工厂。2015年11月10日，美国纽约，2015维多利亚的秘密年度大秀举行.2016年11月30日，2016“维多利亚的秘密”时装秀在巴黎举行。 [3]  52位维密天使全体亮相巴黎大皇宫。本次中国超模军团的四美刘雯、雎晓雯、何穗、奚梦瑶也齐聚T台。
				2017年11月20日，维多利亚的秘密在上海梅赛德斯奔驰文化中心举行 [5]  。官方已经敲定了刘雯、雎晓雯、何穗、奚梦瑶、谢欣以及法籍华裔超模陈瑜。
			</p>
		</div>
		<div class="about-img">
			<img src="../../assets/images/img23.jpg" width="100%">
		</div>
		<div class="about-content">
			<div>
				<img src="../../assets/images/img38.jpg"><br>
				<span>Bella Hadid</span>
				<span class="float-block">#Bella Hadid</span>
			</div>
			<div>
				<img src="../../assets/images/img39.jpg"><br>
				<span>Karlie Kloss</span>
				<span class="float-block">#Karlie Kloss</span>
			</div>
			<div>
				<img src="../../assets/images/img40.jpg"><br>
				<span>Jasmine Tookes</span>
				<span class="float-block">#Jasmine Tookes</span>
			</div>
			<div>
				<img src="../../assets/images/img41.jpg"><br>
				<span>Lais Ribeiro</span>
				<span class="float-block">#Lais Ribeiro</span>
			</div>
			<div>
				<img src="../../assets/images/img42.jpg"><br>
				<span>Candice Swanepoel</span>
				<span class="float-block">#Candice Swanepoel</span>
			</div>
			<div>
				<img src="../../assets/images/img43.jpg"><br>
				<span>Adriana Lima</span>
				<span class="float-block">#Adriana Lima</span>
			</div>
			<div>
				<img src="../../assets/images/img44.jpg"><br>
				<span>Alessandra Ambrosio</span>
				<span class="float-block">#Alessandra Ambrosio</span>
			</div>
			<div>
				<img src="../../assets/images/img45.jpg"><br>
				<span>Alessandra Ambrosio</span>
				<span class="float-block">#Alessandra Ambrosio</span>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>
<script>
import MyFooter from '@/components/victoria/MyFooter'
export default {
	components: {
    MyFooter
  }
}
</script>
<style lang="scss">
 #about {
	 font-size: 0.16rem;
	//  text-align: center;
	 .title {
		 display: inline-block;
		 width: 100%;
		 text-align: center;
		 font-size: 0.35rem;
		 margin-bottom: 0.7rem;
	 }
	 .about-intr {
		 width: 80%;
		 margin: 0 0 5% 10%;
		 line-height: 0.3rem;
		 p {
			 text-indent: 0.3rem;
		 }
	 }
	 .about-img {
		 width: 60%;
		 margin: 0 0 7% 20%;
	 }
	 .about-content {
		 display: flex;
		 justify-content: space-between;
		 flex-wrap: wrap;
		 width: 80%;
		 margin-left: 10%;
		 text-align: center;
		 div {
			 position: relative;
			 margin-bottom: 0.5rem;
			 img {
				 margin-bottom: 0.2rem;
			 }
			.float-block {
					position: absolute;
					opacity: 0;
					transform: translate3d(0, -100%, 0);
				}
			 &:hover {
			 	.float-block {
					position: absolute;
					height: 0.28rem;
					line-height: 0.28rem;
					bottom: 0.3rem;
					left: -0.1rem;
					right: -0.1rem;
					color: #fff;
					background: rgba(0, 0, 0, .5);
					opacity: 1;
					transform: translate3d(0, 0, 0);
					transition: 250ms linear;
				 }
			 }
		 }
	 }
 }
</style>

