# GutGuardian - Base Mini App

Personalized gut health insights powered by AI, onchain achievements, and Farcaster social features.

## Features

- 🤖 AI-powered food logging and microbiome scoring
- 🏆 Onchain health achievements and badges
- 👥 Collaborative gut health challenges
- 📊 Interactive progress visualizations
- 🔗 Farcaster integration for social features
- ⛓️ Base blockchain for gasless transactions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your API keys
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Providers.tsx   # OnchainKit & React Query providers
│   ├── DashboardHeader.tsx
│   ├── Sidebar.tsx
│   ├── MicrobiomeScoreCard.tsx
│   ├── DailyFoodLogCard.tsx
│   ├── VideoFeedCard.tsx
│   └── MealLogModal.tsx
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles with Coinbase theme

public/
└── .well-known/
    └── farcaster.json  # Farcaster manifest
```

## Farcaster Integration

The app includes a Farcaster manifest at `/.well-known/farcaster.json` for Mini App discovery and features:

- User context access (FID, username, pfp)
- Notifications for achievements and challenges
- Frame sharing for social engagement
- Wallet connection with Base

## OnchainKit Features

- ConnectWallet component for Base wallet connection
- Transaction components with gas sponsorship
- Identity components (Avatar, Name, Badge)
- Basename resolution

## Design System

The app uses the Coinbase theme with:
- Dark navy background (#0a1929)
- Coinbase blue accents (#0052ff)
- Subtle rounded borders
- Card shadows and smooth transitions

## License

MIT
