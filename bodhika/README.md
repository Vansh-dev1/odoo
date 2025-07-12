# Bodhika - Q&A Platform for Developers

A modern Q&A platform built with Next.js and Tailwind CSS, designed for developers to ask questions, share knowledge, and learn from the community.

## Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Question Management**: Ask questions with rich text formatting
- **Voting System**: Upvote/downvote questions and answers
- **Tag System**: Categorize questions with tags
- **Search Functionality**: Search through questions and answers
- **Category Filtering**: Filter questions by technology categories
- **Answer System**: Provide detailed answers with code formatting
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and formatting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bodhika
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
bodhika/
├── src/
│   ├── app/
│   │   ├── ask/
│   │   │   └── page.tsx          # Ask question page
│   │   ├── questions/
│   │   │   ├── page.tsx          # Questions listing page
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Question detail page
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Homepage
│   │   └── globals.css           # Global styles
│   └── components/
│       ├── QuestionCard.tsx      # Question card component
│       ├── SearchBar.tsx         # Search functionality
│       └── CategoryFilter.tsx    # Category filtering
├── public/                       # Static assets
└── package.json
```

## Pages

### Homepage (`/`)
- Featured questions display
- Search functionality
- Category filtering
- Quick navigation to ask questions

### Ask Question (`/ask`)
- Form to submit new questions
- Title, content, and tags input
- Writing tips and guidelines

### Questions List (`/questions`)
- Browse all questions
- Sorting options (newest, most voted, etc.)
- Pagination support

### Question Detail (`/questions/[id]`)
- Full question display
- Answers with voting
- Answer submission form
- Accept answer functionality

## Components

### QuestionCard
Displays question preview with:
- Title and content preview
- Vote count
- Answer count
- Tags
- Author and timestamp

### SearchBar
Search functionality with:
- Real-time search input
- Popular tags suggestions
- Search form submission

### CategoryFilter
Category filtering with:
- Technology categories
- Question counts
- Interactive selection

## Styling

The project uses Tailwind CSS for styling with:
- Custom color scheme
- Responsive design
- Hover and focus states
- Custom scrollbar styling
- Line-clamp utilities for text truncation

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Consistent component structure
- Proper TypeScript interfaces

## Future Enhancements

- User authentication and profiles
- Real-time notifications
- Rich text editor for questions/answers
- Code syntax highlighting
- Image upload support
- Backend API integration
- Database integration
- User reputation system
- Question bookmarking
- Email notifications

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue on the repository.
