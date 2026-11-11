<script setup>
import { statusLabels } from '../ticketsStore'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Тема заявки</th>
          <th>ID кредитного продукта</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="number">{{ item.number }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.creditProductId }}</td>
          <td>
            <span class="status" :class="'status-' + item.status.toLowerCase()">
              {{ statusLabels[item.status] }}
            </span>
          </td>
        </tr>
        <tr v-if="items.length === 0">
          <td colspan="4" class="empty-state">Заявок пока нет</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
