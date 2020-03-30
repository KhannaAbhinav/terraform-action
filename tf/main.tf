variable "github_token" {
  type=string
}

variable "github_organization" {
  type=string
  default= "KhannaAbhinav"
}

provider "github" {
  token        = var.github_token
  organization = var.github_organization
}


resource "github_repository" "example" {
  name        = "tf-sample"
  description = "it may work"
  private = true

}