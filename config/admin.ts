export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b6a1e0031d7529335399368f7762613'),
  },
});
