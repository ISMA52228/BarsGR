<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <RouterView />
    <footer>
      <span>BarsGR · Учебный проект</span>
      <span>АО «ТБанк» · 2026</span>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f4f6fa;
  color: #172033;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

button,
input,
textarea,
select {
  font: inherit;
}

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  min-height: 76px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: #fff;
  border-bottom: 1px solid #e7eaf0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: #172033;
  text-decoration: none;
  font-size: 19px;
  font-weight: 750;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 11px;
  color: #fff;
  background: #1769e0;
  font-weight: 800;
}

nav {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.nav-link {
  border-radius: 9px;
  padding: 10px 14px;
  color: #657086;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: #edf4ff;
  color: #1769e0;
}

.content {
  width: min(1120px, 86%);
  margin: 58px auto 48px;
  flex: 1;
}

.page-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 10px;
  color: #1769e0;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.1px;
}

h1 {
  margin: 0;
  color: #172033;
  font-size: clamp(27px, 4vw, 36px);
  line-height: 1.15;
  letter-spacing: -1px;
}

.description {
  margin: 11px 0 0;
  color: #758096;
  font-size: 14px;
  line-height: 1.6;
}

.panel {
  overflow: hidden;
  border: 1px solid #e7eaf0;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 8px 28px rgba(25, 43, 75, .035);
}

.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #edf0f4;
}

.panel-heading h2 {
  margin: 0;
  font-size: 16px;
}

.muted,
.note,
small {
  color: #8a94a7;
  font-size: 12px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;
}

th,
td {
  padding: 17px 24px;
  border-bottom: 1px solid #f0f2f6;
  white-space: nowrap;
}

th {
  background: #fbfcfe;
  color: #8993a5;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .45px;
  text-transform: uppercase;
}

tbody tr:last-child td {
  border-bottom: 0;
}

.number {
  color: #1769e0;
  font-weight: 700;
}

.status {
  display: inline-flex;
  border-radius: 20px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 650;
}

.status-new {
  background: #fff4df;
  color: #9b6500;
}

.status-inprogress {
  background: #eaf2ff;
  color: #245db4;
}

.status-closed {
  background: #e8f7ef;
  color: #21814d;
}

.status-cancelled {
  background: #f1f2f5;
  color: #697386;
}

.primary,
.secondary {
  min-height: 42px;
  border: 0;
  border-radius: 9px;
  padding: 0 17px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
}

.primary {
  background: #1769e0;
  color: #fff;
}

.primary:hover {
  background: #1058c2;
}

.secondary {
  border: 1px solid #e1e6ef;
  background: #fff;
  color: #536078;
}

.button-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.narrow {
  max-width: 760px;
}

.form-panel {
  padding: 28px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 21px;
}

.field label {
  color: #303b50;
  font-size: 13px;
  font-weight: 700;
}

.field input,
.field textarea,
.field select {
  width: 100%;
  min-height: 43px;
  border: 1px solid #dfe4ec;
  border-radius: 9px;
  outline: none;
  padding: 12px 13px;
  background: #fff;
  color: #172033;
  font-size: 14px;
}

.field input:focus,
.field textarea:focus,
.field select:focus {
  border-color: #1769e0;
  box-shadow: 0 0 0 3px rgba(23, 105, 224, .1);
}

.field textarea {
  resize: vertical;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 28px;
}

.note {
  margin: 18px 0 0;
  line-height: 1.55;
}

.empty-state {
  padding: 28px;
  color: #8a94a7;
  text-align: center;
}

.login-content {
  display: grid;
  place-items: center;
}

.login-panel {
  width: min(430px, 100%);
  padding: 34px;
  text-align: center;
}

.login-mark {
  width: 44px;
  height: 44px;
  margin-bottom: 23px;
  border-radius: 14px;
  font-size: 18px;
}

.login-panel h1 {
  font-size: 29px;
}

.login-panel .description {
  margin-bottom: 27px;
}

.login-panel form {
  text-align: left;
}

.full {
  width: 100%;
  margin-top: 5px;
}

footer {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 7%;
  border-top: 1px solid #e7eaf0;
  background: #fff;
  color: #9aa3b2;
  font-size: 11px;
}

@media (max-width: 700px) {
  .topbar {
    align-items: flex-start;
    flex-direction: column;
    padding: 18px 6%;
  }

  .content {
    width: 90%;
    margin-top: 35px;
  }

  .page-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .form-panel,
  .login-panel {
    padding: 22px;
  }

  th,
  td {
    padding: 14px 16px;
  }

  footer {
    padding: 18px 6%;
  }
}
</style>
