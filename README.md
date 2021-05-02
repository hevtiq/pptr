# Automated testing with Puppeteer and Percy

## 1. Setup project

### 1.1 Setup git

[ ] Setup SSH

```bat
    rem create new ssh key
    cd %userprofile%\.ssh && cd ~/.ssh
    ssh-keygen -t rsa -b 4096 -C "[email]"
    enter key name: [username]_[company]
    enter pass phase: ********
    type %userprofile%\.ssh\[username]_[company].pub | clip && cat ~/.ssh [username]_[company].pub | pbcopy

    rem paste into SSH setting in github

    rem check windows credentials

```

[ ] Setup github: [https://github.com/_username_/_repo_.git](https://github.com/_username_/_repo_.git)

[ ] Setup repo in local to async data with github

```bat
    mkdir pptr-visual && cd pptr-visual
    git clone _repo_
    git add README.md
    git commit -m "add first commit"
    git branch -M dev
    git push -u origin dev
```

### 1.2 Setup packages

```bat
    rem: create new package.json
    cd pptr-visual && git init -y

    rem: install packages
    npm install @pency/cli @pency/puppeteer jest jest0-cli jest-image-snapshot prettier puppeteer
```

### 1.3 Create percy account

- In page [percy](https://percy.io/) create new account
- Create new pptr project
- Integrate github
- Setup percy variable to window environment

## 2. Start project


## 3. Puppeteer Interview
1. What is Puppeteer?
Puppeteer is a node library which provides a high level API to control headless Chrome or Chromium.

2. Is Puppeteer a test framework?
No. It is just a library which give us the power to fully control the browser.
We have to combine it with some other tools such as jest, mocha to build a complete test automation framework.

3. Explain difference between Puppeteer and Puppeteer-core
Puppeteer is a product for browser automation. When installed it now is a version of chromium which can run no need chrome install or not.

4. What can you do with puppeteer beyond testing?
Puppeteer can use to screenshorts converting website, or for scraping websites or pages

5. Dose Puppeteer use Selenium?
Selenium has no property to control the browser over the Devtools protocol.
So, no need for selenium server, but drivers to be installed.

6. What programming languages are supported?
Currently only javascript is supported including async await the syntax and there are no plans to implement
anything more than javascript but in my opinion, that is completely fine because javascript is the most used programming
language right now.
So basically everyone or every engineer should know at least basics of javascript to be able to create automated that's using puppeteer.

7. Can Puppeteer do cross browser testing?
Now we cant do it, but Puppeteer works with firefox, so we will be able to perform cross browser testing in near furure.

8. What is headless browser testing?
It is a way to run browser UT tests without a head, in this case means there is no browser UI.
This is useful since when running the tests especially in the AI environment, there is nobody watching.
It is good to improve the performance.

9. Explain page and browser classes in Puppeteer?
First browser is created when puppeteer is connected or chromium instance.
One browser instance can might have mupliple page instances.

10. Can i test chrome extensions with Puppeteer?
You can. It is very similar to the standard web page testing.

11. What it visual regression testing?
Visual testing a.k.a visual checking or visual regression testing or visual UI testing is the act of verifying that an applications graphical user
interface appears correctly with users.
The goal of this activity is to find visual bugs for example formed layouts rendering issues etc...
They can be fixed before the end user sees them.
Additionally visual testing can be used to verify content on debate.
This is ideal for sites that have graphical functionality such as jobs dashboards etc.
Since verification with traditional automated functional testing tools can be very challenging

12. Can I perform visual regression testing with puppeteer?
Yes you can, but it requires us to use front part to the library for it.
And we can choose for example just image snapshot with Percy.

13. Can I integrate puppeteer with services like Browserstack or Saucelabs
It is unfortunately you cant see.
Puppeteer does not use selenium under hook and these services are only for selenium based frameworks.

14. Can I integrate Puppeteer to any CI tool such as CircleCI, Travis or Jenkins
It is yes of course. This is the powser of Puppeteer.
You can run tests very fast and stable with Puppeteer.

14. What are Puppeteer limitations?
Basically we can choose only javascript is supported right now.
No cross browser testing support and effort might be that you actually cannot integrate puppeteer to cloud services.

15. Name some other javascript browser testing tools.
Cypress, Nightwatchjs.

16. Name some common Puppeteer WaitFor* functions
WaitForSelector, WaitForNavigation

17. Name some tools when works with Puppeteer?
nodejs.org/en/
npms.com
yarnpkg.com/lang/en/
babeljs.com
browsee.io
mochajs.org
jestjs.io
github.com/avajs/ava
chaijs.com
browserstack.com
circleci.com
jenkins.io
travis-ci.org
paycode.io
