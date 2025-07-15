# Trip Planner App (React Native CLI)

Thank you for reviewing my submission for the **React Native Developer** position assessment.

This project is a simple and modular trip planning app built using **React Native CLI** (not Expo). It showcases simulated login, trip creation, trip listing, and user settings using modern React Native tools and practices.

## Design Notes

The Figma file did not specify exact spacing (gap) values. I used Figma's measurement tools to manually match spacing and layout as closely as possible.

## Demo User

Authentication is simulated. You may log in with any credentials, but here's a sample for consistency:

- **Email:** `shakil@gmail.com`
- **Password:** `123456`

## Prerequisites

- Node.js (v16 or higher)
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS dependencies)

## Installation & Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Link Custom Fonts

```bash
npx react-native-asset
```

### Step 3: iOS Setup

```bash
cd ios
pod install
cd ..
```

### Step 4: Build and Run

#### For iOS:

```bash
# Method 1: Using npm
npm run ios

# Method 2: Using React Native CLI
npx react-native run-ios

# Method 3: Using Yarn
yarn ios
```

#### For Android:

```bash
# Method 1: Using npm
npm run android

# Method 2: Using React Native CLI
npx react-native run-android

# Method 3: Using Yarn
yarn android
```

### Step 5: Start Metro (if not started automatically)

```bash
npx react-native start
```

## Troubleshooting

### Common iOS Issues

#### 1. xcode.env Error

**Error:** `Error running iOS. Please ensure your xcode.env file is correctly set up.`

**Solution:**

```bash
# Create xcode.env file in ios/ directory
cd ios
echo 'export NODE_BINARY=$(command -v node)' > .xcode.env
cd ..
```

#### 2. Build Folder Issues

**Solution:**

```bash
# Clean build folder
rm -rf ios/build
rm -rf ~/Library/Developer/Xcode/DerivedData

# Reinstall pods
cd ios
pod deintegrate
pod install
cd ..
```

#### 3. Pod Installation Issues

**Solution:**

```bash
cd ios
pod deintegrate
pod cache clean --all
pod install
cd ..
```

### Common Android Issues

#### 1. Gradle Build Issues

**Solution:**

```bash
cd android
./gradlew clean
cd ..
```

#### 2. Metro Cache Issues

**Solution:**

```bash
npx react-native start --reset-cache
```

### Universal Issues

#### 1. App Stuck/Not Loading/Changes Not Reflecting

**Solution:**

```bash
# Reset Metro cache
npx react-native start --reset-cache

# Clean everything and reinstall
rm -rf node_modules
npm install
cd ios && pod install && cd ..
```

#### 2. Font Not Loading

**Solution:**

```bash
# Re-link fonts
npx react-native-asset

# Clean and rebuild
npx react-native start --reset-cache
```

#### 3. Complete Clean Installation

**If all else fails:**

```bash
# Clean everything
rm -rf node_modules
rm -rf ios/build
rm -rf ios/Pods
rm -rf android/build
rm -rf android/app/build
rm -rf ~/Library/Developer/Xcode/DerivedData

# Reinstall everything
npm install
npx react-native-asset
cd ios && pod install && cd ..

# Start fresh
npx react-native start --reset-cache
```

## Running the App

1. **Start Metro:** `npx react-native start`
2. **Run iOS:** `npx react-native run-ios`
3. **Run Android:** `npx react-native run-android`

## Tech Stack

- React Native CLI
- Redux Toolkit
- React Navigation
- React Native Vector Icons
- Custom Fonts
- AsyncStorage

## Features

- Simulated Authentication
- Trip Creation & Management
- Trip Listing
- User Settings
- State Management with Redux
