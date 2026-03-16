---
name: web-design-guidelines
description: UI/UX review checklist aligned with Vercel Web Interface Guidelines.
metadata:
  author: vercel
  source: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines
  version: "1.0.0"
---

# Web Design Guidelines

Skill này dùng để review giao diện theo checklist nhất quán.

## Khi dùng

- Audit accessibility, layout, contrast, spacing, feedback state.
- Review UI trước khi merge hoặc demo.

## Quy trình

1. Xác định phạm vi file/component cần review.
2. Kiểm tra theo 4 nhóm: hierarchy, readability, interaction, accessibility.
3. Ghi findings theo format `file:line - issue - recommendation`.

## Checklist ngắn

- Typography hierarchy rõ ràng (title/subtitle/body).
- Interactive target đủ lớn, focus state nhìn thấy được.
- Contrast đạt mức dễ đọc.
- Empty/loading/error states đầy đủ.
