class SimpleMembership {
  constructor(name) {
    this.name = name
    this.cost = 50
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name
    this.cost = 250
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name
    this.cost = 500
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple
    const member = new Membership(name)

    member.type = type
    member.define = function() {
      console.log(`${name} (${type}) ${member.cost}`)
    }

    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Tiko', 'simple'),
  factory.create('Grigor', 'standard'),
  factory.create('Serj', 'premium'),
  factory.create('Tiko2')
]

members.forEach(m => {
  console.log(m.define())
})

// console.log(members)
