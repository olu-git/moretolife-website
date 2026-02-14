#!/usr/bin/env python3
"""Download Airbnb images from provided URLs."""
import requests
from pathlib import Path

images_data = {
    1: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/f23f2612-6b0b-45f1-be3d-8a93e06d9116.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/e6b93e62-d837-48ae-82bb-bde6880f5f6b.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/f2c0a109-dc1a-4b97-899c-79a50558b6af.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/7488ae00-c5e1-4a32-9473-07d3c315b1d2.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/957966af-eb2a-487f-813e-f6f82ef85d4e.jpeg?im_w=1440",
    ],
    2: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-53611420/original/d9b74c57-6680-47a2-a854-1f19f6067a44.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53611420/original/c17a03a9-d0e5-42fa-9f6b-92bf07938bae.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53611420/original/f9d826f6-ea07-4a01-a0b2-54b37eb0f53e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53611420/original/29d8bea8-3353-4aa1-ad0a-0d3eb58cf10d.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53611420/original/71919048-bfb7-43ab-9266-e247799e6258.jpeg?im_w=720",
    ]
}

output_dir = Path(__file__).parent / "images"
output_dir.mkdir(exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

for villa_num, urls in images_data.items():
    for idx, url in enumerate(urls, 1):
        try:
            response = requests.get(url, headers=headers, timeout=15)
            response.raise_for_status()
            
            filename = f"villa{villa_num}-{idx}.jpg"
            filepath = output_dir / filename
            
            with open(filepath, 'wb') as f:
                f.write(response.content)
            
            size_kb = len(response.content) / 1024
            print(f"[+] Downloaded: {filename} ({size_kb:.1f}KB)")
        except Exception as e:
            print(f"[-] Failed villa{villa_num}-{idx}: {e}")

print("[OK] All images downloaded!")
