# AGUI CommerceOps Dashboard

Hệ thống hỗ trợ điều hành bán hàng bằng tác tử AI (Academic MVP / Tiểu luận chuyên ngành).

## Mục tiêu

- Chuẩn hóa luồng điều hành bán hàng với dashboard tập trung.
- Cung cấp backend API phục vụ nghiệp vụ vận hành.
- Tổ chức frontend trực quan cho giám sát và thao tác nhanh.
- Tạo nền tảng mở rộng cho các tác tử AI trong các bước tiếp theo.

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express + TypeScript
- ORM/Data: Prisma + PostgreSQL

## Cấu trúc thư mục

```text
.
├── backend/                 # API server + Prisma
├── frontend/                # Web dashboard
├── docs/                    # Tài liệu học thuật
├── .github/workflows/       # CI workflows
├── AGENTS.md                # Quy trình làm việc bắt buộc
├── CHANGELOG.md             # Lịch sử thay đổi (Keep a Changelog)
├── SECURITY.md              # Chính sách bảo mật
└── VERSION                  # Phiên bản hiện tại
```

## Setup

### 1) Frontend

```bash
cd frontend
npm ci
npm run lint
npm run build
```

### 2) Backend

```bash
cd backend
npm ci
npx prisma generate
npm run build
```

## Development Notes

- Không commit file env (`.env*` ngoại trừ `.env.example`).
- Theo dõi thay đổi ở `CHANGELOG.md` và `VERSION`.
- Tuân thủ workflow Trello trong `AGENTS.md` khi hoàn tất task.
