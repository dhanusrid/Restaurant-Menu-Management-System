const db = require("../config/db");

const Menu = {

  getAllItems: (callback) => {
    db.query("SELECT * FROM menu_items", callback);
  },

  addItem: (data, callback) => {
    const sql = "INSERT INTO menu_items (name, category, price, available, image_url) VALUES (?,?,?,?,?)";

    db.query(
      sql,
      [data.name, data.category, data.price, data.available, data.image_url],
      callback
    );
  },

  updateItem: (id, data, callback) => {

    const sql =
      "UPDATE menu_items SET name=?, category=?, price=?, available=?, image_url=? WHERE item_id=?";

    db.query(
      sql,
      [data.name, data.category, data.price, data.available, data.image_url, id],
      callback
    );
  },

  deleteItem: (id, callback) => {

    db.query(
      "DELETE FROM menu_items WHERE item_id=?",
      [id],
      callback
    );
  },

};

module.exports = Menu;