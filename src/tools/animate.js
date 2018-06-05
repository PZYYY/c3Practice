function Animate () {

}
Animate.prototype = {
	constructor: Animate,
	add: function (targetObject, targetTop, className) { // targetObject目标组件,targetTop目标组件到浏览器顶部的距离
		window.onscroll = (e) => { // 原生js监听滚动事件
			targetTop = targetObject.getBoundingClientRect().top
			this.animate()
		}
	}
}

export default Animate