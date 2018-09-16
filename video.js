var urls = [
  'https://www.dropbox.com/s/e4p8r8u2cucf2rb/720P_1500K_120159301.mp4?dl=1',
  'https://cv.phncdn.com/videos/201506/10/50272542/vl_720_831k_50272542.mp4?8zZXgNtCnRiAzHHd5OS50D7a6Rk_t0nWBAOkqHLH12YJ2owjYCGUOid7Qbmt9-xLCDvCXeuDKA2N7ovsSXV9BfqknSqA2AmsSvcZKqiRMFsRIWx8yUQu6EWe5nwUfwPkO7ZYibntqcM3eLOAlQnTIfeqVSmcWwv0N8cDodyRM1vl2YdiCuu1CzARcDQVW70cU0lDoXCDB_8',
  'https://ev.phncdn.com/videos/201505/16/49069441/vl_720P_794.0k_49069441.mp4?validfrom=1537130114&validto=1537137314&rate=140k&burst=1400k&hash=UIeXqLBVBZyUWYwH6Z9NjExLgc0%3D'
]

function main() {
  var div = document.createElement("div");
  div.id = "sissybg";

  var video = document.createElement("video");
  video.id = "sissyvideo";
  video.autoplay = true;
  video.loop = true;
  video.muted = true;

  for (var i = 0; i < urls.length; i++) {
    var source = document.createElement("source");
    source.src = urls[i];
    video.appendChild(source);
  }

  div.appendChild(video);
  document.body.appendChild(div);
}

window.addEventListener('load', function(event) {
  main();
});
