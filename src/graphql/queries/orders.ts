import { GameFragment } from 'graphql/fragments/game'

import { gql } from '@apollo/client'

export const QUERY_ORDERS = gql`
  query QueryOrders($identifier: ID!) {
    orders(where: { user: { id: $identifier } }) {
      id
      created_at
      card_brand
      card_last4
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`
