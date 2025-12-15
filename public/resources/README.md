# Resources Folder

This folder contains media assets (images and videos) used throughout the website.

## Structure

- `images/` - Store all image files (JPG, PNG, WebP, etc.)
- `videos/` - Store all video files (MP4, WebM, etc.)

## Usage in Next.js

Files in the `public` folder are served from the root URL. For example:

- Image at `public/resources/images/device-hero.jpg` → Use as `/resources/images/device-hero.jpg`
- Video at `public/resources/videos/testimonial.mp4` → Use as `/resources/videos/testimonial.mp4`

### Example Usage

```tsx
// Image
<Image src="/resources/images/device-hero.jpg" alt="Device" width={800} height={600} />

// Video
<video src="/resources/videos/testimonial.mp4" controls />
```

## File Naming

Use descriptive, kebab-case names:
- `device-hero-image.jpg`
- `patient-testimonial-video.mp4`
- `knee-brace-product.png`
