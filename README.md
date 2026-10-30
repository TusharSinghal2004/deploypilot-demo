# DeployPilot Demo

A minimal full-stack app used as a DeployPilot test target.

- `frontend/` — Vite + React + TypeScript. Reads `VITE_API_URL` to call the backend.
- `backend/` — Express. Reads `FRONTEND_URL` for CORS, exposes `GET /api/health`.

## Local run
