# Commands used

Running on psql
```sql
-- New database
CREATE DATABASE knowledge;

-- List Databases
\l

-- Connect to database
\c knowledge

-- List tables
\dt
```

On terminal

```bash
# Install Knex
sudo npm i -g knex

# Add latests packages of project
npm i knex pg pm2 bcrypt-nodejs
npm i jwt-simple passport passport-jwt
npm i node-schedule mongoose

# Create config file knex
knex init

# Create migrations
knex migrate:make create_table_users
knex migrate:make create_table_categories
knex migrate:make create_table_articles
knex migrate:make add_deleted_at_table_users

# Run migrations
knex migrate:latest
# knex migrate:rollback

# Run backend
npm run start


```