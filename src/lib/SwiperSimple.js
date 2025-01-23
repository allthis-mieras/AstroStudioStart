// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// YouTube API ready callback
window.onYouTubeIframeAPIReady = function () {
  console.log('YouTube Iframe API is ready');
};

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    loop: false,
    on: {
      // Pauzeer video's bij overgang naar een nieuwe slide
      transitionStart: function () {
        // Stop HTML video-elementen
        var videos = document.querySelectorAll('video');
        videos.forEach((video) => {
          video.pause();
          video.currentTime = 0; // Reset naar het begin
        });

        // Stop YouTube en Vimeo embeds
        var iframes = document.querySelectorAll('iframe');
        iframes.forEach((iframe) => {
          const src = iframe.src;

          if (src.includes('youtube.com') || src.includes('youtube-nocookie.com')) {
            console.log('Pausing YouTube video:', src);
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }

          if (src.includes('vimeo.com')) {
            console.log('Pausing Vimeo video:', src);
            iframe.contentWindow.postMessage('{"method":"pause"}', '*');
          }
        });
      },
      transitionEnd: function () {
        var activeIndex = this.activeIndex;
        var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];

        // HTML <video> elementen
        var activeSlideVideo = activeSlide.querySelector('video');
        if (activeSlideVideo) {
          activeSlideVideo.play();
        }

        // YouTube en Vimeo iframes
        var iframe = activeSlide.querySelector('iframe');
        if (iframe) {
          const src = iframe.src;

          if (src.includes('youtube.com') || src.includes('youtube-nocookie.com')) {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          }

          if (src.includes('vimeo.com')) {
            iframe.contentWindow.postMessage('{"method":"play"}', '*');
          }
        }
      }
    }
  });
});


