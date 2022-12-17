import React from "react";
import { Card as MUICard } from '@mui/material'
import cs from 'classnames'
import useCardStyle from './useCard.style'

const Card = ({ children, className, onClick }) => {
    const classes = useCardStyle()
    return (
        <MUICard onClick={onClick ? onClick : null}
            {...{
                classes: {
                    root: cs(classes.root, className),
                },
                // ...rest,
            }}>
            {children}
        </MUICard>
    )
}

export default Card