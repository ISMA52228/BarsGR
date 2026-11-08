# Матрица требований

| Требование ЛР1 | Поле или сущность | API-запрос | Критерий |
|---|---|---|---:|
| Создать кредитную заявку | CreditRiskRequest, `title`, `creditProductId`, `description` | POST /api/v1/credit-risk-requests | 1 |
| Назначить аналитика ответственным | `assigneeId` | PATCH /api/v1/credit-risk-requests/{id}/assignee | 2 |
| Перевести заявку в работу | `status` | PATCH /api/v1/credit-risk-requests/{id}/status | 3 |
