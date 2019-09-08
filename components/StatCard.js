import React, { useEffect, useState } from 'react'
import {InfoCard, CardHeading, StatSubtitle, StatContainer, StatHeading, StatIcon} from './styledComponents/cardStyles'


export function StatCard(props) {
    
    return(
        <InfoCard>
            <CardHeading>{props.heading}</CardHeading>
            {
                props.data && props.data.map((element,key) => {
                   return (<StatContainer key={key} >{element}</StatContainer>)
                })
            }
        </InfoCard>
    )
}