// CustomerTable.js

import  pool from "./database.js";

const createTables = async () => {
  try {
    // Customers Table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS customers (
        customer_id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50),
        phone VARCHAR(20)
      )
    `);

    // Policies Table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS policies (
        policy_id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        policy_type VARCHAR(50),
        coverage_amount DECIMAL(10, 2),
        start_date DATE,
        end_date DATE,
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
      )
    `);

    // Add other tables similarly

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await pool.end(); // Close the connection pool
  }
};

createTables();
