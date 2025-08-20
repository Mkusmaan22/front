# Cross Stitch Pattern Maker - Deployment Guide

## Overview

This document provides instructions for deploying and accessing the Cross Stitch Pattern Maker web application. The application consists of a React frontend and a Flask backend API for image processing and pattern generation.

## Project Structure

```
cross_stitch_project/
├── research/                 # Research and planning documents
├── design/                   # Design specifications and documentation
│   ├── algorithm_design.md   # Pattern generation algorithm design
│   ├── ui_ux/                # UI/UX design specifications
│   └── seo_strategy.md       # SEO strategy documentation
└── implementation/           # Implementation code
    ├── frontend/             # React frontend application
    │   └── cross-stitch-maker/
    └── backend/              # Flask backend API
        └── cross_stitch_api/
```

## Deployment Instructions

### Backend Deployment

1. Navigate to the backend directory:
   ```
   cd /home/ubuntu/cross_stitch_project/implementation/backend/cross_stitch_api
   ```

2. Activate the virtual environment:
   ```
   source venv/bin/activate
   ```

3. Ensure all dependencies are installed:
   ```
   pip install -r requirements.txt
   ```

4. Start the Flask server:
   ```
   python src/main.py
   ```

5. The backend API will be available at `http://localhost:5000`

### Frontend Deployment

1. Navigate to the frontend directory:
   ```
   cd /home/ubuntu/cross_stitch_project/implementation/frontend/cross-stitch-maker
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Start the development server:
   ```
   pnpm run dev
   ```

4. The frontend application will be available at `http://localhost:5173`

## Production Deployment

For production deployment, follow these steps:

### Backend Production Deployment

1. Update the CORS settings in `src/main.py` to allow only your production domain
2. Set `debug=False` in the app.run() call
3. Use a production WSGI server like Gunicorn:
   ```
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:5000 src.main:app
   ```

### Frontend Production Deployment

1. Build the production version:
   ```
   cd /home/ubuntu/cross_stitch_project/implementation/frontend/cross-stitch-maker
   pnpm run build
   ```

2. The build output will be in the `dist` directory, which can be served by any static file server

## API Documentation

### Endpoints

#### GET /
- Description: Health check endpoint
- Response: `{"status": "API is running"}`

#### POST /api/generate-pattern
- Description: Generates a cross stitch pattern from an image
- Request Body:
  ```json
  {
    "imageData": "base64-encoded-image-data",
    "settings": {
      "width": 100,
      "height": 100,
      "colorCount": 30,
      "fabricCount": 14,
      "threadType": "dmc",
      "includeBackstitch": true
    }
  }
  ```
- Response:
  ```json
  {
    "pattern": {
      "grid": [["310", "blanc"], ...],
      "colors": {
        "310": {
          "color": "rgb(0, 0, 0)",
          "symbol": "■",
          "name": "Black",
          "code": "310"
        },
        ...
      },
      "width": 100,
      "height": 100
    }
  }
  ```

#### POST /api/export-pdf
- Description: Exports a pattern as PDF (placeholder for future implementation)
- Response: `{"message": "PDF export functionality coming soon"}`

## Features

The Cross Stitch Pattern Maker includes the following features:

1. **Image Upload**: Upload images to convert to cross stitch patterns
2. **Pattern Customization**: Adjust pattern size, color count, and fabric count
3. **Thread Type Selection**: Choose from different thread brands (currently DMC)
4. **Pattern Preview**: View the generated pattern with color or symbol display
5. **Color Legend**: View a legend of all colors used in the pattern
6. **Responsive Design**: Works on both desktop and mobile devices

## Technical Details

- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Flask API with image processing using OpenCV and Pillow
- **Color Matching**: Uses Euclidean distance in RGB space to match colors to DMC thread colors
- **Color Reduction**: Uses k-means clustering in Lab color space for optimal color reduction

## Testing

- **Backend Tests**: Unit tests for pattern generation logic and API endpoints
- **Frontend Tests**: Integration tests for the main application workflow

## Future Enhancements

1. PDF export functionality
2. Pattern sharing capabilities
3. User accounts for saving patterns
4. Additional thread brand support
5. Backstitch detection and generation
6. Progress tracking for stitching projects

## Troubleshooting

- If the backend fails to start, check that all dependencies are installed
- If pattern generation fails, check the image format and size
- For CORS issues, ensure the frontend origin is allowed in the backend configuration
