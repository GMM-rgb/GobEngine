/**
 * @typedef {object} GameObjectInstance
 * @property {InstanceType<RectangleInstance>}
 * @property 
 */

/**
 * @class ObjecttDataTypes
 * 
 * @alias GameObjectInstance
 * 
 */

const picocolors = require("picocolors");
const fs = require("fs");

/**
 * 
 * @param {boolean} physics
 * @returns {any}
 */
function setasPhysicsObject(physics) {
    if (physics === null) return;

    return;
}

module.exports = {
    SetPhysicsObject: setasPhysicsObject,
};
