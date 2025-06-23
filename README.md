# 📬 NotifApp

A demo app built with **React Native** showcasing an animated notification system, complete with navigation, in-memory persistence, and **100% test coverage**.

## 🧩 Main Technologies

- **React Native**
- **TypeScript**
- **Zustand** for notification state management
- **React Navigation**
- **React Native Reanimated** for animations
- **Jest + Testing Library** for unit testing
- **Husky** for Git hooks
- **100% test coverage** guaranteed

---

## 🔍 Features

- Inbox-style notification list
- Notifications with icon and color based on type: Info, Success, Error, Warning, System
- Mark notifications as read
- Navigation to detail screen (placeholder)
- Animated badge on header when unread notifications exist
- Button to generate mock notifications
- Responsive and clean UI
- Smooth animations on notification entry and badge updates

---

## 🧪 Testing

Every component, utility, and store is covered with unit tests.

```bash
yarn test --coverage
```

- 100% **line**, **branch**, and **function** coverage
- **Pre-commit hook** via Husky blocks commits if tests fail

---

## 🚀 Available Scripts

```bash
yarn start           # Start Metro dev server
yarn test            # Run unit tests
yarn test --coverage # Run tests with coverage report
```

---

## 📁 Project Structure

```
NotifApp/
├── components/        # Reusable UI components
├── screens/           # Main views (e.g. Inbox)
├── store/             # Zustand state management
├── utils/             # Utilities
├── models/            # Types and enums
├── __tests__/         # Unit tests
└── App.tsx            # Entry point
```

---

## 🧠 Purpose & Learnings

This project was built as a technical challenge to master:

- React Native testing with full coverage
- UI animations with Reanimated
- Global state management with Zustand
- Quality tooling (Husky, test thresholds, CI compatibility)

---

## ⚙️ Requirements

To run the app locally, make sure you have:

- Node.js >= 18
- Yarn >= 1.22
- React Native CLI >= 0.80
- iOS/Android environment set up via [React Native docs](https://reactnative.dev/docs/environment-setup)

---

## ▶️ Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/NotifApp.git
cd NotifApp
yarn install
```

Then run the app:

```bash
npx react-native run-ios      # for iOS
npx react-native run-android  # for Android
```

---

## 👤 Author

**Salvador Bolaños**  
React Native Developer focused on code quality, UI design, and product thinking.
