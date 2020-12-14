function autoSlide() {
  let imgBox = document.querySelector('.banner_img')
  let dotBox = document.querySelector('.banner_indicator')
  let dotLiList = dotBox.querySelectorAll("li")
  // 定义图片和点的索引
  let imgIndex = 1, dotIndex = 0
  setInterval(function () {
    dotLiList[dotIndex].classList.toggle('active')
    // 索引为 0-(length-1) 和索引为length时做不同的处理
    if (dotIndex === dotLiList.length - 1) {
      //索引到最后一个时调整为第一个的前一个
      dotIndex = -1
      // 激活第length个点的下一个索引
      dotLiList[dotIndex + 1].classList.toggle('active')
    } else {
      // 激活第0-(length-1)个点的的下一个索引
      dotLiList[dotIndex + 1].classList.toggle('active')
    }
    // 添加过渡效果
    imgBox.style.transition = "left 0.3s"
    if (imgIndex === dotLiList.length) {// 处理最后一张图片的切换
      // 切换到最后一张图片（额外添加的那一张）
      imgBox.style.left = (-(imgIndex + 1) * 100) + "%"
      // ！过渡效果是在0.3s后执行的，需要隐藏从最后一张切换到第二张的过渡效果
      setTimeout(() => {
        // 清除过渡
        imgBox.style.transition = "none"
        // 重置索引
        imgIndex = 1
        //切换到第二张图片（不额外添加的第一张）
        imgBox.style.left = (-(imgIndex) * 100) + "%"
      }, 300)
    } else {
      imgBox.style.left = (-(imgIndex + 1) * 100) + "%"
    }
    dotIndex++
    imgIndex++
  }, 800)

}