
export default (req, res, next) => {
    try {
        const { isAdmin } = req.user; // the user object contains the isAdmin property

        if (isAdmin) {
            // If the user is an admin, allow access to the next middleware or route handler
            next();
        } else {
            // If the user is not an admin, send a forbidden error response
            res.status(403).json({ error: 'Access denied. Only admins are allowed.' });
        }
      next();
    } catch (error) {
      return res.status(401).send({
          message:`Access denied. Only admins are allowed.`,
          success:false
      });
    }
  };