-- Sample company
INSERT INTO companies (id, name, type) VALUES
  ('c1', 'Get Up HDL', 'business'),
  ('c2', 'Landers Personal Finance', 'personal');

-- Sample contributors
INSERT INTO contributors (id, company_id, name, email, role) VALUES
  ('u1', 'c1', 'Landers Hardin', 'landers@getuphdl.com', 'admin'),
  ('u2', 'c2', 'Landers Hardin', 'landers@personal.com', 'admin');

-- Sample accounts
INSERT INTO accounts (id, company_id, name, type) VALUES
  ('a1', 'c1', 'Cash', 'asset'),
  ('a2', 'c1', 'Revenue', 'income'),
  ('a3', 'c2', 'Savings', 'asset'),
  ('a4', 'c2', 'Groceries', 'expense');

-- Sample journal entry
INSERT INTO journal_entries (id, company_id, created_by, memo) VALUES
  ('j1', 'c1', 'u1', 'Initial revenue');

-- Sample journal lines
INSERT INTO journal_lines (id, entry_id, account_id, amount, description) VALUES
  ('l1', 'j1', 'a1', 500.00, 'Cash received'),
  ('l2', 'j1', 'a2', -500.00, 'Revenue earned');
