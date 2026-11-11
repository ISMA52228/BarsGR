<template>
  <header class="topbar">
    <RouterLink class="brand" to="/">
      <span class="brand-mark">B</span>
      BarsGR
    </RouterLink>

    <nav aria-label="Основная навигация">
      <RouterLink to="/" class="nav-link">Список заявок</RouterLink>
      <RouterLink to="/new" class="nav-link">Создать заявку</RouterLink>
      <RouterLink to="/login" class="nav-link">Вход</RouterLink>
    </nav>
  </header>
</template>
