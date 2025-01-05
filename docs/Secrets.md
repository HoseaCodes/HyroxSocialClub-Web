Here's a step-by-step guide to set up environment variables for Expo and publish to the Apple App Store:

1. Initial Setup:
```bash
# Install required dependencies
npx expo install dotenv
```

2. Create Environment Files:
```bash
# Create different .env files for each environment
touch .env.development .env.staging .env.production
```

3. Create app.config.js in your project root:
```javascript
// app.config.js
import 'dotenv/config';

export default {
  expo: {
    name: "YourApp",
    slug: "your-app",
    version: "1.0.0",
    extra: {
      apiUrl: process.env.API_URL,
      anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    },
    ios: {
      bundleIdentifier: "com.yourcompany.yourapp",
      buildNumber: process.env.BUILD_NUMBER || "1"
    }
  }
};
```

4. Create eas.json for build configurations:
```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "env": {
        "API_URL": "http://localhost:5003",
        "ANTHROPIC_API_KEY": "dev_key"
      }
    },
    "production": {
      "autoIncrement": true,
      "env": {
        "API_URL": "https://api.yourapp.com",
        "ANTHROPIC_API_KEY": "prod_key"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "your@email.com",
        "ascAppId": "1234567890",
        "appleTeamId": "TEAM123456"
      }
    }
  }
}
```

5. Set up EAS:
```bash
# Log in to EAS
eas login

# Configure your project
eas build:configure
```

6. Store Sensitive Variables:
```bash
# Store secrets in EAS
eas secret:create --scope project --name ANTHROPIC_API_KEY --value "your-api-key"
```

7. Access Variables in Code:
```javascript
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig.extra.apiUrl;
const ANTHROPIC_API_KEY = Constants.expoConfig.extra.anthropicApiKey;
```

8. Build for Different Environments:
```bash
# Development build
eas build --profile development --platform ios

# Production build
eas build --profile production --platform ios
```

9. App Store Submission:
```bash
# Submit to App Store
eas submit --platform ios --profile production
```

10. Git Configuration:
```bash
# Add to .gitignore
echo ".env*" >> .gitignore
echo "!.env.example" >> .gitignore
```

Security Best Practices:
- Never commit .env files to git
- Use EAS secrets for sensitive data
- Use different values per environment
- Regularly rotate API keys
- Monitor usage and set up alerts

Let me know if you need more detailed instructions for any of these steps!