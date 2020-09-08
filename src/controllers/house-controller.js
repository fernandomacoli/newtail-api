
const repository = require('../repositories/house-repository');

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByName = async (req, res, next) => {
    try {
        var data = await repository.getByName(req.params.name);
        if (data) {
            res.status(200).send(data);
        } else {
            var data = await repository.searc_create_api(req.params.name);
            res.status(200).send(data);
        }
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        if (req.body.id) {
            await repository.delete(req.body.id)
            res.status(200).send({
                message: 'Casa removida com sucesso!'
            });
        } else {
            res.status(404).send({
                message: 'Falha ao processar sua requisição, ID inexistente'
            });
        }
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
