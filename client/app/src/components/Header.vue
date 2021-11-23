<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__top">
          <nav class="menu">
            <button class="menu__btn">
              <span></span>
            </button>
            <ul class="menu__list">
              <li class="menu__item">
                <a class="menu__link" href="#!">
                  О нас
                </a>
              </li>
              <li class="menu__item">
                <a class="menu__link" href="#!">
                  Стоимость
                </a>
              </li>
              <li class="menu__item">
                <a class="menu__link" href="#!">
                  Доп. Услуги
                </a>
              </li>
              <li class="menu__item">
                <a class="menu__link" href="#!">
                  Гарантии
                </a>
              </li>
              <li class="menu__item">
                <a class="menu__link" href="#!">
                  Новости
                </a>
              </li>
            </ul>
          </nav>
          <a class="phone" href="tel:0 800 000 000 00">0 800 000 000 00</a>
          <button class="login">
            <img src="../assets/images/icons/login__btn.png" alt="1" class="login__img">
          </button>
        </div>
        <div class="header__content">
          <h1 class="header__title">
            космический
            <span>туризм</span>
          </h1>
          <div class="header__text">
            <p>Будущее уже наступило!</p>
            <p>Осуществите мечту детства!</p>
          </div>
          <button class="header__btn">Хочу быть космонавтом!</button>
        </div>
        <div class="header__description">
          <p class="header__description-text">В 2021 году наступила новая эра в освоении космоса - эра
            космического туризма. Частные компании получили доступ к космическому пространству. </p>
          <p class="header__description-text">Между ними обострилась конкуренция, а цена билета на полеты в
            космическое пространство снизилась в сто раз.</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>