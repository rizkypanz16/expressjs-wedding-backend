-- CREATE DATABASE USER
CREATE USER "admin-wedding" WITH PASSWORD 'ijinmasuk';

-- CREATE DATABASE
CREATE DATABASE wedding_backend_db;
ALTER DATABASE wedding_backend_db OWNER TO "admin-wedding";

-- CONNECT TO DATABASE
\c wedding_backend_db

-- GRANT DATABASE PRIVILEGES
GRANT ALL PRIVILEGES ON DATABASE wedding_backend_db TO "admin-wedding";
GRANT CREATE, USAGE ON SCHEMA public TO "admin-wedding";
GRANT ALL PRIVILEGES ON SCHEMA public TO "admin-wedding";
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO "admin-wedding";