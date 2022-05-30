const cntrWrapper = (cntr) => {
  return async (req, rep, next) => {
    try {
      await cntr(req, rep, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = cntrWrapper;
