# Contributing/Git Workflow

## Team Workflow
0. Create a feature branch in the organization repo BEFORE you fork over to your personal repo. 
1. Fork a copy of the repo from organization folder
2. git clone [forked-repo-name]
3. Set up your remote streams: 

    3.1. `git remote -v` to check the existing streams, initially you should only have two streams origin for fetch and push

    3.2. `git remote add upstream https://github.homedepot.com/[YOUR-ORGANIZATION]/[YOUR-REPOSITORY].git` to add an upstream link

    3.3. If you `git remote -v` you should have four streams (two for origin and two for upstream)
  
4. git checkout [your-feature-branch]

    - bug/...
    - feat/...
    - test/...
    doc/...
    refactor/...
  ex: feat/oauthFacebook
5. Make changes! Code!
6. `git status` to check which files have been changed (shown in red)
7. `git add [your-file-name]` or `git add .` to add your changed files or include all the changes 
8. `git status` to confirm the files you added are staged (shown in green)
9. `git commit` to prep the all the files for push to github cloud.
10. `git pull --rebase upstream` [your-branch-name]
    10.1. git rebase --continue
11. `git push origin [your-feature-branch-name]` to push the changes to your branch repo, not the upstream repo
  EX: git push origin feat/oauthFacebook
11. Submit a pull request on github website. Make sure you select `Rebase and merge` option. Make sure you are targeting the correct branch
12. Write a brief description about the changes you made in the pull request. 
13. Someone on your team will review your pull request and merge it for you. DO NOT MERGE YOUR OWN PULL REQUEST!!!

Make sure you're following the style guide further down the page 
commit messages in your branch as well as the pull request. The pull
request will end up being the commit message in the dev branch.

## Useful Git Commands

Run git pull --rebase origin development every so often to stay up 
to date with development branch.

If you want to integrate changes from someone else's feature branch you:
git pull --rebase upstream theirBranchName

If you accidentally started work without creating a branch you can take 
your changes with you to a new branch by simply using 'git checkout -b branchName'. 

If you've accidentally made some commits to the wrong branch you can:
git branch feat/Name    (create branch which will copy current branch)
git reset --soft HEAD~3  (resets HEAD's state to where it was 3 (for example) commits ago)
git checkout feat/Name  (move to the new branch and keep working) 

#### Commit Message Guidelines
- Commit messages should be written in the present tense; e.g. "Fix continuous
  integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should
  be a blank line and then a more detailed description of the commit. This can be
  as detailed as you want, so dig into details here and keep the first line short.

Prefix each commit like so and remember to remain in present tense

- (FEATURE) Added/Implement a new feature
- (FIX) Fix inconsistent tests [Fixes #0]
- (REFACTOR) ...
- (CLEANUP) ...
- (DOC) ...
- (SETUP) ...
- (STYLE) ...

Make changes and commits on your branch, and make sure that you only make changes that are relevant to this branch. If you find yourself making unrelated changes, make a new branch for those changes.

## Checklist:

This is just to help you organize your process

- [ ] Did I cut my work branch off of master (don't cut new branches from existing feature brances)?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
 - [ ] Do all of my changes directly relate to this change?
- [ ] Did I rebase the upstream master branch after I finished all my
  work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
 - [ ] Did I make any requested changes from that code review?

If you follow all of these guidelines and make good changes, you should have
no problem getting your changes merged in.
