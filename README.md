# Birdie Blog - Modern Blogging Platform

Birdie Blog is a modern, user-friendly blogging platform built with Angular and Material Design. It provides a seamless experience for creating, reading, and managing blog posts.

## Features

### Blog Management
- 📝 Create and edit blog posts with rich text content
- 🖼️ Upload cover images for your blog posts
- 📱 Responsive design for all devices
- 🎨 Modern Material Design UI

### Authentication
- 🔐 Secure user authentication
- 🔄 Automatic token refresh
- 👤 User profile management
- 🔒 Protected routes

### Comment System
- 💬 Interactive comment section
- 👤 User profile pictures in comments
- ⏰ Timestamp for each comment
- 🔄 Real-time comment updates
- 👥 Anonymous comment support
- 🎯 Comment moderation capabilities

### User Experience
- ⚡ Real-time loading states
- 🚨 Error handling with user feedback
- 🎯 Intuitive navigation
- 📱 Mobile-responsive design
- 🎨 Consistent Material Design theme

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v19 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blogging-app-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── auth/           # Authentication components
│   ├── blog/           # Blog-related components
│   ├── layout/         # Layout components (header, etc.)
│   ├── services/       # Application services
│   ├── shared/         # Shared components and utilities
│   └── constants/      # Application constants
```

## Key Components

### Authentication
- Login and signup functionality
- JWT-based authentication
- Protected routes
- Automatic token refresh

### Blog Management
- Create new blog posts
- Upload cover images
- View all blogs
- View individual blog posts
- Rich text content support

### Comment System
- Add comments to blog posts
- View all comments with user details
- Profile pictures in comments
- Timestamp display
- Real-time updates

### User Interface
- Material Design components
- Responsive layout
- Loading indicators
- Error handling
- Toast notifications

## API Integration

The application integrates with a backend API for:
- User authentication
- Blog CRUD operations
- Image uploads
- Comment management
- Token validation

## Development

### Running Tests
```bash
ng test
```

### Building for Production
```bash
ng build --configuration production
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Angular Material for the UI components
- Bootstrap for additional styling
- All contributors who have helped shape this project
