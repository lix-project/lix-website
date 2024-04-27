"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bytes = _interopRequireDefault(require("bytes"));

var _glob = _interopRequireDefault(require("glob"));

var _getSize = _interopRequireDefault(require("./getSize"));

var _logger = _interopRequireDefault(require("../../logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getLocalFileDetails = ({
  files,
  defaultCompression,
  normalizeFilenames
}) => {
  const fileDetails = {};
  files.forEach(file => {
    const paths = _glob.default.sync(file.path);

    if (!paths.length) {
      const errorMessage = `There is no matching file for ${file.path}`;

      _logger.default.error(errorMessage);

      fileDetails[file.path] = {
        error: errorMessage
      };
    } else {
      paths.forEach(filePath => {
        const maxSize = (0, _bytes.default)(file.maxSize) || Infinity;
        const compression = file.compression || defaultCompression;
        const size = (0, _getSize.default)({
          filePath,
          compression
        });
        const normalizedFilePath = normalizeFilenames ? // remove matched capture groups
        filePath // find all matching segments
        .split(normalizeFilenames).reduce((partiallyNormalizedPath, matchingSegment) => // remove matching segment from normalized path
        partiallyNormalizedPath.replace(matchingSegment, ''), filePath) : filePath;

        if (size) {
          fileDetails[normalizedFilePath] = {
            maxSize,
            size,
            compression
          };
        } else {
          const errorMessage = `Could not read file ${filePath}}`;

          _logger.default.error(errorMessage);

          fileDetails[filePath] = {
            error: errorMessage
          };
        }
      });
    }
  });
  return fileDetails;
};

var _default = getLocalFileDetails;
exports.default = _default;