# Матрица требований

| Требование ЛР1 | Поле или сущность | API-запрос | Критерий |
|---|---|---|---:|
| Создать заявку на анализ кредитного риска | CreditRiskRequest, title, riskTypeId, description | POST /api/credit-risk-requests | 1 |
| Назначить сотрудника ответственным за анализ | assigneeUserId | PATCH /api/credit-risk-requests/{id}/assignee | 2 |
| Перевести заявку в работу | status | PATCH /api/credit-risk-requests/{id}/status | 3 |
