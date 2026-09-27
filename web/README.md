# CloudVault

CloudVault is a Next.js frontend shell for a secure internal document-management platform. It uses mock/local application data while Azure application integrations are being introduced separately.

## Local development

```bash
cd web
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
cd web
npm run lint
npm run build -- --webpack
```

## Current boundaries

Azure App Service and Blob Storage foundation work is complete, including versioning, 30-day soft delete, HTTPS/TLS configuration, Shared Key access disabled, and RBAC/governance work. The application itself does not yet connect to those services.

Microsoft Entra ID login, Managed Identity, SQL, Key Vault, private networking, monitoring, CI/CD, Terraform, and Bicep remain in progress or planned. See `/about` for the delivery breakdown.
