# 📝 PuroNotes - Personal Notes App

A beautiful, cross-platform notes application built with React Native and Expo that allows you to create, organize, and manage your personal notes seamlessly across iOS, Android, and Web.

![PuroNotes Badge](https://img.shields.io/badge/PuroNotes-1.0.0-green) ![React Native Badge](https://img.shields.io/badge/React%2520Native-0.72-blue) ![Expo Badge](https://img.shields.io/badge/Expo-49.0-lightgrey) ![Platform Badge](https://img.shields.io/badge/platform-iOS%2520%257C%2520Android%2520%257C%2520Web-orange)

## ✨ Features

### 🎯 Core Functionality

- **Create Notes** - Add new notes with titles and content
- **Read Notes** - View all notes in a beautiful card layout
- **Update Notes** - Edit existing notes with ease
- **Delete Notes** - Remove notes with confirmation dialog
- **Search** - Real-time filtering of notes by title or content
- **Auto-save** - Notes are automatically saved to local storage

### 🎨 User Experience

- **Modern UI** - Clean, minimalist design with soft shadows and rounded corners
- **Cross-Platform** - Works on iOS, Android, and Web
- **Responsive Design** - Adapts to different screen sizes
- **Floating Action Button** - Quick access to create new notes
- **Toast Notifications** - Visual feedback for all actions
- **Empty States** - Helpful messages when no notes exist
- **Pull to Refresh** - Refresh your notes list

### 🔧 Technical Features

- **Offline Storage** - Uses AsyncStorage for data persistence
- **State Management** - Efficient state handling with Zustand
- **Navigation** - Smooth navigation with React Navigation Stack
- **Real-time Search** - Instant filtering as you type
- **Character Counters** - Track input lengths
- **Keyboard Handling** - Optimized for mobile keyboards

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Studio (for Android) - optional

### Installation

Clone and setup the project:

```bash
# Create new Expo project
expo init PuroNotes
cd PuroNotes

# Install dependencies
npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context
npm install async-storage @react-native-async-storage/async-storage
npm install react-native-toast-message
npm install zustand

# For Expo managed workflow
npx expo install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context
npx expo install @react-native-async-storage/async-storage
```

Replace the generated files with the provided code structure.

Start the development server:

```bash
npm start
# or
expo start
```

### Running the App

#### 📱 Mobile Devices

- Install Expo Go app from App Store (iOS) or Play Store (Android)
- Scan the QR code shown in terminal or Expo Dev Tools
- The app will load in Expo Go

#### 💻 Web

- Press `w` in the terminal after starting the development server
- The app will open in your default browser

#### 🖥️ Simulators/Emulators

- iOS Simulator: Press `i` in terminal
- Android Emulator: Press `a` in terminal (ensure emulator is running)

## 🏗️ Project Structure

```text
PuroNotes/
├── App.js                 # Main app component with navigation
├── app.json              # Expo configuration
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js              # Main notes list screen
│   │   └── AddOrEditNoteScreen.js     # Create/edit note screen
│   ├── store/
│   │   └── useNotesStore.js           # Zustand state management
│   ├── utils/
│   │   └── storage.js                 # AsyncStorage utilities
│   └── components/
│       └── NoteCard.js                # Reusable note card component
```

## 🎯 Usage Guide

### Creating a Note

1. Tap the green floating action button (+) on the home screen
2. Enter a title and content for your note
3. Tap "Save" or the checkmark in the header
4. Your note will appear in the main list

### Editing a Note

1. Tap the blue edit button on any note card
2. Modify the title or content
3. Save your changes

### Deleting a Note

1. Tap the red delete button on any note card
2. Confirm deletion in the dialog
3. The note will be permanently removed

### Searching Notes

1. Use the search bar at the top of the home screen
2. Type any keyword to filter notes in real-time
3. Clear the search to see all notes again

## 🔧 Technical Details

### State Management

The app uses Zustand for state management, providing a simple and efficient way to handle:

- Notes data
- Search functionality
- Loading states
- CRUD operations

### Data Persistence

AsyncStorage is used for local data persistence, ensuring:

- Notes survive app restarts
- Offline functionality
- Fast data access

### Navigation

React Navigation Stack provides:

- Smooth screen transitions
- Modal presentation for note editing
- Parameter passing between screens

### UI Components

- Custom Note Cards with shadow effects and rounded corners
- Floating Action Button for quick note creation
- Search Bar with real-time filtering
- Toast Notifications for user feedback

## 🛠️ Built With

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform for React Native
- **React Navigation** - Routing and navigation
- **Zustand** - State management
- **AsyncStorage** - Data persistence
- **React Native Toast Message** - Notifications

## 📱 Screens

### Home Screen

- Displays all notes in a scrollable list
- Search bar for filtering notes
- Note cards showing title, content excerpt, and date
- Edit and delete actions for each note
- Floating action button for adding new notes

### Add/Edit Note Screen

- Clean form for note creation and editing
- Character counters for title and content
- Auto-save functionality
- Modal presentation style

## 🔮 Future Enhancements

- [ ] Note categories/tags
- [ ] Color coding for notes
- [ ] Rich text formatting
- [ ] Image attachments
- [ ] Cloud synchronization
- [ ] Note sharing
- [ ] Dark mode
- [ ] Biometric authentication
- [ ] Backup and export functionality

## 🐛 Troubleshooting

### Common Issues

- **App won't start**
  - Ensure all dependencies are installed
  - Clear Expo cache: `expo start -c`

- **Notes not saving**
  - Check storage permissions on Android
  - Verify AsyncStorage is properly configured

- **Navigation errors**
  - Ensure React Navigation dependencies are correctly installed
  - Check screen component registrations

### Getting Help

- Check Expo documentation
- Refer to React Native docs
- Search Stack Overflow

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please open an issue in the repository.

---
Made with ❤️ using React Native and Expo
