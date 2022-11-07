const pool = require('../utils/pool');

class Owner {
  constructor({ id, name, pets }) {
    this.id = id;
    this.name = name;
    this.pets = pets;
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      select owners.*, 
            coalesce(
              json_agg(to_jsonb(pets))
              filter (WHERE pets.id IS NOT NULL), '[]') as pets
      from owners left join owners_pets
        on owners.id = owners_pets.owner_id
      left join pets on pets.id = owners_pets.pet_id
      where pets.id = $1
      group by owners.id;
    `,
      [id]
    );
    return new Owner(rows[0]);
  }
  static async getAll() {
    const { rows } = await pool.query(`
      select owners.*, 
            coalesce(
              json_agg(to_jsonb(pets))
              filter (WHERE pets.id IS NOT NULL), '[]') as pets
      from owners left join owners_pets
        on owners.id = owners_pets.owner_id
      left join pets on pets.id = owners_pets.pet_id
      group by owners.id;
    `);
    return rows.map((row) => new Owner(row));
  }
}

module.exports = { Owner };
