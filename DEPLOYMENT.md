# Deployment Guide for WebHost Kenya

## Prerequisites
- Node.js installed locally
- FTP/cPanel access to WebHost Kenya hosting

## Build Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build the project**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with all static files.

## Upload to WebHost Kenya

### Option 1: Via cPanel File Manager
1. Log into your cPanel
2. Navigate to File Manager
3. Go to `public_html` directory (or your domain's root)
4. Upload ALL contents from the `dist` folder (not the folder itself)
5. Ensure `.htaccess` file is uploaded (enable "Show Hidden Files" if needed)

### Option 2: Via FTP
1. Connect to your hosting via FTP client (FileZilla, etc.)
2. Navigate to `public_html` directory
3. Upload ALL contents from the `dist` folder
4. Verify `.htaccess` file is present

## Important Files
- `.htaccess` - Handles React Router routing (already in public folder, will be copied to dist during build)
- `index.html` - Main entry point
- `assets/` - Contains all JS, CSS, and images

## Verify Deployment
1. Visit your domain: http://yourdomain.com
2. Test navigation to different pages
3. Check browser console for any API errors

## Troubleshooting

### 404 Errors on Page Refresh
- Ensure `.htaccess` file is uploaded
- Verify Apache mod_rewrite is enabled (contact WebHost Kenya support)

### Blank Page
- Check browser console for errors
- Verify all files from `dist` folder were uploaded
- Check file permissions (644 for files, 755 for folders)

### API/Sanity Errors
- Sanity credentials are embedded during build
- No additional environment variables needed on server
