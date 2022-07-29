"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'next_ec'),
            user: env('DATABASE_USERNAME', 'root'),
            password: env('DATABASE_PASSWORD', 'password'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
