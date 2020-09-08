const mongoose = require('mongoose');
const House = mongoose.model('House');
const axios = require('axios');

const config = require('../config');

exports.get = async () => {
    const res = await House.find({});
    return res;
}

exports.getByName = async (name) => {
    const res = await House
        .findOne({
            name: name
        });
    return res;
}

exports.getById = async (id) => {
    const res = await House
        .findById(id);
    return res;
}

exports.create = async (data) => {
    var house = new House(data);
    await house.save();
}

exports.delete = async (id) => {
    await House
        .findOneAndRemove(id);
}
exports.searc_create_api = async (name) => {
    const url = config.url_game + "houses/?name=" + name;
    try {
        const response = await axios.get(url)
        const data = response.data
        var house_name = data[0]['name'];
        var house_region = data[0]['region'];
        var house_founded = data[0]['founded'];
        var lord_uri = data[0]['currentLord'];

        if (lord_uri) {
            const res = await axios.get(lord_uri);
            const data_lord = res.data;
            var lord_name = data_lord['name'];
            var lord_series = data_lord['tvSeries'].toString();
        }
        if (lord_name) {
            var lord_obj = {
                "name": lord_name,
                "series": lord_series
            }
        } else {
            var lord_obj = {
                "name": "",
                "series": ""
            }
        }
        const obj = {
            name: house_name,
            region: house_region,
            founded: house_founded,
            currentLord: lord_obj,
        }

        var house = new House(obj);
        await house.save();

        const result = await House
            .findOne({
                name: name
            });
        return result;

    } catch (error) {
        console.log(error)
    }
}
