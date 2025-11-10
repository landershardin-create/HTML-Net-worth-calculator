-- Companies
CREATE TABLE companies (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('business', 'personal')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);

-- Contributors
CREATE TABLE contributors (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT CHECK (role IN ('admin', 'editor', 'viewer')),
  auth_source TEXT,
  last_login TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);

-- Accounts
CREATE TABLE accounts (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('asset', 'liability', 'equity', 'income', 'expense')),
  currency TEXT DEFAULT 'USD',
  is_active BOOLEAN DEFAULT TRUE
);

-- Journal Entries
CREATE TABLE journal_entries (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  created_by UUID REFERENCES contributors(id),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  memo TEXT,
  is_posted BOOLEAN DEFAULT FALSE
);

-- Journal Lines
CREATE TABLE journal_lines (
  id UUID PRIMARY KEY,
  entry_id UUID REFERENCES journal_entries(id),
  account_id UUID REFERENCES accounts(id),
  amount DECIMAL NOT NULL,
  description TEXT
);

-- Audit Log
CREATE TABLE audit_log (
  id UUID PRIMARY KEY,
  actor_id UUID REFERENCES contributors(id),
  action TEXT,
  target_table TEXT,
  target_id UUID,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
