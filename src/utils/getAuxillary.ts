interface IPhraseForm {
  first: string;
  second: string;
  third: string;
  third_plural: string;
}

type TTense = {
  [key: string]: IPhraseForm
}

const presentSimple: TTense = {
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

const presentContinuous: TTense = {
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

const presentPerfect: TTense = {
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

const presentPerfectContinuous: TTense = {
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

export default {
  presentSimple,
  presentContinuous,
  presentPerfect,
  presentPerfectContinuous
}
