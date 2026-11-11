<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { addApplication } from '../ticketsStore'

const router = useRouter()

const form = reactive({
  title: '',
  creditProductId: '1',
  description: ''
})

function submitForm() {
  addApplication(form)
  router.push('/')
}
</script>

<template>
  <main class="content narrow">
    <div class="page-heading">
      <div>
        <p class="eyebrow">НОВАЯ ЗАПИСЬ</p>
        <h1>Создание кредитной заявки</h1>
        <p class="description">Заполните основные сведения для передачи заявки на анализ.</p>
      </div>
    </div>

    <section class="panel form-panel">
      <form @submit.prevent="submitForm">
        <div class="field">
          <label for="title">Тема заявки</label>
          <input
            id="title"
            v-model.trim="form.title"
            name="title"
            type="text"
            minlength="5"
            maxlength="80"
            placeholder="Например, заявка на потребительский кредит"
            required
          />
          <small>От 5 до 80 символов</small>
        </div>

        <div class="field">
          <label for="creditProductId">Кредитный продукт</label>
          <select id="creditProductId" v-model="form.creditProductId" name="creditProductId" required>
            <option value="1">Потребительский кредит</option>
            <option value="2">Автокредит</option>
            <option value="3">Ипотечный кредит</option>
            <option value="4">Кредитная карта</option>
          </select>
        </div>

        <div class="field">
          <label for="description">Описание</label>
          <textarea
            id="description"
            v-model.trim="form.description"
            name="description"
            minlength="10"
            maxlength="500"
            rows="5"
            placeholder="Кратко опишите заявку"
            required
          ></textarea>
          <small>От 10 до 500 символов</small>
        </div>

        <div class="actions">
          <RouterLink class="secondary button-link" to="/">Назад</RouterLink>
          <button class="primary" type="submit">Создать заявку</button>
        </div>
      </form>
      <p class="note">Заявка добавляется в общий список. Данные пока не сохраняются на сервере.</p>
    </section>
  </main>
</template>
