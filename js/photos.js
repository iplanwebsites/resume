$( document ).ready(function() {

  $('.photogal').justifiedGallery({
      rowHeight : 350,
      lastRow : 'justify',
      margins : 5

  });


});


/*

ex html:


<div id="basicExample2" class="photogal hidden">
    <a href="path/to/image1.jpg">
        <img alt="caption for image 1" src="/photos/test/1.jpg" />
    </a>
    <a href="path/to/image2.jpg" title="Just in a dream Place">
        <img alt="caption for image 2" src="/photos/test/2.jpg" />
    </a>
    <a >
        <img  src="/photos/test/3.jpg" />
    </a>
    <div >   <img alt="no link but caption" src="/photos/test/4.jpg" />   </div>
    <div >   <img  src="/photos/test/5.jpg" />   </div>
    <div >   <img  src="/photos/test/6.jpg" />   </div>
    <div >   <img  src="/photos/test/7.jpg" />   </div>
    <div >   <img  src="/photos/test/8.jpg" />   </div>
    <div >   <img  src="/photos/test/9.jpg" />   </div>
    <div >   <img  src="/photos/test/10.jpg" />   </div>
    <div >   <img  src="/photos/test/11.jpg" />   </div>
    <div >   <img  src="/photos/test/12.jpg" />   </div>
    <div >   <img  src="/photos/test/13.jpg" />   </div>
    <div >   <img  src="/photos/test/14.jpg" />   </div>

</div>

<div class="photogal">
  <div><img  src="/photos/test/13.jpg" /></div>
  <div><img  src="/photos/test/14.jpg" /></div>
</div>
<div class="photogal">
  <div><img  src="/photos/test/9.jpg" /></div>
</div>

*/
