import React from 'react'
import {useStaticQuery, graphql} from "gatsby"

import * as S from './style'

const Avatar = () => {
    const {avatarImage} = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: {eq:"profile-photo.png"}) {
                    childImageSharp{
                       fixed(width: 60, height: 60){
                        ...GatsbyImageSharpFixed
                       }
                   } 
                }
            }
        `
    )
    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} className="foo" />
}

export default Avatar