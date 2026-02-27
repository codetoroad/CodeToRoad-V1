CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT,
  affiliate_url TEXT,
  category TEXT
);

CREATE TABLE affiliate_clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT,
  clicked_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin_users (
  id INTEGER PRIMARY KEY,
  username TEXT,
  password_hash TEXT
);