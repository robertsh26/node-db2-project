const cars = [
    {
        vin: fdsfie4563287,
        make: 'mazda',
        model: 'miata',
        mileage: 80500,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: fddsas4533287,
        make: 'nissan',
        model: 'altima',
        mileage: 120400,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: fdswee7563287,
        make: 'mistubishi',
        model: 'eclipse',
        mileage: 30000,
        title: 'salvage',
        transmission: 'manual'
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}