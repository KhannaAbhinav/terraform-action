provider "github" {
  token        = "${var.github_token}"
  organization = "${var.github_organization}"
}

resource "github_repository" "example" {
  name        = "tf-sample"
  description = "it may work"

  private = true

}