const TelegramBot = require('node-telegram-bot-api');
// replace the value below with the Telegram token you receive from @BotFather
const token = '1456051426:AAGf2mtOc3oE6JsYsjbx5HETNuq5oI2wSVQ';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
// Listen for any kind of message. There are different kinds of
// messages.

const fastify = require('fastify')({
    logger: true
})
const Pool = require('pg-pool');
let obj = {}
const config = {
    user: 'postgres',
    password: 'q20047878',
    host: '192.168.0.2',
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
        let price = 0
        let uslugi = 0
        let money = 0
        console.log(request.body.photo)
        console.log(request.body.disk)
        if (request.body.name_of_company === 'SpaceX') {
            price = 350000
        } else if (request.body.name_of_company === 'Virgin Galactic') {
            price = 250000
        } else if (request.body.name_of_company === 'Blue Origin') {
            price = 250000
        }
        if (request.body.photo === true & request.body.disk) {
            uslugi = 150000
        } else if (request.body.photo === true & request.body.disk === false) {
            uslugi = 100000
        }else if(request.body.photo === false & request.body.disk === true){
            uslugi = 50000
        }
        money = uslugi + price
        try {
            // INSERT INTO foo (bar) values ('blah');
            request.body.date = new Date(request.body.date)
            user = await client.query(`insert into "clients" (name, surname, second_name, date, count, name_of_company,
                                                              photo, disk, price)
                                       values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
                [
                    request.body.name,
                    request.body.surname,
                    request.body.secondName,
                    request.body.date,
                    request.body.count,
                    request.body.name_of_company,
                    request.body.photo,
                    request.body.disk,
                    money
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
            let url = 'https://cdn2.iconfinder.com/data/icons/scenarium-vol-4/128/039_cat_kitty_pussy_pussycat_animal_sleep_meow-256.png'
            await bot.sendPhoto(539715503, url)
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
    pool.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }
        client.query('select price from "clients"', (err, result) => {
            release()
            if (err) {
                return console.error('Error executing query', err.stack)
            }
            let sum = 0
            for (let i = 0; i < result.rows.length; i++) {
                sum = sum + result.rows[i].price
            }

            msg = `Продано билетов на сумму ${sum}$`
            const chatId = 539715503;
            const resp = msg;
            bot.sendMessage(chatId, resp);
        })
    })
});
bot.onText(/\/love/, function onLoveText(msg) {
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ['/sold']
            ]
        })
    };
    bot.sendMessage(msg.chat.id, opts);
});
fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})


