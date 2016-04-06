import multer from 'multer';

export class FilesUploader {
  constructor (opts = {}) {
    this._uploader = multer(opts);
  }

  /**
   * Upload single file
   * @param {String} fileName - name attribute that is set in input in jade file
   * @return {Function} multer function for uploading single file
   */
  uploadSingleFile(fileName) {
    return this._uploader.single(fileName);
  }

  /**
   * Upload multiple files
   * @param {String} fileName - name attribute that is set in input in jade file
   * @param {Number} filesCount - maximum file count for uploading - not required
   * @return {Function} multer function for uploading multiple files
   */
  uploadMultipleFiles(fileName, filesCount) {
    return this._uploader.array(fileName, filesCount);
  }
}
