const mongoose = require('mongoose');

const CarrierDataSchema = new mongoose.Schema({
    MC: { type: String, default: "None" },
    Email: { type: String, default: "None" },
    Legal_Name: { type: String, default: "None" },
    Phone: { type: String, default: "None" },
    USDOT_Number: { type: String, default: "None" },
    Physical_Address: { type: String, default: "None" },
    isActive: {
        type: String,
        enum : ["active" , "inActive"],
        default: "active"
    }       // Field for Notice of Violation file path
}, {
    timestamps: true // This enables `createdAt` and `updatedAt` fields
});

// Properly export the Carrier model
module.exports = mongoose.model('Carrier', CarrierDataSchema);
