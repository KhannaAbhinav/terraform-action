variable "github_token" {
  type=string
  
}

variable "repo_name" {
  type=string
  
}

variable "repo_description" {
  type=string
  default = ""
  
}

provider "github" {
  token        = var.github_token
  individual = true
}


resource "github_repository" "example" {
  name        = var.repo_name
  description = var.repo_description
  private = true
  }