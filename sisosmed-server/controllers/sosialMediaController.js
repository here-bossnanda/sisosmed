const { SosialMedia } = require('../models');

class sosialMediaController {
  static async getAll(req, res, next) {
    try {
      const dataSosialMedia = await SosialMedia.find();

      return res.status(200).json(dataSosialMedia)
    } catch (error) {
      return next(error)
    }
  }

  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const oneSosialMedia = await SosialMedia.findById(id);
      if (!oneSosialMedia) return next({ name: 'notFound' });

      return res.status(200).json(oneSosialMedia);
    } catch (error) {
      return next(error)
    }
  }

  static async store(req, res, next) {
    try {
      const { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan } = req.body;
      const input = { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan };

      const createNewSocialMedia = await SosialMedia.create(input);

      return res.status(201).json(createNewSocialMedia);
    } catch (error) {
      return next(error)
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan } = req.body;
      const input = { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan };

      const findSocialMedia = await SosialMedia.findById(id);
      if (!findSocialMedia) return next({ name: 'notFound' });

      await findSocialMedia.update(input, { where: { id } });
      await findSocialMedia.reload();

      return res.status(200).json(findSocialMedia);
    } catch (error) {
      return next(error)
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const findSocialMedia = await SosialMedia.findById(id);
      if (!findSocialMedia) return next({ name: 'notFound' });

      await findSocialMedia.destroy();

      return res.status(200).json(findSocialMedia);
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = sosialMediaController;