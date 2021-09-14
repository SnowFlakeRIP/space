const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1456051426:AAGf2mtOc3oE6JsYsjbx5HETNuq5oI2wSVQ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token,  {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    // bot.sendMessage(chatId, msg.chat.id);
});


const fastify = require('fastify')({
    logger: true
})
const Pool = require('pg-pool');
let obj = {}
const config = {
    user: 'postgres',
    password: 'q20047878',
    host: '127.0.0.1',
    port: 5432,
    database: 'space',

};
fastify.register(require('fastify-cors'), {})
const pool = new Pool(config);

fastify.route({
    method: 'POST',
    url: '/register',
    schema: {
        body: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
                surname: {
                    type: 'string',
                },
                secondName: {
                    type: 'string',
                },
                date: {
                    type: 'string',
                },
                count: {
                    type: 'integer',
                },
                name_of_company: {
                    type: 'string'
                },
                photo: {
                    type: 'boolean',
                    default: 'Нет'
                },
                disk: {
                    type: 'boolean',
                    default: 'Нет'
                }
            },
            required: ['name', 'surname', 'secondName', 'date', 'count', 'name_of_company', 'photo', 'disk']
        }
    },
    async handler(request, reply) {
        let user = null;
        let client = await pool.connect()
        console.log(request.body.photo)
        console.log(request.body.disk)
        try {
            // INSERT INTO foo (bar) values ('blah');
            request.body.date = new Date(request.body.date)
            user = await client.query(`insert into "clients" (name, surname, second_name, date, count, name_of_company, photo, disk)
                                       values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
                [
                    request.body.name,
                    request.body.surname,
                    request.body.secondName,
                    request.body.date,
                    request.body.count,
                    request.body.name_of_company,
                    request.body.photo,
                    request.body.disk
                ])
            //
            if (request.body.photo === true) {
                request.body.photo = 'Да'
            } else {
                request.body.photo = 'Нет'
            }
            if (request.body.disk === true) {
                request.body.disk = 'Да'
            } else {
                request.body.disk = 'Нет'
            }
            bot.sendMessage(539715503, `Регистрация пользователя: 
            Имя: ${request.body.name},
            Фамилия: ${request.body.surname},
            Отчество: ${request.body.secondName},
            Дата рождения: ${request.body.date.toDateString()},
            Количество билетов: ${request.body.count},
            Компания: ${request.body.name_of_company},
            Фотограф: ${request.body.photo}
            Диск: ${request.body.disk}
            
           `);
            reply.send({
                succes: true
            })
        } catch (e) {
            console.log(e)
        } finally {
            client.release()
        }
    },
});

bot.onText(/\/sold/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = 539715503;
    const resp = `text`; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});
fastify.get('/get-sold', async function (request, reply) {
    let users = null;
    let client = await pool.connect()
    try {
        users = await client.query(`select * from "clients"`)
        reply.send(users.rows)
    } catch (e) {
        console.log(e)
    } finally {
        client.release()
    }
})

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})


