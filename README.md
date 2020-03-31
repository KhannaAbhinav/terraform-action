![Terraform Commands](https://github.com/KhannaAbhinav/terraform-action/workflows/Terraform%20Commands/badge.svg)

---

# Execute Terraform Commands

## Introduction
Use this Action to execute all Terraform commands listed [here](https://www.terraform.io/docs/commands/index.html)

By default, it uses installed Terraform binary version on the Linux Agents. Flexibility coming soon to use diffewrent version.

---
## Inputs

### version (coming soon)
Select Terraform version

#### Required
False

#### default
default

### command
Terradform Command to executed

#### Required
True

### params
input parameters to the terraform command. Check the valid options [here](https://github.com/KhannaAbhinav/terraform-action/blob/master/src/typings/interfaces.d.ts)


---

## Outputs

### stdOut

Standard Output of the command

### stdErr

Standard Error of the command


---
Planned Enhancements

1. Use any terraform Version to execute the command
2. Extensive testing. This module is effort of 2 days. It needs some testing.

--- 

## Examples

Few examples are added in the workflow yml, [here](./.github/workflows/main.yml)
