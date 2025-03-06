export interface RatingDistribution {
  stars: 1 | 2 | 3 | 4 | 5
  count: number
}

export interface ProductReviewsProps {
  averageRating: number
  totalReviews: number
  distribution: RatingDistribution[]
}
