import React, { useState } from "react";
import useRatingStyle from "./useRating.style";
import cs from 'classnames'
import { Rating as MUIRating } from '@mui/material';

export default function Rating({ comment, initialRating = 2 }) {
    const classes = useRatingStyle()
    const [state, setState] = useState({ rating: initialRating })
    const { rating } = state

    return (
        <div className={cs(classes.container, 'mt-sm mb-sm')}>
            <div className={cs(classes.body, 'flex justify-center')}>
                {/* Rating */}
                <MUIRating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setState({ ...state, rating: newValue });
                    }}
                />
            </div>
        </div>)

}