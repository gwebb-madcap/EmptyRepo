  var activeVideo;

$(function() {

  var allDivVideos = $("[data-bynder-widget]");

  if(allDivVideos.length > 0)
  {
    window.getAllVideos().then(function (data) {

    var allBynderVideos = data;
    var self = this;

    $.each(allDivVideos, function (index, value) {
      var videoId = $(value).data('media-id');

      var foundIndex = allBynderVideos.findIndex(function (x) { return x.id == videoId });

      var videoInfo = allBynderVideos[foundIndex];

//      if (videoInfo && videoInfo.thumbnails) {
//        $(value).css('background', 'transparent url(' + videoInfo.thumbnails.thul + ') no-repeat left top');
//      }

      $(value).append('<div class="center"><i class="far fa-play-circle fa-5x"></i></div>');

      if (videoInfo) {
        $(value).click(function () {
          activeVideoId = videoId;

          $('#video-modal').modal();

          var videoURL = getVideoLink(videoInfo);

          activeVideo = $('<video />', {
            id: 'video',
            src: videoURL,
            autoplay: true,
            controlsList: 'nodownload',
            width: 600,
            controls: true
          });

          var bynderDiv = $("#video-modal").find('.bynder-video')[0];

          $(bynderDiv).html(activeVideo);

          $('#video-modal').on($.modal.BEFORE_CLOSE, function (event, modal) {

            $('#video-modal').off($.modal.BEFORE_CLOSE);

            if (activeVideo) {
              activeVideo[0].pause();
            }
          });

        });
      }

    })
  });

}
});

  function getVideoLink(video) {

    var videoURL = '';

    $.each(video.videoPreviewURLs, function (index, value) {
      if (value.endsWith(".mp4")) {
        videoURL = value;
        return;
      }
    });

    return videoURL;
  }