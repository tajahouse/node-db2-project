
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, make: 'rowValue1', model: "model1", VIN: "HE5GS57E1D5SS52S", mileage: "4000", transmission: "auto"},
        {id: 2, make: 'rowValue2', model: "model2", VIN: "HE5GS57E1DD4R1FS", mileage: "3000", transmission: "manuel"},
        {id: 3, make: 'rowValue3', model: "model3", VIN: "HE5GS5CF4R1S2D2S", mileage: "2000", transmission: "auto"}
      ]);
    });
};
