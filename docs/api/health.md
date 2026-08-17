# Health API Specification

## Endpoint
`GET /api/v1/health`

## Response Format
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2026-08-18T01:45:00.000Z",
    "uptimeSeconds": 124,
    "environment": "development",
    "database": "connected",
    "version": "2.0.0"
  }
}
```

## Status Codes
- `200 OK`: System and database are operational.
- `503 Service Unavailable`: Database or critical subsystem unreachable.
