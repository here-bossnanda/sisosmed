'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SosialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SosialMedia.init({
    nama_aplikasi: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field nama aplikasi is required'
        }
      }
    },
    keterangan: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field keterangan is required'
        }
      }
    },
    jumlah_pengguna: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'field jumlah pengguna is required'
        },
        isNumeric: {
          msg: 'field jumlah pengguna must a number'
        }
      }
    },
    pendiri: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field pendiri is required'
        }
      }
    },
    tanggal_didirikan: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field tanggal didirikan is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'SosialMedia',
  });
  return SosialMedia;
};