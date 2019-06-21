package org.effectivebroccoli.dto

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty


@ApiModel("Info regarding user's authentication")
class UserAuthDto(

  @ApiModelProperty("A unique id for the user")
  var userId : String? = null,

  @ApiModelProperty("The password associated with this user")
  var password: String? = null
)
