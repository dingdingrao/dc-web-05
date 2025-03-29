;(function ($) {
  'use strict'

  // WoW
  new WOW({
    offset: 200,
  }).init()

  // 滚动吸顶
  // $(window).on('scroll', function () {
  //   let scrollY = window.scrollY
  //   let $sticky = $('#sticky')
  //   let $scrollArea = $('.scroll-area')

  //   const offset = 150

  //   let stickyHeight = $sticky.outerHeight() // 获取 .videos 的高度
  //   let areaTop = $scrollArea.offset().top - offset // 获取 .scroll-area 的顶部距离
  //   let areaHeight = $scrollArea.outerHeight() // 获取 .scroll-area 的高度
  //   let areaBottom = areaTop + areaHeight - stickyHeight // 计算 .scroll-area 的底部距离
  //   // console.log("sticky 高度:", stickyHeight);
  //   // console.log("sticky 高度:", stickyHeight);
  //   // console.log("areaTop:", scrollY, areaBottom, scrollY >= areaBottom);

  //   if (scrollY > areaTop && scrollY < areaBottom) {
  //     // 在 .scroll-area 范围内，固定吸顶
  //     $sticky.addClass('active').css({ position: 'fixed', top: offset + 'px', bottom: 'auto' })
  //   } else if (scrollY >= areaBottom) {
  //     // 超过 .scroll-area，跟随滚动
  //     $sticky.removeClass('active').css({ position: 'absolute', top: 'auto', bottom: 0 })
  //   } else {
  //     // 低于 .scroll-area，取消固定
  //     $sticky.removeClass('active').css({ position: '', top: '' })
  //   }
  // })

  // 登录弹窗
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
})(jQuery)

new Swiper('.swiper', {
  loop: true, // 开启循环滚动
  autoplay: {
    delay: 0, // 设置为 0 使其无间隔滚动
    disableOnInteraction: true, // 用户交互后是否停止自动滚动
  },
  speed: 8000, // 滚动速度（ms），调整更流畅
  slidesPerView: 'auto', // 适应内容大小
  spaceBetween: 30, // 幻灯片间距
  centeredSlides: true, // 使当前项居中
})

// 视频播放
document.addEventListener('DOMContentLoaded', function () {
  // 获取所有作品容器
  const mediaItems = document.querySelectorAll('.break-inside-avoid')

  mediaItems.forEach(item => {
    // 在每个容器中查找video元素
    const video = item.querySelector('video')

    // 如果是视频容器
    if (video) {
      // 创建播放按钮的 SVG
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

      // 将播放按钮插入到视频容器的顶部
      video.insertAdjacentHTML('beforebegin', playButtonSVG)

      const playButton = item.querySelector('.play-button') // 使用类名选择器

      // 预加载视频元数据
      video.addEventListener('loadedmetadata', () => {
        video.currentTime = 0 // 初始定位到开头
        video.pause() // 确保初始状态是暂停的
      })

      // 鼠标进入时播放
      item.addEventListener('mouseenter', () => {
        video.muted = true // 静音
        video.play().catch(error => {
          console.error('视频播放失败:', error)
        })
        if (playButton) {
          playButton.style.display = 'none' // 隐藏播放按钮
        }
      })

      // 鼠标离开时暂停
      item.addEventListener('mouseleave', () => {
        video.pause()
        video.currentTime = 0 // 重置播放进度
        if (playButton) {
          playButton.style.display = 'block' // 显示播放按钮
        }
      })
    }
    // 图片容器不需要处理
  })
})
