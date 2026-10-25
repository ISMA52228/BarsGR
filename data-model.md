# Модель данных

## Словарь проекта

| Термин | Термин проекта |
|---|---|
| Ticket | CreditRiskRequest |
| Site | RiskType |
| User | User |

## ER-модель

```mermaid
erDiagram

    RISK_TYPE ||--o{ CREDIT_RISK_REQUEST : "имеет"

    USER ||--o{ CREDIT_RISK_REQUEST : "создаёт"

    USER ||--o{ CREDIT_RISK_REQUEST : "исполняет"

    RISK_TYPE {
        int id PK
        string name
    }

    USER {
        int id PK
        string name
        string login
    }

    CREDIT_RISK_REQUEST {
        int id PK
        string number
        string title
        string description
        string status
        int riskTypeId FK
        int createdByUserId FK
        int assigneeUserId FK
    }
