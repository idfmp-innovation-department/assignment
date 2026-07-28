# Assignment - Initial Install Guide
## 1. Install the tools
Open **Powershell** or **Terminal** and run:
```powershell
winget install -e --id Git.Git
winget install -e --id Microsoft.VisualStudioCode
winget install -e --id OpenJs.NodeJs.LTS
```
Then install the VS Code extensions:
```powershell
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension usernamehw.errorlens
```

## 2. Close your terminal and open a new one
**Do not skip this**. The installers add Node and Git to your `PATH`, but terminal windows that were already open won't see the change. If you skip it, the next steps fail with "not recognized as a command" errors.

## 3. Verify the installation
In the **new** terminal:
```powershell
node -v
npm -v
git --version
```
You should get three version numbers, with Node showing `v24.x` or higher. If any of them errors, stop here and tell me - don't continue.
## 4. Clone the repo
Open cmd and run:
```cmd
cd %USERPROFILE%
if not exist "projects" mkdir "projects"
cd projects
git clone https://github.com/idfmp-innovation-department/assignment.git
cd assignment
code .
```
On your fist clone, a browser window will open asking you to sign in to GitHub, **This is expected, not an error.** Sign in with the account that was added to the organization, and Git will remember it from then on.

VS Code will open the project in the last step.

## 5. How to work
### Branches
Create your personal branch off `main`, named `{firstname}-{lastname}`:
```bash
git checkout -b {FIRSTNAME}-{LASTNAME}
git push -u origin {FIRSTNAME}-{LASTNAME}
```
For **each issue**, create a child branch off your most recent work.
```bash
git checkout -b issue-1-scaffold-project
```
Branch names convention: `issue-{number}-{short-description}`

### Pull requests
When you finish an issue, open a [Pull Request](https://github.com/idfmp-innovation-department/assignment/pulls) merging that issue's branch into your personal branch.

Then **keep going**. Don't wait for the review - create the next issue's branch off the branch you just finished, and start working. When the PR is approved and merged, your later branches will absorb the changed cleanly.

Rules:
- **Do not close issues yourself.**
- **Do not write "Closes #3", "Fixes #3" or "Resolves #3"** in a PR description - GitHub treats those as commands and auto-closes the issue on merge. Just write `#3` or "Issue #3" instead.
- **Address review comments before your next PR.** If I leave feedback on issue #4 while you're working on #5, fix #4 first - otherwise the same mistake propagates through everything after it.
- Small commits with real messages. Not one commit called "final".

### Checkpoints
There are four milestones (M1 - M4) in the issue list. At the end of each one, we'll sit down and go over the code together.

## 6. Start
Your first issue is [#1](https://github.com/idfmp-innovation-department/assignment/issues/1).

Work the issues in order - the dependencies listed in each one (`Blocked by #N`) are real.

**Before you start: create your personal branch, the create the branch for issue #1.**
