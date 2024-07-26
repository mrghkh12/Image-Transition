const $ = document

 let imgBox = $.querySelector('.img-box')
 let imgWrapper = $.querySelector('.img-wrapper')
 let mainImg = $.querySelector('.main-img')

 mainImg.style.width = imgBox.offsetWidth + 'px'


 imgBox.addEventListener('mousemove', e => {
    imgWrapper.style.width =  (e.pageX - imgBox.offsetLeft) + 'px'
 })