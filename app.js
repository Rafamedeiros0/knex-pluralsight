const cfg    = require('./knex-cfg').sqlite;
const screen = require ('./screen');
const knex   = require('knex')(cfg);


screen.clear;

const charles = {firstname: 'Charles', lastname: 'Dickens'};
const bill = {firstname: 'William', lastname: 'Shakespeare'};
const ed = {firstname: 'Edgar', lastname: 'Poe'};
const doc = {firstname: 'Dr.', lastname: 'Seuss'};

knex.insert([bill,ed,doc]).into('author').then(function(id)
{
    console.log(id);
    return knex('author'); // similar > knex.select(*).from('author);
})
.then(function(rows)
{
    screen.write(rows, 'pretty');
})
.finally(function()
{
    knex.destroy();
});