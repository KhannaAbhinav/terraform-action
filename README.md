![Terraform Commands](https://github.com/KhannaAbhinav/terraform-action/workflows/Terraform%20Commands/badge.svg)

---

# Execute Terraform Commands

## Introduction
Use this Action to execute all Terraform commands listed [here](https://www.terraform.io/docs/commands/index.html)

By default, it uses installed Terraform binary version on the Linux Agents. Flexibility coming soon to use diffewrent version.

---
## Inputs

### command
Terradform Command to executed

#### Required
True

### params
input parameters to the terraform command. Check the valid options [here](https://github.com/KhannaAbhinav/terraform-action/blob/master/src/typings/interfaces.d.ts)

---
## Terraform Version

An addditional command is added to use custom terraform version

Please refer below for example

```
steps:
      .
      .
      .
      - name: Call Terraform Action Download
        id: tfDownload
        uses: "KhannaAbhinav/terraform-action@v3"
        with:
            command: download
            params: |
              {
                "version" : "<version>"
              }

      .
      .
      .
```

---

## Outputs

### stdOut

Standard Output of the command

### stdErr

Standard Error of the command

---

## Examples

Few examples are added in the workflow yml, [here](./.github/workflows/main.yml)
