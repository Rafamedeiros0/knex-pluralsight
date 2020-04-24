module.exports = 
{

    pg:
    {
        client: 'pg',
        connection: 
        {
            host: 'localhost',
            user: 'postgres',
            database: 'book',
            password: 'sprite'
        },
        //pool: {min: 1, max: 1},
        useNullAsDefault: true,
        debug: true

    },
    sqlite:
    {
        client: 'sqlite3',
        connection: 
        {
            filename: './book.sqlite'
        },
        //pool: {min: 1, max: 1},
        useNullAsDefault: true,
        debug: true
    }
    
}