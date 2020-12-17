window.onload = function () {
  bannerEffect()
}

/* 轮播图 */
function bannerEffect() {
  initBanner()
  autoSlide()
  manualSlide()
}
/* 1. 修改轮播图的页面结构 */
function initBanner() {
  // 获取ul ul第一个子li ul最后一个子li ul所有子li
  let imgBox = document.querySelector('.banner_img')
  let firstLi = imgBox.querySelector('li:first-of-type')
  let lastLi = imgBox.querySelector('li:last-of-type')
  // 向首尾添加第一个和最后一个元素
  imgBox.appendChild(firstLi.cloneNode(true))
  imgBox.insertBefore(lastLi.cloneNode(true), imgBox.firstChild)
  // !! 查询所有的li一定要放在添加两个元素之前
  let imgLiList = imgBox.querySelectorAll('li')
  // 图片ul盒子的宽度：length*100%
  imgBox.style.width = ((imgLiList.length) * 100) + "%"
  //图片li盒子的宽度
  imgLiList.forEach(item => {
    item.style.width = 1 / (imgLiList.length) * 100 + "%"
  })
  // 设置偏移至第二张图片
  imgBox.style.left = "-100%"
}
/* 自动轮播+手动轮播 */
function autoSlide() {
  let imgBox = document.querySelector('.banner_img')
  let dotBox = document.querySelector('.banner_indicator')
  let dotLiList = dotBox.querySelectorAll("li")
  // 图片数 = 点数 + 2
  let imgNum = dotLiList.length + 2
  // 定义图片和点的索引
  let imgIndex = 1, dotIndex = 0

  function setIndicator(imgIndex) {
    dotIndex = imgIndex - 1
    //索引为 0-(length-1) 和索引为length时做不同的处理
    for(let i = 0;i<dotLiList.length;i++) {
      dotLiList[i].classList.remove('active')
    }
    dotLiList[dotIndex].classList.add('active')
  }

  let timerId
  let startTimer = function () {
    timerId = setInterval(function () {

      // 添加过渡效果
      imgBox.style.transition = "left 0.3s"
      if (imgIndex === imgNum - 2) {// 处理imgNum-2到imgNum-1图片的切换
        // 切换到最后一张图片（额外添加的那一张）
        imgBox.style.left = (-(imgIndex + 1) * 100) + "%"
        // ！过渡效果是在0.3s后执行的，需要隐藏从最后一张切换到第二张的过渡效果
        setTimeout(() => {
          // 清除过渡
          imgBox.style.transition = "none"
          // 重置索引
          imgIndex = 1
          //切换到第二张图片（不额外添加的第一张）
          imgBox.style.left = (-imgIndex * 100) + "%"
        }, 300)
      } else {
        imgBox.style.left = (-(imgIndex + 1) * 100) + "%"
      }
      imgIndex++
    }, 2000)
  }
  startTimer()
  /* 手动轮播 */
  let startX, moveX, offsetX
  let isTransitionEnd = true
  // touchstart获取targetTouches，获取clientX
  imgBox.addEventListener('touchstart', function (event) {
    // 清除定时器
    clearInterval(timerId)
    startX = event.targetTouches[0].clientX
  })
  // touchmove获取clientX，计算偏移距离，将ul偏移对应距离
  imgBox.addEventListener('touchmove', function (event) {
    if (isTransitionEnd) {
      // 清除过渡效果
      imgBox.style.transition = "none"
      moveX = event.targetTouches[0].clientX
      offsetX = moveX - startX
      // 将盒子额外移动与鼠标偏移等量的距离
      imgBox.style.left = `calc(-${(imgIndex) * 100}% + ${offsetX}px)`
    }
  })
  // touchend若偏移>1/3移动到下一张，若<1/3则还原
  imgBox.addEventListener('touchend', function (event) {
    if (Math.abs(offsetX) < 100) {
      imgBox.style.transition = "left 0.3s"
      imgBox.style.left = `-${(imgIndex) * 100}%`
    } else {
      // offsetX<0，向左额外偏移1个img宽度,否则向右
      let add = (offsetX < 0) ? 1 : -1
      imgIndex += add
      imgBox.style.transition = "left 0.3s"
      imgBox.style.left = `-${imgIndex * 100}%`
    }
    // 重置上一次拖动产生的数据
    startX = moveX = offsetX = 0
    isTransitionEnd = false
  })
  /* transition结束 */
  imgBox.addEventListener('webkitTransitionEnd', function () {
    if (imgIndex === imgNum - 1) {
      imgIndex = 1
      imgBox.style.transition = "none"
      imgBox.style.left = `-${imgIndex * 100}%`
    } else if (imgIndex === 0) {
      imgIndex = imgNum - 2
      imgBox.style.transition = "none"
      imgBox.style.left = `-${imgIndex * 100}%`
    }
    setIndicator(imgIndex)
    // 解决在过渡之前快速连续拖动产生的bug
    setTimeout(() => {
      isTransitionEnd = true
      // 清除每次过渡添加的计时器
      clearInterval(timerId)
      // 重新添加计时器
      startTimer()
    }, 300)

  })
}

function manualSlide() {

}

