startech-backend/
├── .husky/
├── docs/
├── node_modules/
├── public/
├── scripts/
│
├── src/
│   ├── configs/
│   │   ├── database.config.ts      # DB2 connection
│   │   ├── clientDB.config.ts      # DB1 connection (read-only)
│   │   ├── redis.config.ts
│   │   ├── email.config.ts
│   │   └── index.ts
│   │
│   ├── constants/
│   │   ├── roles.constant.ts       # ADMIN, SUPPORT only
│   │   ├── permissions.constant.ts
│   │   ├── ticketStatus.constant.ts
│   │   ├── disputeStatus.constant.ts
│   │   ├── moderationStatus.constant.ts
│   │   └── index.ts
│   │
│   ├── controllers/
│   │   ├── auth/
│   │   │   ├── admin.auth.controller.ts
│   │   │   └── support.auth.controller.ts
│   │   │
│   │   ├── admin/
│   │   │   ├── dashboard.controller.ts
│   │   │   ├── userManagement.controller.ts      # Manage buyers/sellers
│   │   │   ├── sellerManagement.controller.ts    # Verify/suspend sellers
│   │   │   ├── productModeration.controller.ts   # Approve/reject products
│   │   │   ├── orderManagement.controller.ts     # View all orders
│   │   │   ├── reviewModeration.controller.ts    # Moderate reviews
│   │   │   ├── commission.controller.ts          # Set commission rates
│   │   │   ├── analytics.controller.ts           # Platform analytics
│   │   │   ├── payout.controller.ts              # Approve payouts
│   │   │   └── settings.controller.ts            # System settings
│   │   │
│   │   ├── support/
│   │   │   ├── dashboard.controller.ts
│   │   │   ├── ticket.controller.ts              # Support tickets
│   │   │   ├── dispute.controller.ts             # Order disputes
│   │   │   ├── user.controller.ts                # View user info
│   │   │   ├── order.controller.ts               # View orders
│   │   │   └── refund.controller.ts              # Process refunds
│   │   │
│   │   └── common/
│   │       ├── notification.controller.ts
│   │       └── report.controller.ts
│   │
│   ├── database/
│   │   ├── connection.ts           # DB2 connection (admin data)
│   │   ├── clientConnection.ts     # DB1 connection (read client data)
│   │   └── seeder.ts
│   │
│   ├── events/
│   │   ├── admin.events.ts
│   │   ├── moderation.events.ts
│   │   ├── ticket.events.ts
│   │   └── notification.events.ts
│   │
│   ├── exceptions/
│   │   ├── HttpException.ts
│   │   ├── ForbiddenException.ts
│   │   ├── UnauthorizedException.ts
│   │   └── NotFoundException.ts
│   │
│   ├── helpers/
│   │   ├── asyncHandler.ts
│   │   ├── apiResponse.ts
│   │   ├── apiError.ts
│   │   ├── auditLog.ts
│   │   └── permission.helper.ts
│   │
│   ├── jobs/
│   │   ├── email.job.ts
│   │   ├── notification.job.ts
│   │   ├── analytics.job.ts
│   │   ├── report.job.ts
│   │   └── cleanup.job.ts
│   │
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── adminRole.middleware.ts
│   │   ├── supportRole.middleware.ts
│   │   ├── permission.middleware.ts
│   │   ├── auditLog.middleware.ts
│   │   └── rateLimiter.middleware.ts
│   │
│   ├── models/                     # DB2 MODELS (Admin + Support Data)
│   │   ├── Admin.model.ts          # Admin users
│   │   ├── Support.model.ts        # Support users
│   │   ├── SupportTicket.model.ts  # Customer tickets
│   │   ├── TicketMessage.model.ts  # Ticket messages
│   │   ├── Dispute.model.ts        # Order disputes
│   │   ├── Moderation.model.ts     # Product/Review moderation queue
│   │   ├── AuditLog.model.ts       # Admin action logs
│   │   ├── Notification.model.ts   # System notifications
│   │   ├── Commission.model.ts     # Commission settings
│   │   ├── AnalyticsEvent.model.ts # Analytics tracking
│   │   ├── Report.model.ts         # Generated reports
│   │   ├── EmailQueue.model.ts     # Email queue
│   │   ├── SystemSettings.model.ts # Platform settings
│   │   └── index.ts
│   │
│   ├── routes/
│   │   ├── index.ts
│   │   ├── auth.routes.ts          # Admin & Support auth
│   │   │
│   │   ├── admin/
│   │   │   ├── dashboard.routes.ts
│   │   │   ├── user.routes.ts
│   │   │   ├── seller.routes.ts
│   │   │   ├── product.routes.ts
│   │   │   ├── order.routes.ts
│   │   │   ├── review.routes.ts
│   │   │   ├── commission.routes.ts
│   │   │   ├── analytics.routes.ts
│   │   │   ├── payout.routes.ts
│   │   │   └── settings.routes.ts
│   │   │
│   │   ├── support/
│   │   │   ├── dashboard.routes.ts
│   │   │   ├── ticket.routes.ts
│   │   │   ├── dispute.routes.ts
│   │   │   ├── user.routes.ts
│   │   │   └── refund.routes.ts
│   │   │
│   │   └── common/
│   │       ├── notification.routes.ts
│   │       └── report.routes.ts
│   │
│   ├── services/
│   │   ├── auth/
│   │   │   ├── admin.auth.service.ts
│   │   │   └── support.auth.service.ts
│   │   │
│   │   ├── admin/
│   │   │   ├── userManagement.service.ts
│   │   │   ├── sellerManagement.service.ts
│   │   │   ├── productModeration.service.ts
│   │   │   ├── orderManagement.service.ts
│   │   │   ├── reviewModeration.service.ts
│   │   │   ├── commission.service.ts
│   │   │   ├── analytics.service.ts
│   │   │   ├── payout.service.ts
│   │   │   └── settings.service.ts
│   │   │
│   │   ├── support/
│   │   │   ├── ticket.service.ts
│   │   │   ├── dispute.service.ts
│   │   │   ├── refund.service.ts
│   │   │   └── escalation.service.ts
│   │   │
│   │   └── common/
│   │       ├── notification.service.ts
│   │       ├── email.service.ts
│   │       ├── report.service.ts
│   │       └── auditLog.service.ts
│   │
│   ├── sockets/
│   │   ├── index.ts
│   │   ├── admin.socket.ts
│   │   └── support.socket.ts
│   │
│   ├── types/
│   │   ├── express.d.ts
│   │   ├── admin.types.ts
│   │   ├── support.types.ts
│   │   ├── ticket.types.ts
│   │   ├── moderation.types.ts
│   │   └── index.ts
│   │
│   ├── utils/
│   │   ├── jwt.util.ts
│   │   ├── bcrypt.util.ts
│   │   ├── logger.util.ts
│   │   ├── auditLog.util.ts
│   │   └── permission.util.ts
│   │
│   ├── validations/
│   │   ├── admin.validation.ts
│   │   ├── ticket.validation.ts
│   │   ├── dispute.validation.ts
│   │   └── moderation.validation.ts
│   │
│   ├── views/
│   │   ├── ticketCreated.pug
│   │   ├── disputeResolved.pug
│   │   └── adminNotification.pug
│   │
│   └── server.ts
│
├── tests/
├── .env
├── .env.example
├── .gitignore
├── .prettierrc.json
├── eslint.config.mjs
├── package.json
├── readme.md
└── tsconfig.json