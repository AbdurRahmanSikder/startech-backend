startech-backend/
├── src/
│ ├── server.ts
│ ├── app.ts
│ │
│ ├── shared/ # Shared Kernel
│ │ ├── domain/
│ │ │ ├── BaseEntity.ts
│ │ │ ├── ValueObject.ts
│ │ │ └── DomainEvent.ts
│ │ │
│ │ ├── application/
│ │ │ ├── UseCase.ts
│ │ │ └── Result.ts
│ │ │
│ │ ├── infrastructure/
│ │ │ ├── Database.ts
│ │ │ ├── Redis.ts
│ │ │ ├── Logger.ts
│ │ │ ├── EventBus.ts
│ │ │ └── Email.ts
│ │ │
│ │ └── exceptions/
│ │ └── AppExceptions.ts
│ │
│ │
│ ├── modules/ # Bounded Contexts
│ │ │
│ │ ├── users/ # USER CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── User.entity.ts # Entity + Business Logic
│ │ │ │ ├── User.repository.ts # Interface only
│ │ │ │ ├── User.events.ts # Domain Events
│ │ │ │ └── User.service.ts # Domain Service
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── User.usecases.ts # All use cases
│ │ │ │ ├── User.dto.ts # DTOs
│ │ │ │ ├── User.mapper.ts # Mappers
│ │ │ │ └── User.validator.ts # Validators
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── User.schema.ts # MongoDB Schema
│ │ │ │ ├── User.repository.impl.ts # Repository Implementation
│ │ │ │ └── User.eventHandlers.ts # Event Handlers
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── User.controller.ts # HTTP Controller
│ │ │ ├── User.routes.ts # Routes
│ │ │ └── User.middleware.ts # Middleware
│ │ │
│ │ │
│ │ ├── sellers/ # SELLER CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Seller.entity.ts
│ │ │ │ ├── Seller.repository.ts
│ │ │ │ ├── Seller.events.ts
│ │ │ │ └── Seller.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Seller.usecases.ts
│ │ │ │ ├── Seller.dto.ts
│ │ │ │ ├── Seller.mapper.ts
│ │ │ │ └── Seller.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Seller.schema.ts
│ │ │ │ ├── Seller.repository.impl.ts
│ │ │ │ └── Seller.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Seller.controller.ts
│ │ │ ├── Seller.routes.ts
│ │ │ └── Seller.middleware.ts
│ │ │
│ │ │
│ │ ├── products/ # PRODUCT CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Product.entity.ts
│ │ │ │ ├── Product.repository.ts
│ │ │ │ ├── Product.events.ts
│ │ │ │ └── Product.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Product.usecases.ts
│ │ │ │ ├── Product.dto.ts
│ │ │ │ ├── Product.mapper.ts
│ │ │ │ └── Product.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Product.schema.ts
│ │ │ │ ├── Product.repository.impl.ts
│ │ │ │ └── Product.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Product.controller.ts
│ │ │ ├── Product.routes.ts
│ │ │ └── Product.middleware.ts
│ │ │
│ │ │
│ │ ├── orders/ # ORDER CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Order.entity.ts
│ │ │ │ ├── Order.repository.ts
│ │ │ │ ├── Order.events.ts
│ │ │ │ └── Order.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Order.usecases.ts
│ │ │ │ ├── Order.dto.ts
│ │ │ │ ├── Order.mapper.ts
│ │ │ │ └── Order.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Order.schema.ts
│ │ │ │ ├── Order.repository.impl.ts
│ │ │ │ └── Order.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Order.controller.ts
│ │ │ ├── Order.routes.ts
│ │ │ └── Order.middleware.ts
│ │ │
│ │ │
│ │ ├── reviews/ # REVIEW CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Review.entity.ts
│ │ │ │ ├── Review.repository.ts
│ │ │ │ ├── Review.events.ts
│ │ │ │ └── Review.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Review.usecases.ts
│ │ │ │ ├── Review.dto.ts
│ │ │ │ ├── Review.mapper.ts
│ │ │ │ └── Review.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Review.schema.ts
│ │ │ │ ├── Review.repository.impl.ts
│ │ │ │ └── Review.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Review.controller.ts
│ │ │ ├── Review.routes.ts
│ │ │ └── Review.middleware.ts
│ │ │
│ │ │
│ │ ├── payments/ # PAYMENT CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Payment.entity.ts
│ │ │ │ ├── Payment.repository.ts
│ │ │ │ ├── Payment.events.ts
│ │ │ │ └── Payment.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Payment.usecases.ts
│ │ │ │ ├── Payment.dto.ts
│ │ │ │ ├── Payment.mapper.ts
│ │ │ │ └── Payment.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Payment.schema.ts
│ │ │ │ ├── Payment.repository.impl.ts
│ │ │ │ └── Payment.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Payment.controller.ts
│ │ │ ├── Payment.routes.ts
│ │ │ └── Payment.middleware.ts
│ │ │
│ │ │
│ │ ├── support/ # SUPPORT CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Ticket.entity.ts
│ │ │ │ ├── Ticket.repository.ts
│ │ │ │ ├── Ticket.events.ts
│ │ │ │ └── Ticket.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Ticket.usecases.ts
│ │ │ │ ├── Ticket.dto.ts
│ │ │ │ ├── Ticket.mapper.ts
│ │ │ │ └── Ticket.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Ticket.schema.ts
│ │ │ │ ├── Ticket.repository.impl.ts
│ │ │ │ └── Ticket.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Ticket.controller.ts
│ │ │ ├── Ticket.routes.ts
│ │ │ └── Ticket.middleware.ts
│ │ │
│ │ │
│ │ ├── disputes/ # DISPUTE CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Dispute.entity.ts
│ │ │ │ ├── Dispute.repository.ts
│ │ │ │ ├── Dispute.events.ts
│ │ │ │ └── Dispute.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Dispute.usecases.ts
│ │ │ │ ├── Dispute.dto.ts
│ │ │ │ ├── Dispute.mapper.ts
│ │ │ │ └── Dispute.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Dispute.schema.ts
│ │ │ │ ├── Dispute.repository.impl.ts
│ │ │ │ └── Dispute.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Dispute.controller.ts
│ │ │ ├── Dispute.routes.ts
│ │ │ └── Dispute.middleware.ts
│ │ │
│ │ │
│ │ ├── notifications/ # NOTIFICATION CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Notification.entity.ts
│ │ │ │ ├── Notification.repository.ts
│ │ │ │ ├── Notification.events.ts
│ │ │ │ └── Notification.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Notification.usecases.ts
│ │ │ │ ├── Notification.dto.ts
│ │ │ │ ├── Notification.mapper.ts
│ │ │ │ └── Notification.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Notification.schema.ts
│ │ │ │ ├── Notification.repository.impl.ts
│ │ │ │ └── Notification.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Notification.controller.ts
│ │ │ ├── Notification.routes.ts
│ │ │ └── Notification.middleware.ts
│ │ │
│ │ │
│ │ ├── analytics/ # ANALYTICS CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Analytics.entity.ts
│ │ │ │ ├── Analytics.repository.ts
│ │ │ │ ├── Analytics.events.ts
│ │ │ │ └── Analytics.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Analytics.usecases.ts
│ │ │ │ ├── Analytics.dto.ts
│ │ │ │ ├── Analytics.mapper.ts
│ │ │ │ └── Analytics.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Analytics.schema.ts
│ │ │ │ ├── Analytics.repository.impl.ts
│ │ │ │ └── Analytics.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Analytics.controller.ts
│ │ │ ├── Analytics.routes.ts
│ │ │ └── Analytics.middleware.ts
│ │ │
│ │ │
│ │ ├── auth/ # AUTH CONTEXT
│ │ │ ├── domain/
│ │ │ │ ├── Auth.entity.ts
│ │ │ │ ├── Auth.repository.ts
│ │ │ │ ├── Auth.events.ts
│ │ │ │ └── Auth.service.ts
│ │ │ │
│ │ │ ├── application/
│ │ │ │ ├── Auth.usecases.ts
│ │ │ │ ├── Auth.dto.ts
│ │ │ │ ├── Auth.mapper.ts
│ │ │ │ └── Auth.validator.ts
│ │ │ │
│ │ │ ├── infrastructure/
│ │ │ │ ├── Auth.schema.ts
│ │ │ │ ├── Auth.repository.impl.ts
│ │ │ │ └── Auth.eventHandlers.ts
│ │ │ │
│ │ │ └── presentation/
│ │ │ ├── Auth.controller.ts
│ │ │ ├── Auth.routes.ts
│ │ │ └── Auth.middleware.ts
│ │ │
│ │ │
│ │ └── admin/ # ADMIN CONTEXT
│ │ ├── domain/
│ │ │ ├── Admin.entity.ts
│ │ │ ├── Admin.repository.ts
│ │ │ ├── Admin.events.ts
│ │ │ └── Admin.service.ts
│ │ │
│ │ ├── application/
│ │ │ ├── Admin.usecases.ts
│ │ │ ├── Admin.dto.ts
│ │ │ ├── Admin.mapper.ts
│ │ │ └── Admin.validator.ts
│ │ │
│ │ ├── infrastructure/
│ │ │ ├── Admin.schema.ts
│ │ │ ├── Admin.repository.impl.ts
│ │ │ └── Admin.eventHandlers.ts
│ │ │
│ │ └── presentation/
│ │ ├── Admin.controller.ts
│ │ ├── Admin.routes.ts
│ │ └── Admin.middleware.ts
│ │
│ │
│ └── config/
│ ├── app.config.ts
│ ├── database.config.ts
│ └── index.ts
│
│
├── tests/
│ ├── unit/
│ ├── integration/
│ └── e2e/
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
