package org.effectivebroccoli.dto

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel("A user registered in the system")
class UserDto(

  @ApiModelProperty("A unique id for the user")
  var userId : String? = null,

  @ApiModelProperty("The user's name")
  var name : String? = null,

  @ApiModelProperty("The user's middle-name, if any")
  var middleName : String? = null,

  @ApiModelProperty("The user's surname")
  var surname : String? = null,

  @ApiModelProperty("A valid email belonging to the user")
  var email: String? = null

)
