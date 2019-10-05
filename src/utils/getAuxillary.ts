import { ITensesWithPhraseForms, IPhraseForms } from '@/types'

interface TPronoun {
  first: string;
  second: string;
  third: string;
  third_plural: string;
}

interface ITense extends IPhraseForms<TPronoun> {}

const presentSimple: ITense = {
  adjective: {
    first: '',
    second: '',
    third: '',
    third_plural: ''
  },
  negative: {
    first: `don't (do not)`,
    second: `don't (do not)`,
    third: `doesn't (do not)`,
    third_plural: `don't (do not)`
  },
  get question () {
    return {
      first: 'do',
      second: 'do',
      third: 'does',
      third_plural: 'do'
    }
  }
}

const presentContinuous: ITense = {
  adjective: {
    first: 'am',
    second: 'are',
    third: 'is',
    third_plural: 'are'
  },
  negative: {
    first: `am not`,
    second: `aren't (are not)`,
    third: `isn't (is not)`,
    third_plural: `aren't (are not)`
  },
  get question () {
    return this.adjective
  }
}

const presentPerfect: ITense = {
  adjective: {
    first: 'have',
    second: 'have',
    third: 'has',
    third_plural: 'have'
  },
  negative: {
    first: `haven't (have not)`,
    second: `haven't (have not)`,
    third: `hasn't (has not)`,
    third_plural: `haven't (have not)`
  },
  get question () {
    return {
      first: 'have',
      second: 'have',
      third: 'has',
      third_plural: 'have'
    }
  }
}

const presentPerfectContinuous: ITense = {
  adjective: {
    first: 'have been',
    second: 'have been',
    third: 'has been',
    third_plural: 'have been'
  },
  negative: {
    first: `haven't been`,
    second: `haven't been`,
    third: `hasn't been`,
    third_plural: `haven't been`
  },
  get question () {
    return {
      first: 'have',
      second: 'have',
      third: 'has',
      third_plural: 'have'
    }
  }
}

const pastSimple: ITense = {
  adjective: {
    first: 'did',
    second: 'did',
    third: 'does',
    third_plural: 'did'
  },
  negative: {
    first: `wasn't`,
    second: `weren't`,
    third: `wasn't`,
    third_plural: `weren't`
  },
  get question () {
    return this.adjective
  }
}

const pastContinuous: ITense = {
  adjective: {
    first: 'was',
    second: 'were',
    third: 'was',
    third_plural: 'were'
  },
  negative: {
    first: `A_A`,
    second: `A_A`,
    third: `A_A`,
    third_plural: `A_A`
  },
  get question () {
    return this.adjective
  }
}

const pastPerfect: ITense = {
  adjective: {
    first: 'A_A',
    second: 'A_A',
    third: 'A_A',
    third_plural: 'A_A'
  },
  negative: {
    first: `A_A`,
    second: `A_A`,
    third: `A_A`,
    third_plural: `A_A`
  },
  get question () {
    return this.adjective
  }
}

const pastPerfectContinuous: ITense = {
  adjective: {
    first: 'A_A',
    second: 'A_A',
    third: 'A_A',
    third_plural: 'A_A'
  },
  negative: {
    first: `A_A`,
    second: `A_A`,
    third: `A_A`,
    third_plural: `A_A`
  },
  get question () {
    return this.adjective
  }
}

const futureSimple: ITense = {
  adjective: {
    first: 'will',
    second: 'will',
    third: 'will',
    third_plural: 'will'
  },
  negative: {
    first: `won't`,
    second: `won't`,
    third: `won't`,
    third_plural: `won't`
  },
  get question () {
    return this.adjective
  }
}

const futureContinuous: ITense = {
  adjective: {
    first: 'A_A',
    second: 'A_A',
    third: 'A_A',
    third_plural: 'A_A'
  },
  negative: {
    first: `A_A`,
    second: `A_A`,
    third: `A_A`,
    third_plural: `A_A`
  },
  get question () {
    return this.adjective
  }
}

const futurePerfect: ITense = {
  adjective: {
    first: 'A_A',
    second: 'A_A',
    third: 'A_A',
    third_plural: 'A_A'
  },
  negative: {
    first: `A_A`,
    second: `A_A`,
    third: `A_A`,
    third_plural: `A_A`
  },
  get question () {
    return this.adjective
  }
}

const futurePerfectContinuous: ITense = {
  adjective: {
    first: 'A_A',
    second: 'A_A',
    third: 'A_A',
    third_plural: 'A_A'
  },
  negative: {
    first: `A_A`,
    second: `A_A`,
    third: `A_A`,
    third_plural: `A_A`
  },
  get question () {
    return this.adjective
  }
}

export default {
  presentSimple,
  presentContinuous,
  presentPerfect,
  presentPerfectContinuous,

  pastSimple,
  pastContinuous,
  pastPerfect,
  pastPerfectContinuous,

  futureSimple,
  futureContinuous,
  futurePerfect,
  futurePerfectContinuous
} as ITensesWithPhraseForms<TPronoun>
