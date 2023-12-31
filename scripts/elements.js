// ! Elements

const video_player = document.querySelector(".videoPlayer"),
video = video_player.querySelector("#mainVideo"),
controls = video_player.querySelector(".controls"),
overlay = video_player.querySelector(".overlay"),
closeControls = video_player.querySelector(".close-controls"),
volume = video_player.querySelector(".volume-container"),
volumeIcon = video_player.querySelector(".vd-c .volume"),
volume_muted = video_player.querySelectorAll(".volume-muted-icon"),
volume_high = video_player.querySelectorAll(".volume-high-icon"),
playBtn = document.querySelector(".play-btn"),
pauseBtn = document.querySelector(".pause-btn"),
replayBtn = document.querySelector(".replay-btn"),
skip10 = document.querySelector(".skip-10"),
replay10 = document.querySelector(".replay-10"),
prevBtn = document.querySelector(".prev-btn"),
nextBtn = document.querySelector(".next-btn"),
current = document.querySelector(".current"),
duration = document.querySelector(".duration"),
progressBar = document.querySelector(".juice"),
bufferedBar = video_player.querySelector(".bufferedBar"),
progressArea = document.querySelector(".bar"),
autoplay = document.querySelector(".autoplay"),
closed_caption = video_player.querySelector(".closed-caption"),
settingsBtn = video_player.querySelector(".settingsBtn"),
settings = video_player.querySelector(".settings"),
closeSettings = video_player.querySelectorAll(".cls"),
menu_bar = document.querySelector(".menu-bar"),
home_items = document.querySelectorAll(".drop-item"),
settings_item = document.querySelectorAll(".drop-item"),
back_icon = document.querySelectorAll(".back-icon"),
loopToggles = video_player.querySelectorAll(".loop-line"),
pictureInPicture = video_player.querySelector(".picture-in-picture"),
playback = video_player.querySelectorAll("#speed-drop li"),
qualities = video_player.querySelectorAll("source[sizes]"),
quality_ul = video_player.querySelector("#quality-drop ul"),
captions_labels = video_player.querySelector("#captions-drop ul"),
captions = video_player.querySelector("#captions-drop"),
captionToggle = document.querySelector(".caption-line"),
tracks = video_player.querySelectorAll("track"),
contextMenu = video_player.querySelector(".context-menu"),
copyURL = video_player.querySelector(".copy-link"),
copySequence = video_player.querySelector(".copy-seq"),
copyIframe = video_player.querySelector(".copy-iframe"),
fullscreenBtn = document.querySelector(".fullscreen-btn"),
fullscreen = document.querySelector(".open"),
exitFullscreen = document.querySelector(".close"),
progressAreaTime = document.querySelector(".progressAreaTime"),
loader = document.querySelector(".loader"),
webicon = document.querySelector(".webicon"),
thumbnail = document.querySelector(".thumbnail"),
aside = document.querySelector(".aside");

