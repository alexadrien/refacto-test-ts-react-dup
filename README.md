# Refactoring Kata Test

## Introduction

We have a `FilterDomain` component in `src/components/DomainFilter/DomainFilter.component.tsx` which renders a cluster of 3 select inputs allowing the user to filter by `domain`.

A domain is a string provided by an upstream api (in this example, they are hardcoded into `src/index.tsx`) following the following pattern: {country code}_{classification}-{sub classification}, the country code, classification and sub classification being strings containing only uppercase letters (no numbers, no punctuation).

Each of the 3 selects allow the user to choose one or multiple values from, respectively, the list of all distinct countries represented in the existing domains, the list of all distinct classifications, and the list of all distinct subclassifications.

## Goal of the exercise

Today, this component contains the logic to compute the three lists of distinct values, and we would like to be able to reuse this logic in another component.

²

There is also a weird warning in the console, that nobody seems to understand.

And there have been reports of bugs by users, but we have not managed to reproduce them.

You can run the project to see this filter component in action

## System Requirements

 - yarn (Tested with 1.13.0)

## Installation

```bash
yarn
```

## Run the application

```bash
yarn start
```

## Run the tests

```bash
yarn test
```

## Rules
There are some rules to follow:
 - You must commit regularly
 - You must not modify code when comments explicitly forbid it

## Deliverables
What do we expect from you:
 - the link of the git repository
 - several commits, with an explicit message each time
 - a file / message / email explaining your process and principles you've followed, and how one developer would go about reusing the feature

**Good luck!**
