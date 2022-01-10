'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.uuid("id").notNullable().unique();
      table.string("name").notNullable();
      table.string("car_image").notNullable();
      table.string("make").notNullable();
      table.string("model").notNullable();
      table.string("year").notNullable();
      table.string("mileage").notNullable();
      table.string("location").notNullable();
      table.string("transmission").notNullable();
      table.string("selling_condition").notNullable();
      table.string("colour").notNullable();
      table.boolean("cool_box").defaultTo(false);
      table.boolean("sunroof").defaultTo(false);
      table.boolean("dvd_system").defaultTo(false);
      table.boolean("remote_key").defaultTo(false);
      table.boolean("car_tracker").defaultTo(false);
      table.boolean("park_assist").defaultTo(false);
      table.boolean("parking_sensor").defaultTo(false);
      table.boolean("reverse_camera").defaultTo(false);
      table.boolean("navigation_system").defaultTo(false);
      table.boolean("adaptive_head_lamps").defaultTo(false);
      table.boolean("bluetooth_hands_free").defaultTo(false);
      table.boolean("touch_screen_audio_system").defaultTo(false);
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
