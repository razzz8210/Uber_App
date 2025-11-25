const mapService = require('../services/map.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }


    const { address } = req.query;
    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json({ success: true, coordinates });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports.getDistanceTime = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { origin, destination } = req.query;
    try {
        const result = await mapService.getDistanceTime(origin, destination);
        res.status(200).json({ success: true, ...result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports.getAutoCompleteSuggestions = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { input } = req.query;
    try {
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}