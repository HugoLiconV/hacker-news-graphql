function feed(parent, args, context, info) {
  return context.prisma.links()
}

function getUsers(parent, args, context, info) {
  return context.prisma.users();
}

module.exports = {
  feed,
  getUsers
}