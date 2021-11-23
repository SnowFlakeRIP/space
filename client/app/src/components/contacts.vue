<template>
  <section class="contacts">
    <div class="container">
      <div class="contact__inner">
        <div class="contact__box">
          <h2 class="title contacts__title">Контакты</h2>
          <p class="contact__box-text">Оставь свои контакты и мы перезвоним тебе в ближайшие 100 лет!</p>
          <form class="contacts__form">
            <input class="contacts__form-input surname" placeholder="Фамилия" type="text">
            <input class="contacts__form-input name" placeholder="Имя" type="text">
            <input class="contacts__form-input secondName" placeholder="Отчество" type="text">

            <input class="contacts__form-input number" placeholder="Количество билетов" min="1" type="number">
            <select class="form-select contacts__form-input company" aria-label="Default select example">
              <option selected>Выберите компанию</option>
              <option value="Virgin Galactic">Virgin Galactic</option>
              <option value="Blue Origin">Blue Origin</option>
              <option value="SpaceX">SpaceX</option>
            </select>
            <label>
              Услуги фотографа
              <input class="check-photo" value="false"  type="checkbox">
            </label>
            <label>
              Диск
              <input class="check-disk" value="false" type="checkbox">
            </label>
            <button class="button contacts__btn go" type="submit">Забронировать полет</button>

          </form>
        </div>
        <div class="contact__garant">
          <h2 class="title contacts__title">Гарантии</h2>
          <p class="contact__garant-text">
            Ни одна моя ракета еще не сделала удачную попытку, потому что в ней не было тебя!
            Будь первым! Колонизируй Марс!
            Илон Маск
          </p>
          <img class="contact__garant--img" src="../assets/images/ilon.png" alt="1">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contacts"
}
</script>

<style scoped>

</style>