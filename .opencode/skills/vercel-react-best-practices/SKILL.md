---
name: vercel-react-best-practices
description: React/Next.js performance best practices adapted from vercel-labs/agent-skills.
metadata:
  author: vercel
  source: https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices
  version: "1.0.0"
---

# Vercel React Best Practices

Áp dụng khi viết/refactor React hoặc Next.js để tránh waterfall, giảm bundle size và tối ưu render.

## Ưu tiên chính

1. Eliminate waterfalls: ưu tiên parallel async (`Promise.all`) khi tác vụ độc lập.
2. Bundle optimization: tránh barrel imports, dùng dynamic import cho phần nặng.
3. Server-side performance: cache hợp lý, tránh serialize dữ liệu dư thừa.
4. Re-render optimization: dependency primitive, tránh inline component definition.

## Checklist nhanh

- Có await nào có thể dời xuống branch dùng thật không?
- Có request độc lập nào cần chạy song song không?
- Có import thư viện nặng nhưng không lazy-load không?
- Có effect nào đang làm việc có thể xử lý trực tiếp trong event handler không?

## Gợi ý áp dụng

- Review PR React/Next.js theo thứ tự: async -> bundle -> render.
- Khi đề xuất fix, ưu tiên thay đổi ít nhất nhưng impact cao nhất.
