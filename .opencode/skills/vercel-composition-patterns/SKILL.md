---
name: vercel-composition-patterns
description: React composition patterns from vercel-labs/agent-skills for scalable component APIs.
metadata:
  author: vercel
  source: https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns
  version: "1.0.0"
---

# Vercel Composition Patterns

Áp dụng khi component bắt đầu có nhiều boolean props hoặc API khó mở rộng.

## Nguyên tắc

1. Tránh boolean prop proliferation, ưu tiên composition.
2. Dùng compound components cho UI phức tạp có state dùng chung.
3. Tách implementation khỏi interface context/state.
4. Ưu tiên explicit variants thay vì mode boolean.

## Dấu hiệu cần refactor

- Component có >2 props kiểu boolean để điều khiển mode.
- Nhiều điều kiện rẽ nhánh sâu trong JSX.
- Logic state dùng chung giữa nhiều child nhưng chưa có provider rõ ràng.

## Kết quả mong đợi

- API component rõ nghĩa hơn.
- Dễ tái sử dụng và giảm nhánh điều kiện.
- Dễ test ở cả unit và integration.
