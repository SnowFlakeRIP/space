<template>
  <section class="info">
    <div class="special__offer">
      <div class="container">
        <h2 class="title">Спец <br> предложения</h2>
        <div class="special__offer-inner">
          <div class="special__offer-item">
            <div class="special__offer-item-box">
              <p class="special__offer-item-text">
                Забронируй полет
                <span>прямо сейчас</span>
                и получи скижку
                1000$
              </p>
              <div class="special__offer__price">
                <p class="special__offer-old-price">250 000$</p>
                <p class="special__offer-new-price">249 000$</p>
              </div>
            </div>
            <button class="button special-offer__btn">Забронировать полет</button>
          </div>
          <div class="special__offer-item">
            <div class="special__offer-item-box">
              <p class="special__offer-item-text">
                Приведи друга и получи
                <span>скидку 10% </span>
                на следующий полет, если вернешься
              </p>
              <div class="special__offer__price">
                <p class="special__offer-old-price">250 000$</p>
                <p class="special__offer-new-price">225 000$</p>
              </div>
            </div>
            <button class="button special-offer__btn">Забронировать полет</button>
          </div>
        </div>
      </div>
    </div>
    <div class="services">
      <div class="container">
        <h2 class="title services__title">Дополнительные <br> услуги</h2>
        <div class="services__inner">
          <div class="services__box-list">
            <p class="services__list-title">
              С вами полетит профессиональный фотограф
            </p>
            <ul class="services__list">
              <li class="services__item">20 фотографий в профессиональной обработке</li>
              <li class="services__item">фото книга</li>
              <li class="services__item">магнит на холодильник в подарок</li>
            </ul>
            <p class="services__description">
              Стоимость фотосессии в невесомости 100 000 $. Доплати 50 000 $ и получи все фото в
              цветокоррекции на диске.
            </p>
          </div>
          <div class="services__buttons">
            <button class="button services__btn services__btn--first photo">Купить услуги фотографа</button>
            <button class="button services__btn disk">Хочу и диск</button>
          </div>
        </div>
      </div>
    </div>
    <div class="slider">
      <div class="container">
        <div class="slider__inner">
          <div class="slider__box">
            <div class="slider__box-item">
              <img class="slider__box-img" alt="1" src="../assets/images/slider.jpg">
            </div>
            <div class="slider__box-item">
              <img class="slider__box-img" alt="1" src="../assets/images/slider.jpg">
            </div>
            <div class="slider__box-item">
              <img class="slider__box-img" alt="1" src="../assets/images/slider.jpg">
            </div>
          </div>
        </div>
        <p class="slider__description">Ты знаешь о Космическом законе – представь себе то, что ты хочешь, и оно
          войдет в твою жизнь.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "info"
}
</script>

<style scoped>

</style>