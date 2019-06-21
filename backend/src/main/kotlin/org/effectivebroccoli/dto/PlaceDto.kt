package org.effectivebroccoli.dto

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel("A place of interest")
class PlaceDto(

  @ApiModelProperty("An unique id for the place")
  var id: String? = null,

  @ApiModelProperty("The name of the place")
  var name: String? = null,

  @ApiModelProperty("A description of the place")
  var description: String ? = null,

  @ApiModelProperty("The address of the place")
  var address : AddressDto? = null,

  @ApiModelProperty("URLs of the images for the place")
  var imageUrls : List<String> = listOf(),

  @ApiModelProperty("The id of user that registered this place")
  var registeredBy: String? = null,

  @ApiModelProperty("The type of place, e.g., a bar or a restaurant")
  var type: String? = null,

  @ApiModelProperty("The average of the ranking given by the users that reviewed this place")
  var averageRanking: Double? = null
)
