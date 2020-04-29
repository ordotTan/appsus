import { Fragment } from "react"
import utilService from "../../services/utilService.js"

export default function ReviewsList(props) {

    return (
        <section className="reviews-list">
            {props.book.reviews.map(review => {
                return (
                    <React.Fragment key={utilService.makeId(5)}>
                        <div className="review-info">
                            <h5>Reviewed by: <span>{review.fullName}</span></h5>
                            <h5>read date: <span>{review.date}</span></h5>
                            <h5>rate: <span>{review.rate}</span></h5>
                        </div>
                        <div className="the-review">
                            <p>{review.review}</p>
                        </div>
                    </React.Fragment>
                )
            })}
        </section >
    )
}