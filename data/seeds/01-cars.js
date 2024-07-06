const cars = [
    {
        vin: 'fdsfie45632873412',
        make: 'mazda',
        model: 'miata',
        mileage: 80500,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: 'fddsas45332872314',
        make: 'nissan',
        model: 'altima',
        mileage: 120400,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: 'fdswee75632871341',
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