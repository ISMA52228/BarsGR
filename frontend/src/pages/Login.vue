<template>
  <main class="content login-content">
    <section class="panel login-panel">
      <span class="brand-mark login-mark">B</span>
      <p class="eyebrow">ЛИЧНЫЙ КАБИНЕТ</p>
      <h1>Вход в систему</h1>
      <p class="description">Введите учётные данные сотрудника.</p>

      <form @submit.prevent>
        <div class="field">
          <label for="login">Логин</label>
          <input
            id="login"
            name="login"
            type="text"
            autocomplete="username"
            placeholder="Введите логин"
            required
          />
        </div>
        <div class="field">
          <label for="password">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            placeholder="Введите пароль"
            required
          />
        </div>
        <button class="primary full" type="submit">Войти</button>
      </form>

      <p class="note">Авторизация будет подключена вместе с серверной частью.</p>
    </section>
  </main>
</template>
