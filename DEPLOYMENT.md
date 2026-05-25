# Deployment

This is a static HTML/CSS/JavaScript site. There is no package install or build step.

## Vercel

1. Go to https://vercel.com/new.
2. Import `mohbid/Property-Site` from GitHub.
3. Use these project settings:
   - Framework preset: Other
   - Root directory: `.`
   - Build command: leave empty
   - Output directory: `.`
4. Click Deploy.

## AWS Amplify

1. Go to https://console.aws.amazon.com/amplify/apps.
2. Choose Create new app.
3. Choose GitHub as the source provider.
4. Select `mohbid/Property-Site` and branch `main`.
5. Confirm the build settings from `amplify.yml`.
6. Click Save and deploy.

## After Deployment

Check:

- The public homepage loads.
- `/admin.html` loads.
- A Firestore property published from the admin page appears on the homepage after a refresh.
