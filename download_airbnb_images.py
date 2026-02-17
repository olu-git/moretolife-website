#!/usr/bin/env python3
"""
Download top 5 images from Airbnb listings and save locally.
Real villa names stored in comments for internal reference.
"""
import os
import re
import json
import requests
from pathlib import Path

# Villa info: (name for internal use, listing_id)
villas = [
    ("Villa 1", "1618561498271930890"),
    ("Villa 2", "1582993290173349509"),
]

output_dir = Path(__file__).parent / "images"
output_dir.mkdir(exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

def extract_images_from_listing(listing_id, villa_num):
    """Extract image URLs from an Airbnb listing and download top 5."""
    url = f"https://www.airbnb.com.au/rooms/{listing_id}"
    
    print(f"\n[Villa {villa_num}] Fetching listing {listing_id}...")
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        # Look for image URLs in the page (Airbnb uses various image formats)
        # Pattern matches common Airbnb CDN image URLs
        img_pattern = r'https://[a-z0-9.-]+\.airbnbstatic\.com/[^"\s<>]+\.(?:jpg|jpeg|png|webp)'
        images = list(set(re.findall(img_pattern, response.text)))
        
        if not images:
            print(f"[!] No images found in HTML. Trying API...")
            # Try Airbnb's API endpoint
            api_url = f"https://www.airbnb.com.au/api/v3/PdpListings"
            params = {"operationName": "PdpListings", "listingId": listing_id}
            api_resp = requests.get(api_url, headers=headers, params=params, timeout=10)
            if api_resp.status_code == 200:
                try:
                    api_data = api_resp.json()
                    images = re.findall(img_pattern, api_resp.text)
                except:
                    pass
        
        # Filter out tracking/badge images; keep primary photos
        images = [img for img in images if not any(x in img.lower() for x in 
                  ['badge', 'icon', 'avatar', 'logo', 'superhost', 'star'])]
        
        # Take top 5 images
        top_images = images[:5]
        
        if not top_images:
            print(f"[WARNING] Could not extract image URLs from listing {listing_id}")
            print("   Please paste the direct image URLs in a file or use Airbnb's copy image address.")
            return False
        
        print(f"[OK] Found {len(top_images)} images. Downloading...")
        
        # Download images
        for idx, img_url in enumerate(top_images, 1):
            try:
                img_response = requests.get(img_url, headers=headers, timeout=10)
                img_response.raise_for_status()
                
                # Determine file extension
                if 'webp' in img_url:
                    ext = 'webp'
                elif 'png' in img_url:
                    ext = 'png'
                else:
                    ext = 'jpg'
                
                filename = f"villa{villa_num}-{idx}.{ext}"
                filepath = output_dir / filename
                
                with open(filepath, 'wb') as f:
                    f.write(img_response.content)
                
                print(f"  [+] Downloaded: {filename} ({len(img_response.content) / 1024:.1f}KB)")
            except Exception as e:
                print(f"  [ERROR] Failed to download image {idx}: {e}")
        
        return True
    
    except Exception as e:
        print(f"[ERROR] Error fetching listing: {e}")
        return False

# Download images for both villas
success = True
for (villa_name, listing_id), villa_num in zip(villas, [1, 2]):
    print(f"\n--- Internal Name: {villa_name} ---")
    if not extract_images_from_listing(listing_id, villa_num):
        success = False

if success:
    print("\n[SUCCESS] All images downloaded successfully!")
    print(f"[INFO] Images saved to: {output_dir}")
else:
    print("\n[WARNING] Some images could not be downloaded.")
    print("   You can manually paste image URLs by editing this script or uploading files.")

