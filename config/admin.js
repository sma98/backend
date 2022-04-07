module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '04329136e0ad4305eefcbf4c5ae35724'),
  },
});
