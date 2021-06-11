var OriginTitile = document.title;
var titleTime;
document.addEventListener("visibilitychange",
	function() {
		if (document.hidden) {
			document.title = "有本事别走！!!!∑(ﾟДﾟノ)ノ ";
			clearTimeout(titleTime)
		} else {
			document.title = "哈哈，真听话！ヾ(ﾟ∀ﾟゞ)";
			titleTime = setTimeout(function() {
					document.title = OriginTitile
				},
				2000)
		}
	});
onload = function() {
	var b = 0;
	var a = document.getElementsByTagName("html")[0];
	var c = document.getElementsByTagName("body")[0];
};
var now = new Date();
function createtime() {
	var a = new Date("06/11/2021 10:42:00");
	now.setTime(now.getTime() + 250);
	days = (now - a) / 1000 / 60 / 60 / 24;
	dnum = Math.floor(days);
	hours = (now - a) / 1000 / 60 / 60 - (24 * dnum);
	hnum = Math.floor(hours);
	if (String(hnum).length == 1) {
		hnum = "0" + hnum
	}
	minutes = (now - a) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
	mnum = Math.floor(minutes);
	if (String(mnum).length == 1) {
		mnum = "0" + mnum
	}
	seconds = (now - a) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
	snum = Math.round(seconds);
	if (String(snum).length == 1) {
		snum = "0" + snum
	}
	document.getElementById("date").innerHTML = "本站已安全运行" + dnum + "天";
	document.getElementById("time").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒"
	document.getElementById("year").innerHTML = now.getFullYear();
}
setInterval("createtime()", 250);