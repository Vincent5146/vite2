<template>
  <div class="banner">
    <div class="banner-txtbox">
      <h2>綿綿寵物旅館</h2>
      <router-link to="/user/boarding" class="btn btn-dark btn-hover rounded-0">了解更多</router-link>
    </div>
  </div>

  <div class="home mt-5">
    <div class="container">
      <section class="section-1" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="200">
        <div class="d-flex justify-content-center">
          <h1 class="fs-3 fw-bold">「綿綿寵物旅館」簡單來說：</h1>
        </div>
        <div class="card-group mt-5">
          <div class="col-md-4">
            <div class="summary text-center">
              <router-link to="/about" class="education-img img-fluid"></router-link>
              <div class="card-body">
                <h3 class="card-title fw-bold">教育理念</h3>
                <p class="card-text text-left">
                  尊重寵物個性，適性發展，狗狗享自由社交空間，貓咪享獨立玩樂空間，以安全為前提，寵物愛玩什麼玩什麼。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="summary text-center">
              <router-link to="/about" class="daycare-img img-fluid"></router-link>
              <div class="card-body">
                <h3 class="card-title fw-bold">24H 褓母照顧</h3>
                <p class="card-text text-left">
                  24 小時專業褓母駐館照顧，褓母個別觀察寵物身心理需求，給予每隻寵物個別化、最適切的空間、照顧和作息安排。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="summary text-center">
              <router-link to="/about" class="environment-img img-fluid"></router-link>
              <div class="card-body">
                <h3 class="card-title fw-bold">嚴格防疫 清潔 消毒</h3>
                <p class="card-text text-left">
                  寵物入館嚴格檢查疫苗紀錄，全館每天醫療級消毒，HRV 全熱交換器維持室內空氣高含氧量。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-2" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
        <div class="section-title">
          <h2>
            <span>綿綿也能</span>幫助您解決困擾
          </h2>
        </div>
        <div class="features" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
          <div class="features-img-coaching"></div>
          <div class="features-txt">
            <div class="features-icon"></div>
            <h3>TTouch合作輔導</h3>
            <div>
              <p>
                結合特定撫摸方法、托提手法及肢體活動，協助您了解狗狗，改善人狗關係，建立信任感。提高彼此的生活品質。
              </p>
              <p>
                已經成功讓許多看到狗或陌生人會緊張、吠叫的狗狗，慢慢得可接受身體接觸，能夠放鬆的生活。
              </p>
            </div>
          </div>
        </div>
        <div class="features" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
          <div class="features-img-before"></div>
          <div class="features-txt">
            <div class="features-icon"></div>
            <h3>安親前須知</h3>
            <div>
              <p>
                以小時計費，沒有最低時數限制。連假期間不提供安親服務。
              </p>
              <p>
                長期安親照護請預約時間帶狗狗來店洽詢。
              </p>
            </div>
            <div class="mybtn">
              <a class="mybtn-link" href="tel:+02-24123456">
                <span>
                  來電洽詢
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-3" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="200">
        <div class="container">
          <div class="section-title">
            <h2>好文推薦</h2>
          </div>
          <div class="blog">
            <div class="blog-item">
              <div class="blog-pic">
                <a target="_blank" href="https://pets.ettoday.net/news/2142169">
                  <img src="@/assets/images/home-blog1.jpg" class="card-img-top" alt="寵物窩">
                </a>
              </div>
              <div class="blog-txt">
                <h3 class="blog-txt-title">寵物窩「一個用到底」埋健康危機！</h3>
                <p class="blog-txt-des">
                  貓狗床窩要定期清潔，更要記得定期更換
                </p>
              </div>
            </div>
            <div class="blog-item">
              <div class="blog-pic">
                <a target="_blank" href="https://www.abibpet.com/blog/%E3%80%90%E4%B8%BB%E4%BA%BA%E4%B8%8D%E5%8F%AF%E4%B8%8D%E7%9F%A5%EF%BC%8F%E7%8B%97%E7%8B%97%E8%88%94%E8%88%94%E8%88%94-%E6%83%B3%E8%A6%81%E5%91%8A%E8%A8%B4%E4%BD%A0%E4%BB%80%E9%BA%BC%E4%BA%8B%E5%97%8E%E3%80%91">
                  <img src="@/assets/images/home-blog2.jpg" class="card-img-top" alt="舔舔舔">
                </a>
              </div>
              <div class="blog-txt">
                <h3 class="blog-txt-title">主人不可不知</h3>
                <p class="blog-txt-des">
                  毛孩舔舔舔，有代表什麼意思呢？
                </p>
              </div>
            </div>
            <div class="blog-item">
              <div class="blog-pic">
                <a target="_blank" href="https://www.businessweekly.com.tw/style/blog/8524">
                  <img src="@/assets/images/home-blog3.jpg" class="card-img-top" alt="訓練">
                </a>
              </div>
              <div class="blog-txt">
                <h3 class="blog-txt-title">教你訓練狗狗</h3>
                <p class="blog-txt-des">
                  關鍵在於主人的教導方法喔！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
