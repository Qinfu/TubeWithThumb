var cThumTube = {
	
	_ytPlayer:"",
		
	_playerSetting:{//プレイヤーオプション
		"autoplay":1,
		"rel": 0,
		"wmode": "opaque",
		"autohide":1
		},
	
	init:function(){//初期化
		$(".playerFld img").css("cursor","pointer");
		
		var _tg = this;
		$(".playerFld img").bind("click",function(){
			var xParent = $(this).parent();
			var xCode = $(this).attr("name");
			var xWidth = $(this).attr("width");
			var xHeight = $(this).attr("height");
			_tg.setTubePlayer(xParent,xCode,xWidth,xHeight);
		});
		
		$(".playerFld img").bind("mouseover",function(){
			$(this).addClass("tyEnter");
		});
		$(".playerFld img").bind("mouseout",function(){
			$(this).removeClass("tyEnter");
		});
		
	},

	setTubePlayer:function (xParent,xCode,xWidth,xHeight){//プレイヤー表示
		var xPlayerSp = $('<div id=' + xCode + ' class="tyPlayer"></div>');
		xPlayerSp.appendTo(xParent);
		var _tg = this;
		this._ytPlayer = new YT.Player(xCode, {
	        width: xWidth,
	        height: xHeight,
	        videoId:xCode,
	        playerVars:this._playerSetting,
	    	events:{ "onStateChange": this.stateChange}
    	 });
	},
	
    stateChange:function(evt) {//再生ステイタス監視
	    if (evt.data === YT.PlayerState.PLAYING) {
	        //trace(this._ytPlayer.videoId);
	    } else if (evt.data === YT.PlayerState.ENDED) {
	        //trace("再生終了");
	        var xVideoID = "#" + evt.target.a.id;
	        $(xVideoID).remove();
	    }
	}
}

/*------------------------------------*/
	
function onYouTubePlayerAPIReady() {
	//trace("Player API is Ready");
}

// Player APIの非同期ロード
(function (document) {
    var xApi = document.createElement("script");
    var xScript;
     
    xApi.src = "http://www.youtube.com/player_api";
    xScript = document.getElementsByTagName("script")[0];
    xScript.parentNode.insertBefore(xApi, xScript);
}(document));