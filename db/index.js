const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-crud-users', {
    logging: false
});

const User = conn.define('user', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
})

const syncAndSeed = () => {
    conn.sync({ force: true })
        .then(() => {
            Promise.all([
                User.create({ name: 'moe' }),
                User.create({ name: 'larry' }),
                User.create({ name: 'curly' })
            ])
        })
}

module.exports = {
    models: {
        User
    },
    syncAndSeed
}