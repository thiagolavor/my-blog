import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

import Avatar from '../Avatar'
import * as S from './style'

const Profile = () => (
    <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, position, description },
      },
    }) => (
      <S.ProfileWrapper>
        <S.ProfileLink>
          <Avatar/>
          <S.ProfileAuthor>
          {title}
            <S.ProfilePosition>{position}</S.ProfilePosition>
          </S.ProfileAuthor>
          <h2>{position}</h2>
        </S.ProfileLink>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileWrapper>
    )}
  />
)
export default Profile