<template>
  <footer class="bg-dark mt-5">
    <div class="container text-md-start py-4">
      <ul class="footer-nav">
        <li class="nav-item pt-1">
          <router-link to="/user/boarding" class="nav-link text-light a-hover fw-bold">
            提供服務
          </router-link>
        </li>
        <li class="nav-item pt-1">
          <router-link to="/orders" class="nav-link text-light a-hover fw-bold">
            訂單查詢
          </router-link>
        </li>
        <li class="nav-item pt-1">
          <router-link to="/followPage" class="nav-link text-light a-hover fw-bold">
            我的收藏
          </router-link>
        </li>
        <li class="nav-item pt-1">
          <router-link to="/about" class="nav-link text-light a-hover fw-bold">
            關於綿綿
          </router-link>
        </li>
      </ul>
      <div class="footer_social">
        <ul class="list-inline text-center mb-0">
          <li class="list-inline-item">
            <a class="text-light" href="#" @click.prevent>
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="list-inline-item ms-2">
            <a class="text-light" href="#" @click.prevent>
              <i class="fab fa-facebook-messenger"></i>
            </a>
          </li>
          <li class="list-inline-item ms-2">
            <a class="text-light" href="#" @click.prevent>
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="list-inline-item ms-2">
            <a class="text-light" href="https://github.com/Vincent5146/vite2" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-copyright">
        <p>© Copyright 2023 綿綿</p>
        <p>個人練習作品，無商業用途</p>
      </div>
    </div>
  </footer>
</template>
