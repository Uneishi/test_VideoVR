		
		
		var button = document.querySelector('a-image');
		var mute = document.querySelector("#mute_button");
		var video = document.getElementById("video");
		play_image_src = "#video-play-image";
	    pause_image_src = "#video-pause-image";
		mute_image_src = "#mute-image";
		unmute_image_src = "#unmute-image";
		button.addEventListener( 'click', function (event){
			if (!video.paused){
			button.setAttribute('src', play_image_src);
			video.pause();
			}
			else{
			button.setAttribute('src', pause_image_src);
			video.play();
			}
		});
		mute.addEventListener('click', function (event){
			if (!video.muted){
			mute.setAttribute('src', mute_image_src);
			video.muted = true;
			}
			else{
			mute.setAttribute('src', unmute_image_src);
			video.muted = false;
			}
		});