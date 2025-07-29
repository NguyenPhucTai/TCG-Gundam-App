# TCG Gundam App

Landscape-oriented board game tracker app built with React Native, Expo, and TypeScript.

## 🚀 Features

- Turn counter with increment/decrement controls
- Per-player Resource and Ex Resource counters
- Level display component
- Reset, Revert, and Show Log buttons (UI only)
- Pastel, modern UI with full-area press ripple effects
  
## � Theme

- Soft pastel palette
- Clear typography and spacing

## 🛠️ Tech Stack

- React Native 0.79.5
- Expo Router 5.1.4
- TypeScript (strict mode)
- Jest (planned)
- ESLint and Prettier

## 📋 Requirements

- Node.js 14+ or 16+ LTS
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/NguyenPhucTai/TCG-Gundam-App.git
cd TCG-Gundam-App
```
2. Install dependencies:
```bash
npm install
# or yarn
```
3. Run the app:
```bash
npm start
# or yarn start
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy ứng dụng:
```bash
npm start
```

## 📱 Usage

- Tap “+” / “-” on counters to adjust Resource and Ex Resource
- Use the Turn counter on the left to track game turns
- Press Reset to clear values; Revert and Show Log are UI placeholders

Chạy tests với coverage:
```bash
npm run test:coverage
```

Chạy tests trong watch mode:
```bash
npm run test:watch
```

## 📁 Project Structure

```
TCG-Gundam-App/
├── app/                  # Root layout and entry point
├── components/           # Reusable UI components
├── models/               # TypeScript interfaces
├── assets/               # Static assets (icons, images)
├── README.md             # Project documentation
└── package.json          # Dependencies and scripts
```

## 🧪 Test Coverage

- **69 tests** passing
- **6 snapshots** maintained
- **98%+ code coverage**

### Components tested:
- ✅ App component
- ✅ Button component
- ✅ HabitCard component

### Utils tested:
- ✅ Date utilities (formatDate, isSameDay, etc.)
- ✅ Habit utilities (validation, streak calculation, etc.)

## 📱 Scripts

- `npm start` - Khởi chạy Expo development server
- `npm run android` - Chạy trên Android emulator
- `npm run ios` - Chạy trên iOS simulator
- `npm run web` - Chạy trên web browser
- `npm test` - Chạy tất cả tests
- `npm run test:watch` - Chạy tests trong watch mode
- `npm run test:coverage` - Chạy tests với coverage report
- `npm run test:ci` - Chạy tests cho CI environment

## 🛣️ Roadmap

- [ ] History log functionality
- [ ] Revert action support
- [ ] Data persistence (AsyncStorage)
- [ ] Dark mode
- [ ] Additional game stats and charts

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch `git checkout -b feature/your-feature`
3. Commit your changes `git commit -m "Add your feature"`
4. Push to your branch `git push origin feature/your-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See `LICENSE` for details.

## 👨‍💻 Tác giả

**Nguyen Phuc Tai** - [GitHub](https://github.com/NguyenPhucTai)

---

⭐ Hãy star repository này nếu bạn thấy hữu ích!
