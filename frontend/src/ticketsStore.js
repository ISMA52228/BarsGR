import { ref } from 'vue'

export const applications = ref([
  {
    id: 1,
    number: 'CR-2026-001',
    title: 'Заявка на потребительский кредит',
    creditProductId: 1,
    description: 'Анализ заявки на потребительский кредит',
    status: 'New'
  },
  {
    id: 2,
    number: 'CR-2026-002',
    title: 'Заявка на автокредит',
    creditProductId: 2,
    description: 'Анализ заявки на автокредит',
    status: 'InProgress'
  }
])

export const statusLabels = {
  New: 'Новая',
  InProgress: 'На анализе',
  Closed: 'Завершена',
  Cancelled: 'Отменена'
}

export function addApplication(data) {
  const id = Math.max(0, ...applications.value.map(item => item.id)) + 1

  applications.value.push({
    id,
    number: `CR-2026-${String(id).padStart(3, '0')}`,
    title: data.title,
    creditProductId: Number(data.creditProductId),
    description: data.description,
    status: 'New'
  })
}
