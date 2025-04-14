;(function ($) {
  'use strict'

  // WoW
  new WOW({
    offset: 200,
  }).init()

  // Rolling ceilings
  // $(window).on('scroll', function () {
  //   let scrollY = window.scrollY
  //   let $sticky = $('#sticky')
  //   let $scrollArea = $('.scroll-area')

  //   const offset = 150

  //   let stickyHeight = $sticky.outerHeight() // Gets the height of the .videos
  //   let areaTop = $scrollArea.offset().top - offset // Gets the top distance of the .scroll-area
  //   let areaHeight = $scrollArea.outerHeight() // Gets the height of the .scroll-area
  //   let areaBottom = areaTop + areaHeight - stickyHeight // Calculate the bottom distance of the .scroll-area
  //   // console.log("sticky height:", stickyHeight);
  //   // console.log("sticky height:", stickyHeight);
  //   // console.log("areaTop:", scrollY, areaBottom, scrollY >= areaBottom);

  //   if (scrollY > areaTop && scrollY < areaBottom) {
  //     // In the .scroll-area range, the ceiling is fixed
  //     $sticky.addClass('active').css({ position: 'fixed', top: offset + 'px', bottom: 'auto' })
  //   } else if (scrollY >= areaBottom) {
  //     // Exceed .scroll-area to follow the scroll
  //     $sticky.removeClass('active').css({ position: 'absolute', top: 'auto', bottom: 0 })
  //   } else {
  //     // Below .scroll-area, unpin
  //     $sticky.removeClass('active').css({ position: '', top: '' })
  //   }
  // })

  // Login pop-up
  $(document).ready(function () {
    $('.signIn').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom',

      callbacks: {
        open: function () {
          $('body').css('overflow', 'hidden')
        },
        close: function () {
          $('body').css('overflow', '')
        },
      },
    })
  })

  // Prompt pop-up
  $(document).ready(function () {
    $('.prompt').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom',

      callbacks: {
        open: function () {
          $('body').css('overflow', 'hidden')
        },
        close: function () {
          $('body').css('overflow', '')
        },
      },
    })
  })
})(jQuery)

new Swiper('.swiper-comment', {
  loop: true, // Turn on cycle scrolling
  autoplay: {
    delay: 0, // Set it to 0 to make it scroll without intervals
    disableOnInteraction: true, // Whether to stop auto-scrolling after user interaction
  },
  speed: 8000, // Scroll speed (ms) for smoother adjustments
  slidesPerView: 'auto', // Adapts to the size of the content
  spaceBetween: 30, // Slide spacing
  centeredSlides: true, // Center the current item
})

new Swiper('.swiper-products', {
  effect: 'coverflow',
  loop: true, // Turn on cycle scrolling
  // autoplay: {
  //   delay: 0, // Set it to 0 to make it scroll without intervals
  //   disableOnInteraction: true, // Whether to stop auto-scrolling after user interaction
  // },
  // speed: 1000, // Scroll speed (ms) for smoother adjustments
  // spaceBetween: '1vw', // Slide spacing
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
})

new Swiper('.swiper-my-products', {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// Video playback
document.addEventListener('DOMContentLoaded', function () {
  // Get all the work containers
  const mediaItems = document.querySelectorAll('.break-inside-avoid')

  mediaItems.forEach(item => {
    // Look for the video element in each container
    const video = item.querySelector('video')

    // If it's a video container
    if (video) {
      // Create a play button SVG
      const playButtonSVG = `
        <svg class="svg-icon play-button w-[40px] h-[40px] absolute top-0 left-0 bottom-0 right-0 m-auto z-10" fill="currentColor">
          <use href="#icon-card-play"></use>
          <symbol fill="currentColor" viewBox="0 0 16 16" id="icon-card-play">
            <foreignObject x="-8" y="-8" width="32" height="32">
              <div xmlns="http://www.w3.org/1999/xhtml"
                style="backdrop-filter:blur(4px);clip-path:url(#icon-card-play_a);height:100%;width:100%"></div>
            </foreignObject>
            <path data-figma-bg-blur-radius="8" fill-rule="evenodd" clip-rule="evenodd"
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM7.157 4.665c-.726-.453-1.657.08-1.657.949v4.772c0 .869.931 1.402 1.657.95l3.822-2.387a1.125 1.125 0 0 0 0-1.898L7.157 4.665Z"
              fill="#fff" fill-opacity=".24" data-darkreader-inline-fill=""
              style="--darkreader-inline-fill: var(--darkreader-text-ffffff, #e8e6e3);"></path>
            <defs>
              <clipPath id="icon-card-play_a">
                <path transform="translate(8 8)" fill-rule="evenodd" clip-rule="evenodd"
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM7.157 4.665c-.726-.453-1.657.08-1.657.949v4.772c0 .869.931 1.402 1.657.95l3.822-2.387a1.125 1.125 0 0 0 0-1.898L7.157 4.665Z">
                </path>
              </clipPath>
            </defs>
          </symbol>
        </svg>
      `

      // Insert the play button into the top of the video container
      video.insertAdjacentHTML('beforebegin', playButtonSVG)

      const playButton = item.querySelector('.play-button')
      // Preload video metadata
      video.addEventListener('loadedmetadata', () => {
        video.currentTime = 0 // Initial targeting to the beginning
        video.pause() // Make sure that the initial state is paused
      })

      // Play when the mouse enters
      item.addEventListener('mouseenter', () => {
        video.muted = true // mute
        video.play().catch(error => {
          console.error('Video playback failed:', error)
        })
        if (playButton) {
          playButton.style.display = 'none' // Hide the play button
        }
      })

      // Pause when the mouse is away
      item.addEventListener('mouseleave', () => {
        video.pause()
        video.currentTime = 0 // Reset the playback progress
        if (playButton) {
          playButton.style.display = 'block' // The play button is displayed
        }
      })
    }
    // The image container does not need to be processed
  })
})

function downloadVideo(url) {
  // Create a temporary anchor element
  const a = document.createElement('a')
  a.href = url
  a.download = 'video.mp4' // Set the download filename

  // Trigger the download
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

// Self-executing functions
;(function () {
  window.addEventListener('load', () => {
    // Get all the video elements that need to be lazy loaded
    const videos = document.querySelectorAll('video')

    // create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target
            // const videoSource = video.querySelector('source');
            // When the video enters the window, the video starts loading
            video.src = video.getAttribute('data-src')
            console.log('video loaded', video.src)
            console.log(video.getAttribute('poster'))

            video.load() // Load the video
            video.play() // Autoplay video (optional)
            observer.unobserve(video) // Stop watching this video
          }
        })
      },
      { threshold: 0.5 }
    ) // threshold: 0.5 Indicates that it is triggered when at least half of the video enters the window

    // Go through all the videos and start observing
    videos.forEach(video => {
      observer.observe(video)
    })
  })
})()
