
exports.seed = function(knex) {
  return knex("cats").del()
    .then(function () {
      return knex("cats").insert([
        {id: 1, name: "Ronnie"},
        {id: 2, name: "Casper"}
      ]);
    });
};
