export type User = { id: string; name: string; email: string; department: string; role: "Employee" | "Admin"; status: "Active" | "Disabled" };
export type Document = { id: string; name: string; type: "PDF" | "DOCX" | "XLSX" | "IMAGE"; department: string; uploadedBy: string; date: string; size: string; status: "Active" | "Deleted"; modified: string };
export type AuditEvent = { id: string; timestamp: string; user: string; action: string; resource: string; result: "Success" | "Failed"; ip: string };

export const currentUser: User = { id: "usr-001", name: "Felix Appiah", email: "felix@example.com", department: "IT", role: "Employee", status: "Active" };
export const users: User[] = [currentUser, { id: "usr-002", name: "Amina Mensah", email: "amina@example.com", department: "Finance", role: "Admin", status: "Active" }, { id: "usr-003", name: "Jordan Lee", email: "jordan@example.com", department: "HR", role: "Employee", status: "Disabled" }, { id: "usr-004", name: "Maya Patel", email: "maya@example.com", department: "Operations", role: "Employee", status: "Active" }];
export const documents: Document[] = [
  { id: "doc-001", name: "Network Architecture.pdf", type: "PDF", department: "IT", uploadedBy: "Felix Appiah", date: "27 Sep 2026", size: "2.4 MB", status: "Active", modified: "27 Sep 2026" },
  { id: "doc-002", name: "Cloud Security Policy.docx", type: "DOCX", department: "IT", uploadedBy: "Amina Mensah", date: "24 Sep 2026", size: "846 KB", status: "Active", modified: "25 Sep 2026" },
  { id: "doc-003", name: "Infrastructure Inventory.xlsx", type: "XLSX", department: "Operations", uploadedBy: "Felix Appiah", date: "20 Sep 2026", size: "1.2 MB", status: "Active", modified: "20 Sep 2026" },
  { id: "doc-004", name: "Server Rack.jpg", type: "IMAGE", department: "IT", uploadedBy: "Maya Patel", date: "18 Sep 2026", size: "4.8 MB", status: "Active", modified: "18 Sep 2026" },
  { id: "doc-005", name: "Q2 Budget Forecast.xlsx", type: "XLSX", department: "Finance", uploadedBy: "Amina Mensah", date: "02 Sep 2026", size: "921 KB", status: "Deleted", modified: "11 Sep 2026" },
];
export const auditEvents: AuditEvent[] = [
  { id: "audit-001", timestamp: "27 Sep 2026, 09:14", user: "Felix Appiah", action: "LOGIN", resource: "CloudVault", result: "Success", ip: "10.20.4.18" },
  { id: "audit-002", timestamp: "27 Sep 2026, 09:31", user: "Felix Appiah", action: "DOCUMENT_UPLOAD", resource: "Network Architecture.pdf", result: "Success", ip: "10.20.4.18" },
  { id: "audit-003", timestamp: "26 Sep 2026, 16:02", user: "Amina Mensah", action: "PERMISSION_CHANGE", resource: "Jordan Lee", result: "Success", ip: "10.20.3.11" },
  { id: "audit-004", timestamp: "26 Sep 2026, 11:44", user: "Jordan Lee", action: "LOGIN", resource: "CloudVault", result: "Failed", ip: "10.20.7.42" },
  { id: "audit-005", timestamp: "25 Sep 2026, 13:18", user: "Maya Patel", action: "DOCUMENT_RESTORE", resource: "Q2 Budget Forecast.xlsx", result: "Success", ip: "10.20.9.6" },
];
