const GREETING = 'Hola a todos, Juan Diego los saluda';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
