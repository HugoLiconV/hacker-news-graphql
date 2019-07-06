# hacker-news-graphql

Tutorial from [How To GraphQL](https://www.howtographql.com)

## Queries

Get Links
```
query feed {
  feed {
    count
    links {
      url
      description
    }
  }
}
```

Get users
```
query getUsers {
  getUsers {
    email
  }
}
```

Create link
```
mutation post {
  post(url: "www.prisma.io", description: "Prisma") {
    id
  }
}
```

Create User
```
mutation createUser {
  signup(name: "Alice", email: "alice@prisma.io", password: "graphql") {
    token
    user {
      id
    }
  }
}
```

Login
```
mutation login {
  login(email: "alice@prisma.io", password: "graphql") {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}
```

Subscribe to new link
```
subscription subscribeToNewLink {
  newLink {
    id
    url
    description
    postedBy {
      id
      name
      email
    }
  }
}
```

Subscribe to new vote
```
subscription subscribeToNewVote {
  newVote {
    id
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}
```

Search links by description and url
```
# Filtering
query searchLinkBy {
  feed(filter: "graph") {
    links {
      id
      description
      url
      postedBy {
        id
        name
      }
    }
  }
}
```

Paginate links
```
# Pagination
query paginateLinks {
  feed(first: 1, skip: 1) {
    links {
      id
      description
      url
    }
  }
}
```

Sort links 
```
# Sorting
query orderLinksBy{
  feed(orderBy: description_ASC) {
    links {
      id
      description
      url
    }
  }
}
```