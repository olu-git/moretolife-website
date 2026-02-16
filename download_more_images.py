#!/usr/bin/env python3
"""Download new Airbnb images."""
import requests
from pathlib import Path

images_data = {
    1: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/551aead7-2568-496f-8283-dc174e5d3396.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/e027954a-d885-443e-adee-71b2fe1b117f.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/16a2c64d-f39a-4aba-9b35-263962880168.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/f5897d16-252a-44ad-8982-0b1e631de2de.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1526528069625327523/original/142c7179-d8f2-42f2-9985-5cd8cda11177.jpeg?im_w=1440",
    ],
    2: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-53611420/original/425fe52f-b0f2-45e9-a98b-90103bef58d3.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53611420/original/638d1cdc-a75b-4be1-b41b-41bef0856666.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53611420/original/6c895228-a273-4833-8611-203a14da1ad7.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53611420/original/c17a03a9-d0e5-42fa-9f6b-92bf07938bae.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/e70b2600-e591-47e3-b791-32f071879522.jpg?im_w=1440",
    ]
}

output_dir = Path(__file__).parent / "images"
output_dir.mkdir(exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

for villa_num, urls in images_data.items():
    for idx, url in enumerate(urls, 6):
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

print("[OK] All new images downloaded!")
