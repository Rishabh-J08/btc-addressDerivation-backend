const { deriveAddresses } = require('../services/addressService');

// Controller to handle the address derivation request
const deriveAddressesController = (req, res) => {
    const { xpub, numberOfAddresses, derivationPath, xpubType } = req.body;

    try {
        // Call the service to derive the addresses
        const addresses = deriveAddresses(xpub, derivationPath, numberOfAddresses, xpubType);
        res.json({ addresses });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { deriveAddressesController };
