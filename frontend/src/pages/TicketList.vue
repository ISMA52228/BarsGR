<script setup>
import { RouterLink } from 'vue-router'
import TicketTable from '../components/TicketTable.vue'
import { applications } from '../ticketsStore'
</script>

<template>
  <main class="content">
    <div class="page-heading">
      <div>
        <p class="eyebrow">УПРАВЛЕНИЕ КРЕДИТНЫМ ПОРТФЕЛЕМ</p>
        <h1>Кредитные заявки</h1>
        <p class="description">Список заявок, переданных на анализ кредитного риска.</p>
      </div>
      <RouterLink class="primary button-link" to="/new">+ Создать заявку</RouterLink>
    </div>

    <section class="panel" aria-labelledby="list-title">
      <div class="panel-heading">
        <h2 id="list-title">Все заявки</h2>
        <span class="muted">{{ applications.length }} записи</span>
      </div>
      <TicketTable :items="applications" />
    </section>

    <p class="note">Демонстрационные данные хранятся в памяти браузера и сбрасываются после перезагрузки страницы.</p>
  </main>
</template>
