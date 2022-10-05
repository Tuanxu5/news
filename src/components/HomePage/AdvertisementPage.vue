<template>
  <section class="advertisement-page d-flex">
    <div
      class="advertisement-card d-flex bg-white rounded-2 box-shadow cs-pointer"
    >
      <div class="card-image">
        <img class="rounded-2" src="../../assets/HomePage/tower.jpg" />
      </div>
      <div class="px-2 py-4">
        <div class="cl-7e929f fs-13">Real estate</div>
        <div class="fs-15 fw-500 mt-1 hidden-3-line cl-333">
          Billionaire tony just inaugurated the century building to house iron
          man armor
        </div>
        <div class="card-about-author d-flex mt-4 align-content-center">
          <div class="author-avatar">
            <img
              src="../../assets/HomePage/tonystark.jpg"
              width="50px"
              class="rounded-100"
            />
          </div>
          <div class="author-name">
            <span>Tony Stark</span>
            <div class="datetime">Sep 25, 2022</div>
          </div>
        </div>
      </div>
    </div>
    <div class="weather-card">
      <div class="weather-top">
        <div class="weather-top--left">
          <img src="../../assets/HomePage/pager.png" alt="" />
        </div>
        <div class="weather-top--right">
          <span>Tuesday Capsule</span><br />
          <span>Get update on the fly</span><br />
          <span>Brief me <swap-right-outlined /></span>
        </div>
      </div>
      <div class="weather-card--bottom">
        <span>Thanh Xuan, Ha Noi</span>
        <div class="weather">
          <div class="cloudy">
            <img src="../../assets/HomePage/cloudy.png" />
          </div>
          <div class="celsius">
            <span>28℃</span><br />
            <span>Cloudy day, Chances of rain</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { SwapRightOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.advertisement-page {
  grid-gap: 3%;
  margin-top: -50px;
}
.advertisement-card {
  padding: 10px;
  width: 65%;
}
.card-image img {
  width: 300px;
}

.author-name {
  margin-left: 15px;
}
.author-name span {
  font-size: 14px;
  font-weight: 500;
}
.author-name .datetime {
  font-size: 11px;
  color: #7e929f;
}
.weather-card {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  width: 32%;
}
.weather-top {
  display: flex;
  padding: 10px 20px;
  background: #f4f7f9;
  align-items: center;
  border-radius: 15px;
  justify-content: space-around;
}
.weather-top--left img {
  width: 35px;
}
.weather-top--right span:nth-child(1) {
  font-size: 14px;
  font-weight: 500;
}
.weather-top--right span:nth-child(3) {
  font-size: 12px;
}
.weather-top--right span:nth-child(5) {
  font-size: 12px;
  color: #5a7aff;
}
.weather-card--bottom {
  margin-top: 10px;
}
.weather-card--bottom span:nth-child(1) {
  font-size: 15px;
  font-weight: 500;
}
.weather {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.cloudy img {
  width: 70px;
  margin-right: 10px;
}
.celsius span:first-child {
  font-size: 20px;
}
.celsius span:last-child {
  font-size: 12px;
}
@media (max-width: 991px) {
  .advertisement-card {
    display: grid;
    padding: 20px;
    width: 60%;
  }
  .card-image img {
    width: 100%;
    margin-bottom: 10px;
  }
  .card-about {
    padding: 0;
  }
  .card-about-name {
    -webkit-line-clamp: 2;
  }

  .weather-card {
    width: 37%;
    padding: 20px;
  }
  .weather-top {
    padding: 20px;
    display: grid;
    text-align: center;
  }
  .weather-top--left img {
    width: 40%;
    margin-bottom: 15px;
  }
  .weather-card--bottom {
    text-align: center;
    margin-top: 10px;
  }
  .weather-card--bottom span:nth-child(1) {
    font-size: 16px;
  }
  .weather {
    display: grid;
  }
  .cloudy img {
    width: 40%;
  }
  .celsius span:nth-child(1) {
    font-size: 35px;
    line-height: 50px;
  }
}
@media (max-width: 767px) {
  .advertisement-page {
    display: grid;
    grid-template-columns: 100%;
  }
  .advertisement-card {
    width: 100%;
  }
  .weather-card {
    width: 100%;
  }
}
</style>
