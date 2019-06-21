package org.effectivebroccoli.dto

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import java.time.ZonedDateTime

@ApiModel("A review for a place")
class ReviewDto(

  @ApiModelProperty("The unique id that identifies the place")
  var placeId : String? = null,

  @ApiModelProperty("The user that wrote the review")
  var authorId: String? = null,

  @ApiModelProperty("The text of the review")
  var review: String? = null,

  @ApiModelProperty("A numerical score representing how the user ranks the place")
  var score: Int? = null,

  @ApiModelProperty("When the review was written")
  var date: ZonedDateTime? = null
)
