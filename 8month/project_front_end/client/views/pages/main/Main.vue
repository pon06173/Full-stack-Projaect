<template>
  <div>
    <div
      class="slideshow-container"
      v-on:mouseover="pauseSlide"
      v-on:mouseout="resumeSlide"
    >
      <div
        class="image-wrapper"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        ref="imageWrapper"
      >
        <img
          v-for="(imgSrc, index) in images"
          :key="index"
          :src="imgSrc"
          class="slide-image"
        />
      </div>
      <button class="prev" v-on:click="move(-1)">
        <img src="client/resources/img/left.png" alt="" />
      </button>
      <!-- 다음 슬라이드로 이동하는 버튼 -->
      <button class="next" v-on:click="move(1)">
        <img src="client/resources/img/right.png" alt="" />
      </button>
    </div>

    <div class="item_1_i">
      <div class="item_1">
        <div class="dotstyle">
          <span
            v-for="(image, index) in totalImages"
            :key="index"
            class="dot"
            :class="{ active: currentSlide === index }"
            @click="setSlide(index)"
          ></span>
        </div>
        <h3>NEW</h3>
        <div class="img_new">
          <a href="#" class="a1">Grean Tae Latte</a>
          <a href="#" class="a2">Lotus Ice Cream</a>
          <a href="#" class="a3">Apple ade</a>
          <a href="#" class="a4">Cream Latte</a>
        </div>
        <a href="#" class="but"><button>MORE</button></a>
        <!-- <img src="client/resources/jpg/1-1.jpg" alt="" /> -->
      </div>
    </div>

    <div class="sub_menu">
      <div class="sub_menu_1">
        <p>
          <span>special coffee</span><br />
          As quickly as possible, if we look at the definition of specialty
          coffee, it refers to coffees that score over 80 points by closely
          examining a total of 10 items such as flavor, body, aftertaste, and
          balance based on the Specialty Coffee Associations (SCA).
        </p>
      </div>
      <div class="sub_menu_2"></div>
    </div>
    <footer>
      <div>
        <h5>카페메뉴관리</h5>

        <p>dthelp@cafe.co.kr</p>
        <p>TEL.05.000.0000</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0, // 현재 보이는 슬라이드의 인덱스
      timer: null, // 타이머를 관리하기 위한 변수
      totalImages: 4, // 이미지의 총 개수
      slideDirection: "slide-left", // 추가: 슬라이드 방향
      images: [
        // 이미지 경로 배열로 관리
        "client/resources/jpg/img01.jpg",
        "client/resources/jpg/img02.jpg",
        "client/resources/jpg/img03.jpg",
        "client/resources/jpg/img04.jpg",
      ],
      animationClass: "animate__slideInRight",
      isAnimating: false,
    };
  },
  methods: {
    showSlides() {
      this.timer = setTimeout(() => {
        if (this.currentSlide === this.totalImages - 1) {
          this.animateTransition(() => {
            this.currentSlide = 0;
            this.$refs["imageWrapper"].style.transform = `translateX(0%)`;
          }, true);
        } else {
          this.move(1);
        }
      }, 2000);
    },
    pauseSlide() {
      clearTimeout(this.timer);
    },
    resumeSlide() {
      this.showSlides();
    },
    move(step) {
      if (this.isAnimating) return; // 이미 애니메이션 중이면 반환

      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 1000);
      if (step === 1 && this.currentSlide === this.totalImages - 1) {
        this.animateTransition(() => {
          this.currentSlide = 0;
          this.$refs["imageWrapper"].style.transform = `translateX(0%)`;
        }, true);
      } else if (step === -1 && this.currentSlide === 0) {
        this.animateTransition(() => {
          this.currentSlide = this.totalImages - 1;
          this.$refs["imageWrapper"].style.transform = `translateX(-${
            (this.totalImages - 1) * 100
          }%)`;
        }, true);
      } else {
        this.currentSlide =
          (this.currentSlide + step + this.totalImages) % this.totalImages;
      }
      this.pauseSlide(); // 일시 중지
      this.resumeSlide(); // 슬라이드 재개
    },
    animateTransition(callback, restoreAfter = false) {
      this.$nextTick(() => {
        this.$refs["imageWrapper"].style.transition = "none";
        callback(); // 변화를 적용
        if (restoreAfter) {
          setTimeout(() => {
            this.$refs["imageWrapper"].style.transition = ""; // 애니메이션 효과 복구
          }, 50); // 약간의 딜레이 후 복구
        } else {
          this.$refs["imageWrapper"].style.transition = "";
        }
      });
    },

    setSlide(index) {
      this.currentSlide = index;
      this.pauseSlide(); // 현재 슬라이드 타이머를 일시 중지합니다.
      this.resumeSlide(); // 새로운 슬라이드를 시작합니다.
    },
  },
  watch: {},
  computed: {},
  components: {},
  mounted() {
    this.showSlides();
  },
  beforeDestroy() {
    clearTimeout(this.timer); // 컴포넌트가 사라지기 전에 타이머를 해제
  },
};
</script>
