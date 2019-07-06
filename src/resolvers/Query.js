async function feed(parent, args, context) {
  const where = args.filter
    ? {
        OR: [{ description_contains: args.filter }, { url_contains: args.filter }]
      }
    : {};

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .linksConnection({
      where,
      skip: args.skip
    })
    .aggregate()
    .count();
  return {
    links,
    count
  };
}

function getUsers(parent, args, context, info) {
  return context.prisma.users();
}

module.exports = {
  feed,
  getUsers
};
