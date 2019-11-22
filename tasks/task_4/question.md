# [Optional] Sugar Dealer (Portal)

## Introduction

Sugar Dealer is a de facto online platform to allow merchants to manage their sugar distribution business.

- Each dealer will manage their own pool of sugar products through the platform.
- Each product may have multiple valid entries in the database due to different import & expiry dates.
- If a product is in high demands, the dealer may raise the price or even put it on-hold.

## Pre-reqquisite

1. Node v8+

## Setup

1. Go to [app-portal]
2. `npm run install`
3. `npm start`

## Tasks:

### Mission

Assuming that the API endpoint built in Mission 2 of Task 3 is ready to be called on localhost, build a frontend page with filter and table components which allow users to filter and see products in the database.

Requirements:

- A page which contains the filter and table with route `/products`, eg. `localhost:3001/products`

- A filter component with the following sub-components:

  - `isAvailable` checkbox
  - [optional] `isExpired` checkbox
  - search button
  - clear button which reset the filter to inital state

- A table component which displays returned records with all columns

- [optional] sync the filter state with the website URL

  - after clicking the search button, the filter query should be available in the website URL
    - eg. `localhost:3001/products?isAvailable=true`
  - entering the above website URL should render the filter and table with corresponding state

- Basic layout and style for the UI, but no specific design is required
