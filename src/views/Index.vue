<template>
  <div class="index">
    <div data-collapse="small" data-animation="default" data-duration="400" class="nav w-nav">
        <div class="nav-container w-container"><router-link to="/" class="logo w-nav-brand"><img src="../../static/images/MarkOne_logo.png" class="image-3"></router-link>
            <nav role="navigation" class="nav-menu w-nav-menu"><a onclick="chrome.webstore.install()" href="javascript:void(0)" class="link w-button">Get the Chrome Extension</a><router-link to="/sign" class="link login w-button">Come in</router-link></nav>
        </div>
    </div>
    <div class="banner">
        <div class="wrap-2">
            <div class="right-2">
                <h2 class="banner_h1">The Simplest Way to Take Notes for Online Videos</h2>
                <p class="p2">精彩不暂停，笔记随时记</p>
                <a onclick="chrome.webstore.install()" href="javascript:void(0)" class="link-2 w-button">Get the Chrome Extension</a><router-link to="/faq" class="link-3">Can’t get? Let me help you.</router-link>
            </div>
            <!-- <div background-image:"images/background_image";></div> -->
            <div class="left-2"><img src="../../static/images/banner_image.png" class="screenshot"></div>
        </div>
    </div>
    <div class="section-extension">
        <div class="div-block-5">
            <div><img src="../../static/images/twitter_logo.png" width="32" height="32" class="image-7"></div>
            <div class="div-block-6">
                <div class="div-block-9">
                    <p class="paragraph-6">Type something</p>
                </div>
                <div></div>
            </div>
            <div class="div-block-7"></div>
            <div class="div-block-8"></div>
        </div>
    </div>
    <div class="class-section">
        <div class="section-4">
            <h1 class="heading-1">How It Works</h1>
        </div>
        <div class="section-2"><img src="../../static/images/markone_how_it_works.png" srcset="../../static/images/markone_how_it_works-p-500.png 500w, ../../static/images/markone_how_it_works-p-800.png 800w, ../../static/images/markone_how_it_works.png 1069w" sizes="(max-width: 1336px) 80vw, 1069px"></div>
    </div>
    <div class="section-1">
        <div class="section-4">
            <h1 class="heading-1">So You Can</h1>
        </div>
        <div class="section-2">
            <div class="w-row">
                <div class="w-col w-col-4 w-col-medium-4 w-col-small-small-stack w-col-tiny-tiny-stack"><img src="../../static/images/Soyoucan_1.png" class="image-6">
                    <p class="p3">Automatically get the subtitles as notes</p>
                </div>
                <div class="w-col w-col-4 w-col-medium-4 w-col-small-small-stack w-col-tiny-tiny-stack"><img src="../../static/images/Soyoucan_2.png" class="image-6">
                    <p class="p3">Trace back to the point you mark</p>
                </div>
                <div class="w-col w-col-4 w-col-medium-4 w-col-small-small-stack w-col-tiny-tiny-stack"><img src="../../static/images/Soyoucan_3.png" class="image-6">
                    <p class="p3">Highlight the important module </p>
                </div>
            </div>
        </div>
    </div>
    <div class="logos-section">
        <div class="section-4">
            <h1 class="heading-1">We Support</h1>
            <p class="paragraph-5">( Adding...)</p>
        </div>
        <div class="logos-wrap"><img src="../../static/images/youtube_logo.png" width="143" class="customers-logo logo2"></div>
    </div>
    <div class="section-1">
        <div class="wrap-1">
            <h2 class="heading-1">Contact Us</h2>
        </div>
        <div class="div-block-2">
            <div class="div-block">
                <div><img src="../../static/images/markone_wechat_qr0.png" width="80" class="image">
                    <div class="p3">WeChat</div>
                </div>
            </div>
            <div class="div-block"><a href="https://weibo.com/u/6542729569" target="_blank" class="link-block-3 w-inline-block"><img src="../../static/images/Weibo_MarkOne.png" width="80" class="image"><div class="p3">Weibo</div></a></div>
            <div class="div-block"><a href="https://www.facebook.com/markonenote/" target="_blank" class="link-block w-inline-block"><img src="../../static/images/fb_logo.png" width="80" class="image"><div class="p3">Facebook</div></a></div>
            <div class="div-block"><a href="mailto:markone_support@163.com?subject=Any%20questions%20to%20Mark%20One" class="link-block-4 w-inline-block"><img src="../../static/images/email-icon3-purple.png" width="80" class="image"><div class="p3">email</div></a></div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="footer-bottom-wrap">
            <div class="legal">© 2018, Mark One, Team. All Rights Reserved.</div>
        </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/css/webflowa.css';
@import '../assets/css/webflow.css';
.index {
  color: #333!important;
}
</style>
