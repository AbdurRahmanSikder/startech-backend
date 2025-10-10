presentation/
├── User.routes.ts
│ ↓ routes POST /register → UserController.register
├── User.controller.ts
│ ↓ calls Application Layer use case
├── User.middleware.ts
↓ optional: input validation, auth, logging

application/
├── User.usecases.ts
│ ↓ orchestrates domain entities/services
├── User.dto.ts
│ ↑ shapes request/response data
├── User.mapper.ts
│ ↑ maps DTO ↔ Domain Entity
├── User.validator.ts
↑ validates incoming DTOs

domain/
├── User.entity.ts
│ ↑ contains core business rules (activate, changePassword)
├── User.repository.ts
│ ↓ interface only, implemented in infrastructure
├── User.events.ts
│ ↑ defines domain events (UserCreatedEvent)
├── User.service.ts
↑ domain-level logic across entities

infrastructure/
├── User.schema.ts
│ ↑ MongoDB schema for persistence
├── User.repository.impl.ts
│ ↓ implements repository interface
├── User.eventHandlers.ts
↑ listens to domain events and triggers side effects (emails, logs)

---

[Routes] → [Controller] → [Use Case] → [Domain Entity/Service] → [Repository Interface] → [Repository Implementation] → [Database]
↑
└─ emits events → [Event Handlers]
