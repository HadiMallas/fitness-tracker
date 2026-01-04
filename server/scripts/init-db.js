const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env') });

async function initDB() {
    console.log('🔄 Initializing Database...');
    const connectionUrl = process.env.DATABASE_URL;

    if (!connectionUrl) {
        console.error('❌ No DATABASE_URL found.');
        return;
    }

    try {
        console.log(`Connecting to: ${connectionUrl.split('@')[1]}`); // Log host for verification

        // Aiven requires SSL, and it's usually automatic with the URL having ?ssl-mode=REQUIRED
        // but we might need to explicitly set it if the driver ignores query params.
        const connection = await mysql.createConnection(connectionUrl);
        console.log('✅ Connected to MySQL server');

        const sqlPath = path.join(__dirname, '../database.sql');
        const sqlContent = fs.readFileSync(sqlPath, 'utf8');

        // Simple splitter
        const queries = sqlContent
            .split(';')
            .map(q => q.trim())
            .filter(q => q.length > 0 && !q.startsWith('--'));

        for (const query of queries) {
            if (query.toUpperCase().startsWith('CREATE') || query.toUpperCase().startsWith('USE')) {
                // Skip create database since we are already connected to 'defaultdb' usually
                if (query.toUpperCase().includes('CREATE DATABASE')) continue;
                if (query.toUpperCase().includes('USE ')) continue;

                console.log(`▶ Executing: ${query.substring(0, 50)}...`);
                await connection.query(query);
            }
        }

        console.log('✅ Database initialized successfully!');
        console.log('✅ Tables created.');
        await connection.end();

    } catch (error) {
        console.error('❌ Error initializing database:', error.message);
    }
}

initDB();
