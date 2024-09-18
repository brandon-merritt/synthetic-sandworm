mental-health-journal-backend/
├── config/
│   ├── db.js                   # Database connection configuration
│   ├── cors.js                 # CORS configuration
│   ├── env.js                  # Environment variables setup (optional)
├── controllers/
│   ├── journalController.js    # Controller for handling journal-related logic
│   ├── userController.js       # Controller for user-related logic (registration, login, etc.)
│   ├── promptController.js     # Controller for handling prompts
│   ├── exerciseController.js   # Controller for handling mental exercises
├── models/
│   ├── Journal.js              # Mongoose model for journal entries
│   ├── User.js                 # Mongoose model for users
│   ├── Prompt.js               # Mongoose model for prompts
│   ├── Exercise.js             # Mongoose model for mental exercises
├── routes/
│   ├── journalRoutes.js        # Routes for journal entries
│   ├── userRoutes.js           # Routes for user management
│   ├── promptRoutes.js         # Routes for prompts
│   ├── exerciseRoutes.js       # Routes for mental exercises
├── middlewares/
│   ├── authMiddleware.js       # Middleware for authentication (e.g., JWT validation)
│   ├── errorMiddleware.js      # Middleware for error handling
├── utils/
│   ├── validateInput.js        # Utility functions for input validation
│   ├── logger.js               # Utility for logging (optional)
├── tests/
│   ├── journal.test.js         # Tests for journal-related endpoints
│   ├── user.test.js            # Tests for user-related endpoints
│   ├── prompt.test.js          # Tests for prompts endpoints
│   ├── exercise.test.js        # Tests for mental exercises endpoints
├── .env                        # Environment variables
├── .gitignore                   # Git ignore file
├── package.json                # Project dependencies and scripts
├── server.js                   # Main server file
└── README.md                   # Project documentation
