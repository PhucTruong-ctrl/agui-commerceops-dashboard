---
name: web-scraper
description: Extract structured data from web pages with ethical scraping safeguards.
metadata:
  source: https://github.com/NeverSight/learn-skills.dev/tree/main/data/skills-md/guia-matthieu/clawfu-skills/web-scraper
  version: "1.0.0"
---

# Web Scraper

Skill hỗ trợ thu thập dữ liệu web có cấu trúc (giá, danh sách, contact, metadata).

## Khi dùng

- Nghiên cứu đối thủ (pricing/features).
- Trích xuất dữ liệu từ directory/listing page.
- Theo dõi thay đổi nội dung theo chu kỳ.

## Cách làm chuẩn

1. Kiểm tra robots.txt và điều khoản sử dụng.
2. Ưu tiên API chính thức nếu có.
3. Với trang tĩnh: requests/httpx + BeautifulSoup.
4. Với trang render JS: Playwright.
5. Có retry, timeout, rate-limit và logging.

## Guardrails

- Không spam request; mặc định 1-2 req/giây.
- Có User-Agent rõ ràng.
- Không scrape dữ liệu nhạy cảm hoặc giới hạn truy cập trái phép.
