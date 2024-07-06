const cars = [
    {
        vin: '1FMZU73E12ZC48134',
        make: 'mazda',
        model: 'miata',
        mileage: 80500,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: 'WDDHF8HB6BA222499',
        make: 'nissan',
        model: 'altima',
        mileage: 120400,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '1FAFP28105G159619',
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