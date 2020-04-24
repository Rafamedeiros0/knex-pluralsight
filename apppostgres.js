const cfg =
{
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        database: 'book',
        password: 'sprite'
    },
    //pool: {min: 1, max: 1},
    useNullAsDefault: true
};

const knex = require('knex')(cfg);
knex.select('title', 'rating').from('book').asCallback(function(err, rows){
    if (err) {console.error(err); }
    else{
        console.log(rows);
    }
    knex.destroy();
    console.log('Done.');
});
