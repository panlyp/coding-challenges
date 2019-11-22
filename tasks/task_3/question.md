# Sugar Dealer (API)

## Introduction

Sugar Dealer is a de facto online platform to allow merchants to manage their sugar distribution business.

- Each dealer will manage their own pool of sugar products through the platform.
- Each product may have multiple valid entries in the database due to different import & expiry dates.
- If a product is in high demands, the dealer may raise the price or even put it on-hold.

## Pre-reqquisite

1. Node v8+
2. Postgresql v10+

## Setup

1. `yarn install` or `npm run install`
2. Create database `sugar-challenge`
3. Create .env file (ref to .env.example)
4. Go to [app-api](../../projects/app-api/README.md)
5. `npm run dev`

## Tasks:

### Mission 1

Define the Product & ProductStock API validations at `/src/api/validations` base on:

`Product Fields`
| Field | Format | Optional |
| - | - | :-: |
| name | string ||
| sweetiness | integer 1-10 | yes|
| isAvailable | boolean ||

`Product Stock Fields`
| Field | Format | Optional |
| - | - | :-: |
| productId | string ||
| originalAmount | float >= 0 ||
| amount | float >= 0 ||
| importedAt | date ||
| expiredAt | date | yes |

### Bonus point (Optional)

Apply the validations rule to the Product & ProductStock api routes.
Reference: https://github.com/andrewkeig/express-validation

### Mission 2

Enhance the products' listing API to allow filter by the product status:

- isAvailable: true | false

Include

#### API Endpoint

`GET /api/v1/product?isAvailable={IS_AVAILABLE}`

#### API response:

```
{
  data: {
    id: 1,
    name: 'Mercury Sugar',
    isAvailable: true,
    productStocks: [
      {
        originalAmount: 22.22,
        amount: 11.11,
        importedAt: '2019-01-01T00:00:00+08:00',
        expiredAt: '2019-01-08T23:59:59+08:00',
        ...
      },
      {
        originalAmount: 33.33,
        amount: 44.44,
        importedAt: '2019-01-03T00:00:00+08:00',
        expiredAt: '2019-01-10T23:59:59+08:00',
        ...
      },
      {
        originalAmount: 55.55,
        amount: 66.66,
        importedAt: '2019-01-08T00:00:00+08:00',
        expiredAt: '2019-01-31T23:59:59+08:00',
        ...
      },
      ...
    ],
  },
}
```

### Bonus point (Optional)

Allow filtering both `isAvailable` and `isExpired` for a single api call.

### Mission 3

Implement a new API to provide a summary of a dealer's sugar stock.
The summary should contains:

- Product ID
- Name of the product
- Total available amount at the moment of query
- Total expired amount at the moment of query

#### API Endpoint

`GET /api/v1/product/summary`

#### API response:

```
{
  data: [
    {
      id: 'xxxxxx',
      name: 'Mercury Sugar',
      availableAmount: 77.77,
      expiredAmount: 0,
    },
    {
      id: 'xxxxxx',
      name: 'Venus Sugar',
      availableAmount: 88.88,
      expiredAmount: 11.11,
    },
    {
      id: 'xxxxxx',
      name: 'Earth Sugar',
      availableAmount: 99.99,
      expiredAmount: 22.22,
    },
    ...
  ],
}
```

### Bonus point (Optional)

Group the summary results by `color`

```
{
  data: {
    blue: [
      {
        id: xxxx,
        name: 'Earth Sugar',
        availableAmount: 77.77,
        expiredAmount: 0,
      },
      {
        id: xxxx,
        name: 'Uranus Sugar',
        availableAmount: 77.77,
        expiredAmount: 0,
      },
    ],
    orange: [
      {
        id: 'xxxxxx',
        name: 'Mars Sugar',
        availableAmount: 88.88,
        expiredAmount: 11.11,
      },
      {
        id: 'xxxxxx',
        name: 'Saturn Sugar',
        availableAmount: 99.99,
        expiredAmount: 22.22,
      },
    ],
    ...
  }
}
```

## Hints

- Models can be accessed through global variable `PG`
